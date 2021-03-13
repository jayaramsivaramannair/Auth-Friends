import React, { useEffect } from 'react';
import FriendCard from '../components/FriendCard';
import { useHistory, Link } from 'react-router-dom';
import { axiosWithAuth } from "../utils/axiosWithAuth";

const Dashboard = (props) => {
    const history = useHistory();
    const { friends, setFriends } = props;

    //const [friends, setFriends] = useState([]);

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
    }, [setFriends])

    if (friends.length === 0) {
        return <div>Fetching Friends.....</div>
    }

    return (
        <div>
            <div>
                <button onClick={logout}>Logout</button>
                <Link to="/dashboard/addFriend">
                    Add a New Friend
                </Link>
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