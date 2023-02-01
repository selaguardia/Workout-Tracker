import { useState } from "react";
import { useAuthContext } from "./useAuthContext";

const url= "https://workout-tracker-blush.vercel.app/"

export const useSignup = () => {
    const [error, setError] = useState(null)
    const [isLoading, setIsLoading] = useState(null)
    const { dispatch } = useAuthContext()

    const signup = async (firstName, lastName, email, password) => {
        setIsLoading(true)
        setError(null)
        
        const response = await fetch(`${url}/api/user/signup`, {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({ firstName, lastName, email, password })
        })

        const json = await response.json()

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
    return {signup, isLoading, error}
}