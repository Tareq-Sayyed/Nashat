import { useState } from 'react'
import { useAuthContext } from './useAuthContext'

export const useLogin = () => {
  const [error, setError] = useState(null)
  const [isLoading, setIsLoading] = useState(null)
  const { dispatch } = useAuthContext()

  const login = async (email, password) => {
    setIsLoading(true)
    setError(null)

    const response = await fetch('https://nashat.onrender.com/api/user/login', {
      method: 'POST',
      headers: {'Content-Type': 'text/plain'},
      body: JSON.stringify({ email, password }),
      content: 'text/plain'
    })
    const json = await response.json()

    if (!response.ok) {
      setIsLoading(false)
      setError(json.error)
    }
    if (response.ok) {
      localStorage.setItem('user', JSON.stringify(json))
      // set cookie
      // document.cookie = `token=${json.token}; path=/;`
      dispatch({type: 'LOGIN', payload: json})
      setIsLoading(false)
    }
  }

  return { login, isLoading, error }
}
