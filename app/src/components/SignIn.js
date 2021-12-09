import React from 'react';
import { useHistory } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';

import '../style/SignIn.css'

function SignIn({ setIsLogin }) {
    const [login, setLogin] = React.useState('')
    const [password, setPassword] = React.useState('');
    const [error, setError] = React.useState('');
    const history = useHistory();
    const { onAuth } = useAuth(setIsLogin, setError);
    
    React.useEffect(() => {
        if (error) {
            setError('');
        }
    }, [login, password]);
    
    const handleSubmit = async (event) => {
        event.preventDefault();
        if (!login) {
            setError('Blank Login');
            return;
        }
        if (!password) {
            setError('Blank password');
            return;
        }
        try {
            await onAuth(login, password);
        } catch {}
    };
    
  return (
      <div className='login_form'>
      <form>
        <div className='login'>
          <p>Login</p>
          <input
            type='text'
            value={login}
            onChange={(event) => setLogin(event.target.value)}
            ></input>
        </div>
        <div className='password'>
          <p>Password</p>
          <input
            type='password'
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            ></input>
        </div>
        <div className='login_form_error'>{error}</div>
        <button className='sign_up_button' type='submit' onClick={handleSubmit}>
          Sign In
        </button>
      </form>
    </div>
  );
}

export default SignIn;