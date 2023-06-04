import { useState } from 'react';
import { useLogin } from '../hooks/useLogin';
const LogIn = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const {login, error, isLoading} = useLogin();
    
    const handleSubmit = async (e) => {
        e.preventDefault();
        await login(email, password);
    }


    return ( 
        <form className='login' onSubmit={ handleSubmit }>
            <h3>Log In</h3>
            <label htmlFor='email'>Email:</label>
            <input 
                type='email' 
                id='email' 
                onChange={(e) => setEmail(e.target.value)}
                value={ email }
                placeholder='test@example.com'
                required 
            />

            <label htmlFor='password'>Password:</label>
            <input 
                type='password' 
                id='password' 
                onChange={(e) => setPassword(e.target.value)}
                value={ password }
                placeholder='Enter your password'
                required 
            />

            <button disabled = { isLoading }>Log In</button>
            {
                error && <p className='error'>{ error }</p>
            }
        </form>
    );
}
 
export default LogIn;