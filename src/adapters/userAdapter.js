const API_URL = import.meta.env.VITE_API_URL

export async function getMe(idToken) {
  const response = await fetch(`${API_URL}/users/me`, {
    headers: {
      Authorization: `Bearer ${idToken}`,
    },
  })

  if (!response.ok) {
    const errorBody = await response.json().catch(() => null)
    throw new Error(errorBody?.detail || 'No se pudo obtener el perfil del usuario')
  }

  return response.json()
}