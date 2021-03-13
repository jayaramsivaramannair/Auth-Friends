import React from 'react';
import { Link, useRouteMatch } from 'react-router-dom';

const FriendCard = (props) => {

    const { url } = useRouteMatch();
    console.log(url);
    const { friend } = props;

    return (
        <div className="friendCard">
            <h2>{friend.name}</h2>
            <Link to={`${url}/${friend.id}`}>
                Get Details
            </Link>
        </div>
    )
}

export default FriendCard;