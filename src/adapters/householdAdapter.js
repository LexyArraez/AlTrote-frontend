const API_URL = import.meta.env.VITE_API_URL

export async function getHousehold(idToken) {
  const response = await fetch(`${API_URL}/users/household`, {
    headers: { Authorization: `Bearer ${idToken}` },
  })
  if (!response.ok) {
    const errorBody = await response.json().catch(() => null)
    throw new Error(errorBody?.detail || 'No se pudo obtener el nucleo familiar')
  }
  return response.json()
}

export async function getChildren(idToken) {
  const response = await fetch(`${API_URL}/users/household/children`, {
    headers: { Authorization: `Bearer ${idToken}` },
  })
  if (!response.ok) {
    const errorBody = await response.json().catch(() => null)
    throw new Error(errorBody?.detail || 'No se pudieron obtener los hijos')
  }
  return response.json()
}