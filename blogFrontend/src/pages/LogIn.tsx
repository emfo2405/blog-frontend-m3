import { useState, useEffect } from 'react'
import { useAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';

function Login() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const {login, user} = useAuth();
    const navigate = useNavigate();

    //Kontrollera användare
    useEffect(() => {
        if(user) {
            navigate("/admin");
        }
    }, [user])

    const handleSubmit = async(e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setError('');

        try {
            await login({username, password});
            navigate("/admin");

        } catch(error) {
            setError("Inloggningen misslyckades, kontrollera e-post och lösenord!")
        }
    }

  return (
    <>
    <h1>Logga in med dina uppgifter!</h1>

    <form onSubmit={handleSubmit}>
        {error && (
            <p>{error}</p>
        )}
        <label htmlFor='username'>Användarnamn:</label><br/>
        <input type='text' id='username' name='username' required value={username} onChange={(e) => setUsername(e.target.value)}></input><br/>

        <label htmlFor='password'>Lösenord:</label><br/>
        <input type='password' id='password' name='password' required value={password} onChange={(e) => setPassword(e.target.value)}></input><br/>

        <input type='submit' value="Logga in"></input>
    </form>
    </>
  )
}

export default Login