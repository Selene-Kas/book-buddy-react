import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { fetchLogin } from "../Api";

const Login = ( {setToken} ) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();


    async function handleLogin(event) {
        event.preventDefault();
        const data = await fetchLogin(email, password);
        console.log(data);
        if (data.token) {
            localStorage.setItem('token', data.token);
            setToken(data.token);
            navigate('/account');
        }
    }

    return (
    <>
    <h2>Login</h2>
    <form className='logForm' onSubmit={handleLogin} >
        <label>
            <h2>Email:</h2>
            <input value={email} type="email"
            onChange={(e) => setEmail(e.target.value)} />
        </label>
        <label>
            <h2>Password:</h2>
            <input value={password} type="password"
            onChange={(e) => setPassword(e.target.value)} />
        </label>
        <button type="submit"> Login </button>
    </form>
    </>
    )
}
export default Login;
