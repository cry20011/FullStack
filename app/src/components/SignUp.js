import React from 'react';
import { useAuth } from '../hooks/useAuth';

export default function SignUp({ setIsLogin }) {
  const [login, setLogin] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [error, setError] = React.useState('');
  const { onAuth } = useAuth(setIsLogin, setError);

  React.useEffect(() => {
    if (error) {
      setError('');
    }
  }, [login, password]);

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!login) {
      setError('Поле логин не должно быть пустым');
      return;
    }
    if (!password) {
      setError('Поле пароль не должно быть пустым');
      return;
    }

    const response = await fetch('http://84.201.151.239:8000/api/users/', {
      method: 'POST',
      headers: {
        'Content-Type': 'Application/json',
      },
      body: JSON.stringify({
        username: login,
        password
      }), 
    });
    const data = await response.json();
    if (!response.ok) {
      setError(data.detail);
    }

    await onAuth(login, password);
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
        <button className='sign_in_button' type='submit' onClick={handleSubmit}>
          Sign Up
        </button>
      </form>
    </div>
  );
}
