import { useState } from 'react';
const SignUp = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    
    const handleSubmit = async (e) => {
        e.preventDefault();
        const response = await fetch('http://localhost:4000/api/auth/signup', {});
    }


    return ( 
        <form className='signup' onSubmit={ handleSubmit }>
            <h3>Sign up</h3>
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

            <button>Sign Up</button>
        </form>
    );
}
 
export default SignUp;