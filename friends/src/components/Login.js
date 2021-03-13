import React, { useState } from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom';

const Login = () => {
    const [form, setForm] = useState({
        username: '',
        password: ''
    })

    const [logging, setLogging] = useState(false);
    const history = useHistory();

    const formChange = (evt) => {
        console.log(evt.target.name, evt.target.value);
        setForm({ ...form, [evt.target.name]: evt.target.value });
    }

    const formSubmit = (evt) => {
        evt.preventDefault();
        setLogging(true);
        axios.post('http://localhost:5000/api/login', form)
            .then(res => {
                console.log(res);
                localStorage.setItem('authToken', res.data.payload);
                history.push('/dashboard');
            })
        setForm({ ...form, username: '', password: '' });
        setLogging(false);
    }

    if (logging) {
        return <div>Logging In........</div>
    }

    return (
        <div>
            <form onSubmit={formSubmit}>
                <label>User Name:
                    <input
                        type="text"
                        placeholder="username"
                        value={form.username}
                        name="username"
                        onChange={formChange}
                    />
                </label>
                <label>Password:
                    <input
                        type="text"
                        placeholder="password"
                        value={form.password}
                        name="password"
                        onChange={formChange}
                    />
                </label>
                <button>Login</button>
            </form>
        </div>
    )

}

export default Login;