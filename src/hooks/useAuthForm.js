import { useState, useCallback } from 'react'
import { useNavigate } from 'react-router-dom'
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth'
import { auth } from '../firebase'
import { registerUser } from '../adapters/authAdapter'
import { getMe } from '../adapters/userAdapter'

function traducirError(err) {
  const mapa = {
    'auth/email-already-in-use': 'Ese correo ya tiene una cuenta registrada.',
    'auth/invalid-email': 'El correo electrónico no es válido.',
    'auth/weak-password': 'La contraseña debe tener al menos 6 caracteres.',
    'auth/user-not-found': 'No existe ninguna cuenta con ese correo.',
    'auth/wrong-password': 'Contraseña incorrecta.',
    'auth/invalid-credential': 'Correo o contraseña incorrectos.',
    'auth/too-many-requests': 'Demasiados intentos. Espera un momento e intenta de nuevo.',
  }
  return mapa[err.code] || err.message || 'Ocurrió un error inesperado.'
}

export function useAuthForm() {
  const navigate = useNavigate()

  const [tab, setTabState] = useState('login')
  const [role, setRole] = useState('padre')
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    password: '',
    inviteCode: '',
    acceptedTerms: false,
  })
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  const setTab = (newTab) => {
    setError('')
    setTabState(newTab)
  }

  const handleChange = useCallback((field, value) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }))
  }, [])

  const handleSubmit = async (e) => {
    e.preventDefault()
    setError('')
    setLoading(true)

    try {
      if (tab === 'login') {
        const userCredential = await signInWithEmailAndPassword(auth, formData.email, formData.password)
        const idToken = await userCredential.user.getIdToken()
        const profile = await getMe(idToken)

        navigate(profile.role === 'padre' ? '/dashboard-padre' : '/dashboard-hijo')
      } else {
        const userCredential = await createUserWithEmailAndPassword(auth, formData.email, formData.password)
        const idToken = await userCredential.user.getIdToken()

        await registerUser(idToken, {
          full_name: formData.fullName,
          role,
          invite_code: role === 'hijo' ? formData.inviteCode : undefined,
        })

        navigate(role === 'padre' ? '/dashboard-padre' : '/dashboard-hijo')
      }
    } catch (err) {
      setError(traducirError(err))
    } finally {
      setLoading(false)
    }
  }

  return {
    tab,
    setTab,
    role,
    setRole,
    formData,
    handleChange,
    handleSubmit,
    loading,
    error,
  }
}