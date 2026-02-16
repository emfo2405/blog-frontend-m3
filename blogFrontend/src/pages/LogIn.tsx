import { useState } from 'react'


function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = async(e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setError('');
    }

  return (
    <>
    <h1>Logga in med dina uppgifter!</h1>

    <form onSubmit={handleSubmit}>
        {error && (
            <p>{error}</p>
        )}
        <label htmlFor='email'>E-postadress:</label><br/>
        <input type='email' id='email' name='email' required value={email} onChange={(e) => setEmail(e.target.value)}></input><br/>

        <label htmlFor='password'>Lösenord:</label><br/>
        <input type='password' id='password' name='password' required value={password} onChange={(e) => setPassword(e.target.value)}></input><br/>

        <input type='submit' value="Logga in"></input>
    </form>
    </>
  )
}

export default Login