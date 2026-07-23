const API_URL = import.meta.env.VITE_API_URL

function authHeaders(idToken) {
  return {
    'Content-Type': 'application/json',
    Authorization: `Bearer ${idToken}`,
  }
}

async function handleResponse(response) {
  if (!response.ok) {
    const errorBody = await response.json().catch(() => null)
    throw new Error(errorBody?.detail || 'Error al comunicarse con el servidor')
  }
  if (response.status === 204) return null
  return response.json()
}

export async function getTasks(idToken) {
  const response = await fetch(`${API_URL}/tasks/`, {
    headers: authHeaders(idToken),
  })
  return handleResponse(response)
}

export async function getTask(idToken, taskId) {
  const response = await fetch(`${API_URL}/tasks/${taskId}`, {
    headers: authHeaders(idToken),
  })
  return handleResponse(response)
}

export async function createTask(idToken, data) {
  const response = await fetch(`${API_URL}/tasks/`, {
    method: 'POST',
    headers: authHeaders(idToken),
    body: JSON.stringify(data),
  })
  return handleResponse(response)
}

export async function updateTask(idToken, taskId, data) {
  const response = await fetch(`${API_URL}/tasks/${taskId}`, {
    method: 'PUT',
    headers: authHeaders(idToken),
    body: JSON.stringify(data),
  })
  return handleResponse(response)
}

export async function deleteTask(idToken, taskId) {
  const response = await fetch(`${API_URL}/tasks/${taskId}`, {
    method: 'DELETE',
    headers: authHeaders(idToken),
  })
  return handleResponse(response)
}