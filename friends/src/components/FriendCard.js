import React from 'react';
import { Link, useRouteMatch } from 'react-router-dom';
import styled from 'styled-components';

const FriendCard = (props) => {
    const { url } = useRouteMatch();
    console.log(url);
    const { friend } = props;

    return (
        <Container className="friendCard">
            <h2>{friend.name}</h2>
            <Link to={`${url}/${friend.id}`} style={{ textDecoration: 'none', fontStyle: 'italic', color: 'purple' }}>
                Get More Details
            </Link>
            <Link to={`${url}/updateFriend/${friend.id}`} style={{ textDecoration: 'none', fontStyle: 'italic', color: 'yellowgreen' }}>
                Update Details
            </Link>
        </Container>
    )
}

export default FriendCard;

const Container = styled.div`
    border: 1px solid purple;
    border-radius: 10px;
    padding: 10px;
    margin: 10px;
    display: flex;
    flex-direction: column;
`



//Characters Avatars used from : https://avatars.dicebear.com/docs/installation

