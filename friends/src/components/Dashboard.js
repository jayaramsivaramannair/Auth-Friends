import React from 'react';
import FriendCard from '../components/FriendCard';
import { useHistory } from 'react-router-dom';

const Dashboard = () => {
    const history = useHistory();

    const logout = (e) => {
        e.preventDefault();
        localStorage.removeItem('authToken');
        history.push('/');
    }
    return (
        <div>
            <div>
                <button onClick={logout}>Logout</button>
            </div>
            Hello from Dashboard!
        </div>
    )
}

export default Dashboard;