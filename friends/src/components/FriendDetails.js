import React, { useEffect, useState } from 'react';
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
        <div>
            <h3>{details.name}</h3>
            <h4>{details.age}</h4>
            <h4>{details.email}</h4>
            <button onClick={returnToDashboard}>Back To Dashboard</button>
        </div>
    )
}

export default FriendDetails;