import { useState } from "react";
import { useAuthContext } from "./useAuthContext";


export const useLogin = () => {
    const [error, setError] = useState(null)
    const [isLoading, setIsLoading] = useState(null)
    const { dispatch } = useAuthContext()

    const URL = 'api/user'

    const login = async (email, password, token) => {
        setIsLoading(true)
        setError(null)
        
        const response = await fetch(`${URL}/login`, {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({ email, password, token })
        })
        console.log('222res: ', response)
        const json = await response.json()
        console.log('json: ', json)
        if (!response.ok) {
          setIsLoading(false)
          setError(json.error)
        }
        if (response.ok) {
          // user saved to local storage
          localStorage.setItem('user', JSON.stringify(json))
    
          // update auth context
          dispatch({type: 'LOGIN', payload: json})
    
          // update loading state
          setIsLoading(false)
        }
    }
    return {login, isLoading, error}
}