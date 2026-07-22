import { createContext, useContext, useEffect, useState, useMemo, useCallback } from 'react'
import { onAuthStateChanged } from 'firebase/auth'
import { auth } from '../../firebase'
import { fetchUserProfile, logoutUser } from '../../services/authService'

const AuthContext = createContext(null)

export const AuthProvider = ({ children }) => {
    const [firebaseUser, setFirebaseUser] = useState(null)
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)


    const loadProfile = useCallback(async (fbUser) => {
        const profile = await fetchUserProfile(fbUser)
        setUser(profile)
    }, [])

   useEffect(() => {
    let isMounted = true

    const unsubscribe = onAuthStateChanged(auth, async (fbUser) => {
      setFirebaseUser(fbUser)

      if (fbUser) {
        const profile = await fetchUserProfile(fbUser)
        if (isMounted) setUser(profile)
      } else {
        if (isMounted) setUser(null)
      }

      if (isMounted) setLoading(false)
    })

    return () => {
      isMounted = false
      unsubscribe()
    }
}, [])

  const refreshUser = useCallback(() => {
    if (firebaseUser) return loadProfile(firebaseUser)
  }, [firebaseUser, loadProfile])

  const value = useMemo(
    () => ({
      firebaseUser,
      user,
      loading,
      isAuthenticated: Boolean(firebaseUser),
      logout: logoutUser,
      refreshUser,
    }),
    [firebaseUser, user, loading, refreshUser]
  )
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}

export function useAuth() {
  const context = useContext(AuthContext)
  if (!context) {
    throw new Error('useAuth debe usarse dentro de un AuthProvider')
  }
  return context
}
    
