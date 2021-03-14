import React, { useEffect } from 'react';
import FriendCard from '../components/FriendCard';
import { useHistory, Link } from 'react-router-dom';
import { axiosWithAuth } from "../utils/axiosWithAuth";
import styled from 'styled-components';

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
            <Container>
                <Link to="/dashboard/addFriend" style={{ textDecoration: 'none', color: 'black', border: '0.5px solid black', borderRadius: '5px', padding: '2px', backgroundColor: 'grey' }}>
                    Add a New Friend
                </Link>
                <Button onClick={logout}>Logout</Button>
            </Container>
            {friends &&
                friends.map((friend) => {
                    return <FriendCard key={friend.id} friend={friend} friends={friends} setFriends={setFriends} />
                })
            }
        </div>
    )
}

export default Dashboard;

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-end;
`

const Button = styled.button`
    text-align: center;
    display: inline-block;
    margin-top: 5px;
    font-family: 'Playfair Display', serif;
`