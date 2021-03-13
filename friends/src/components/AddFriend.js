import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { axiosWithAuth } from "../utils/axiosWithAuth";

const AddFriend = (props) => {
    const [newFriend, setNewFriend] = useState({
        name: '',
        age: '',
        email: ''
    })

    const history = useHistory();

    const formChange = (evt) => {
        console.log(evt.target.name, evt.target.value);
        setNewFriend({ ...newFriend, [evt.target.name]: evt.target.value });
    }

    const formSubmit = (evt) => {
        evt.preventDefault();
        axiosWithAuth().post('/friends', newFriend)
            .then((res) => {
                console.log(res.data);
            })
        setNewFriend({ ...newFriend, name: '', age: '', email: '' });
        history.push('/dashboard');
    }

    return (
        <div>
            <form onSubmit={formSubmit}>
                <label>Name:
                    <input
                        type="text"
                        placeholder="name"
                        value={newFriend.name}
                        name="name"
                        onChange={formChange}
                    />
                </label>
                <label>Age:
                    <input
                        type="text"
                        placeholder="age"
                        value={newFriend.age}
                        name="age"
                        onChange={formChange}
                    />
                </label>
                <label>Email:
                    <input
                        type="text"
                        placeholder="email"
                        value={newFriend.email}
                        name="email"
                        onChange={formChange}
                    />
                </label>
                <button>I Love Making Friends</button>
            </form>
            <button onClick={() => history.push('/dashboard')}>Back To Dashboard</button>
        </div>
    )
}

export default AddFriend;