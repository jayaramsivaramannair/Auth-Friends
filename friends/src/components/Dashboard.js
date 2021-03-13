import React, { useState, useEffect } from 'react';
import FriendCard from '../components/FriendCard';
import { useHistory } from 'react-router-dom';
import { axiosWithAuth } from "../utils/axiosWithAuth";

const Dashboard = () => {
    const history = useHistory();

    const [friends, setFriends] = useState([]);

    const logout = (e) => {
        e.preventDefault();
        localStorage.removeItem('authToken');
        history.push('/');
    }

    useEffect(() => {
        axiosWithAuth().get('/friends')
            .then(res => {
                console.log(res.data);
                setFriends(res.data);
            })
            .catch(err => console.log(err));
    }, [])

    if (friends.length === 0) {
        return <div>Fetching Friends....</div>
    }

    return (
        <div>
            <div>
                <button onClick={logout}>Logout</button>
            </div>
            Hello from Dashboard!
            {friends &&
                friends.map((friend) => {
                    return <FriendCard key={friend.id} friend={friend} />
                })
            }
        </div>
    )
}

export default Dashboard;