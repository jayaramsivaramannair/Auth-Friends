import React, { useState } from 'react';

const Login = () => {
    const [form, setForm] = useState({
        username: '',
        password: ''
    })

    const [logging, setLogging] = useState(false);

    const formChange = (evt) => {
        console.log(evt.target.name, evt.target.value);
        setForm({ ...form, [evt.target.name]: evt.target.value });
    }

    const formSubmit = (evt) => {
        evt.preventDefault();
        setLogging(true);
        console.log(form);
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