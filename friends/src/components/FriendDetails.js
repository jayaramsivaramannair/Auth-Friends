import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { useParams, useHistory } from 'react-router-dom';
import { axiosWithAuth } from "../utils/axiosWithAuth";

const FriendDetails = (props) => {
    const { friendId } = useParams();
    const { setFriends } = props;
    console.log(friendId);

    const [details, setDetails] = useState({});

    const history = useHistory();

    const returnToDashboard = () => {
        history.push("/dashboard");
        setFriends([]);
    }

    const deleteFunction = (evt) => {
        evt.preventDefault();
        axiosWithAuth().delete(`/friends/${friendId}`)
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
                setDetails(res.data);
            })
            .catch(err => console.log(err));
    }, [friendId])

    return (
        <Container>
            <h3>{details.name}</h3>
            <h4><Italicized>Age:</Italicized>{details.age}</h4>
            <h4><Italicized>Email:</Italicized> {details.email}</h4>
            <DeleteLink href=" " onClick={deleteFunction}>Delete</DeleteLink>
            <Button onClick={returnToDashboard}>Back To Dashboard</Button>
        </Container>
    )
}

export default FriendDetails;

const Container = styled.div`
    border: 1px solid purple;
    border-radius: 10px;
    padding: 10px;
    margin: 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
`

const Italicized = styled.span`
    font-style: italic;
`

const Button = styled.button`
    font-family: 'Playfair Display', serif;
    border: 1px solid greenyellow;
    background-color: white;
    color: greenyellow;
    font-weight: bold;
`

const DeleteLink = styled.a`
    text-decoration: none;
    font-style: italic;
    border: 2px solid red;
    display: inline-block;
    padding: 2px;
    color: white;
    background-color: red;
    border-radius: 5px;
    margin: 2px;
`