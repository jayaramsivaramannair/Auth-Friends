import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { useParams, useHistory } from 'react-router-dom';
import { axiosWithAuth } from "../utils/axiosWithAuth";

const FriendDetails = (props) => {
    const { friendId } = useParams();
    console.log(friendId);

    const [details, setDetails] = useState({});

    const history = useHistory();

    const returnToDashboard = () => {
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
`