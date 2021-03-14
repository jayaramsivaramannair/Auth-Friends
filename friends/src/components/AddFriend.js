import React, { useState } from 'react';
import styled from 'styled-components';
import { useHistory } from 'react-router-dom';
import { axiosWithAuth } from "../utils/axiosWithAuth";

const AddFriend = (props) => {
    const [newFriend, setNewFriend] = useState({
        name: '',
        age: '',
        email: ''
    })

    const history = useHistory();

    const formChange = (evt) => {
        console.log(evt.target.name, evt.target.value);
        setNewFriend({ ...newFriend, [evt.target.name]: evt.target.value });
    }

    const formSubmit = (evt) => {
        evt.preventDefault();
        axiosWithAuth().post('/friends', newFriend)
            .then((res) => {
                console.log(res.data);
            })
        setNewFriend({ ...newFriend, name: '', age: '', email: '' });
        history.push('/dashboard');
    }

    return (
        <Container>
            <Form onSubmit={formSubmit}>
                <label>Name:
                    <FormInput
                        type="text"
                        placeholder="name"
                        value={newFriend.name}
                        name="name"
                        onChange={formChange}
                    />
                </label>
                <label>Age:
                    <FormInput
                        type="text"
                        placeholder="age"
                        value={newFriend.age}
                        name="age"
                        onChange={formChange}
                    />
                </label>
                <label>Email:
                    <FormInput
                        type="text"
                        placeholder="email"
                        value={newFriend.email}
                        name="email"
                        onChange={formChange}
                    />
                </label>
                <Button>I Love Making Friends</Button>
            </Form>
            <Button onClick={() => history.push('/dashboard')}>Back To Dashboard</Button>
        </Container>
    )
}

export default AddFriend;

const Container = styled.div`
    border: 1px solid purple;
    border-radius: 10px;
    padding: 10px;
    margin: 10px;
    display: flex;
    flex-direction: column;
`

const Form = styled.form`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

const Button = styled.button`
    text-align: center;
    display: inline-block;
    margin-top: 5px;
    font-family: 'Playfair Display', serif;
`

const FormInput = styled.input`
    margin: 5px;
    border: 1px solid green;
    border-radius: 5px;
    padding: 5px;
`