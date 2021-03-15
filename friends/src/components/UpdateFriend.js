import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useHistory, useParams } from 'react-router-dom';
import { axiosWithAuth } from "../utils/axiosWithAuth";

const UpdateFriend = (props) => {
    const [updateFriend, setUpdateFriend] = useState({
        id: '',
        name: '',
        age: '',
        email: ''
    })

    const history = useHistory();
    const { setFriends } = props;

    const { friendId } = useParams();
    console.log(friendId);

    const returnToDashboard = () => {
        history.push("/dashboard");
        setFriends([]);
    }

    const formChange = (evt) => {
        console.log(evt.target.name, evt.target.value);
        setUpdateFriend({ ...updateFriend, [evt.target.name]: evt.target.value });
    }

    const updateFriendDetails = (evt) => {
        evt.preventDefault();
        axiosWithAuth().put(`/friends/${friendId}`, updateFriend)
            .then((res) => {
                console.log(res.data);
                setFriends([]);
            })
        history.push("/dashboard");
    }

    useEffect(() => {
        axiosWithAuth().get(`/friends/${friendId}`)
            .then(res => {
                console.log(res.data);
                setUpdateFriend(res.data)
            })
            .catch(err => console.log(err));
    }, [friendId])

    return (
        <Container>
            <Form onSubmit={updateFriendDetails}>
                <label>Name:
                    <FormInput
                        type="text"
                        placeholder="name"
                        value={updateFriend.name}
                        name="name"
                        onChange={formChange}
                    />
                </label>
                <label>Age:
                    <FormInput
                        type="text"
                        placeholder="age"
                        value={updateFriend.age}
                        name="age"
                        onChange={formChange}
                    />
                </label>
                <label>Email:
                    <FormInput
                        type="text"
                        placeholder="email"
                        value={updateFriend.email}
                        name="email"
                        onChange={formChange}
                    />
                </label>
                <Button>UpdateDetails</Button>
            </Form>
            <Button onClick={returnToDashboard}>Back To Dashboard</Button>
        </Container>
    )
}

export default UpdateFriend;

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