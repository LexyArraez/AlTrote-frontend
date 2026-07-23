import { signOut } from 'firebase/auth'
import { auth } from '../firebase'
import { getMe } from '../adapters/userAdapter'

export async function fetchUserProfile(fbUser) {
  if (!fbUser) return null
  
  try {
    const idToken = await fbUser.getIdToken()
    return await getMe(idToken)
  } catch (err) {
    return null
  }
}

export function logoutUser() {
  return signOut(auth)
}