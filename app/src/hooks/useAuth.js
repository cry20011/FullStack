import { useHistory } from 'react-router-dom';

export function useAuth(setIsLogin, setError) {
  const history = useHistory();

  const onAuth = async (login, password) => {
    const response = await fetch('http://84.201.151.239:8000/api/token/', {
      method: 'POST',
      headers: {
        'Content-Type': 'Application/json',
      },
      body: JSON.stringify({
        username: login,
        password,
      }),
    });
    const data = await response.json();

    if (!response.ok) {
      setError(data.detail);
      setIsLogin(false)
    } else {
        window.localStorage.setItem('ACCESS', data.access);
        window.localStorage.setItem('REFRESH', data.refresh);
        history.push('/');
        setIsLogin(true);
    }
  };

  return { onAuth };
}
