import { useEffect, useState } from 'react'
import { useAuth } from './context/AuthProvider'
import { getHousehold } from '../adapters/householdAdapter'


export const useHousehold = () => {
    const { firebaseUser } = useAuth()
    const [household, setHousehold] = useState(null)
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState('')

    useEffect(() => {
        if (!firebaseUser) return

        let cancelled = false

        async function load() {
            setLoading(true)
            setError('')
            try {
                const idToken = await firebaseUser.getIdToken()
                const data = await getHousehold(idToken)
                if (!cancelled) setHousehold(data)
            } catch (err) {
                if (!cancelled) setError(err.message)
            } finally {
                if (!cancelled) setLoading(false)
            }
        }

        load()
        return () => {
            cancelled = true
        }
    }, [firebaseUser])

    return { household, loading, error }
}
