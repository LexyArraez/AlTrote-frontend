import { useEffect, useState } from 'react'
import { useAuth } from './context/AuthProvider'
import { getChildren } from '../adapters/householdAdapter'


export const useChildren = () => {
    const { firebaseUser } = useAuth()
    const [children, setChildren] = useState([])
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
                const data = await getChildren(idToken)
                if (!cancelled) setChildren(data)
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

    return { children, loading, error }
}
