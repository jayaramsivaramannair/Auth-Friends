import React, { useState } from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components';

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
            <Form onSubmit={formSubmit} className="loginForm">
                <label >User Name:
                    <FormInput
                        type="text"
                        placeholder="username"
                        value={form.username}
                        name="username"
                        onChange={formChange}
                        className="input is-large"
                    />
                </label>
                <label >Password:
                    <FormInput
                        type="text"
                        placeholder="password"
                        value={form.password}
                        name="password"
                        onChange={formChange}
                        className="input is-large"
                    />
                </label>
                <LoginButton>Login</LoginButton>
            </Form>
        </div>
    )

}

export default Login;

const Form = styled.form`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border: 1px solid yellowgreen;
    border-radius: 5px;
    margin: 10px;
`

const FormInput = styled.input`
    margin: 5px;
    border: 1px solid green;
    border-radius: 5px;
    padding: 5px;
`

const LoginButton = styled.button`
    text-align: center;
    display: inline-block;
    font-family: 'Playfair Display', serif;
`