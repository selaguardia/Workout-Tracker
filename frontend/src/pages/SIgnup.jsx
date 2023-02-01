import { useState } from "react"

const Signup = () => {
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault()

    console.log(firstName, lastName, email, password)
  }

  return (
    <form className="signup" onSubmit={handleSubmit}>
      <h3>Sign Up</h3>
      
      <label>First Name:</label>
      <input 
        type="text" 
        onChange={(e) => setFirstName(e.target.value)} 
        value={firstName} 
      />

      <label>Last Name:</label>
      <input 
        type="text" 
        onChange={(e) => setLastName(e.target.value)} 
        value={lastName} 
      />

      <label>Email address:</label>
      <input 
        type="email" 
        onChange={(e) => setEmail(e.target.value)} 
        value={email} 
      />
      
      <label>Password:</label>
      <input 
        type="password" 
        onChange={(e) => setPassword(e.target.value)} 
        value={password} 
      />

      <button>Sign up</button>
    </form>
  )
}

export default Signup