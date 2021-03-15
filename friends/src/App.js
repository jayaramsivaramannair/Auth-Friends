import './App.css';
import React, { useState } from 'react';
import styled from 'styled-components';
import { Route, Switch } from 'react-router-dom';
import Login from "./components/Login";
import Dashboard from "./components/Dashboard";
import PrivateRoute from "./components/PrivateRoute";
import FriendDetails from "./components/FriendDetails";
import AddFriend from "./components/AddFriend";
import UpdateFriend from "./components/UpdateFriend";

function App() {

  const [friends, setFriends] = useState([]);

  return (
    <div className="App">
      <Title>Friends App</Title>
      <Switch>
        <Route exact path="/">
          <Login />
        </Route>
        <PrivateRoute exact path="/dashboard" component={Dashboard} friends={friends} setFriends={setFriends} />
        <PrivateRoute exact path="/dashboard/addFriend" component={AddFriend} setFriends={setFriends} />
        <PrivateRoute exact path="/dashboard/:friendId" component={FriendDetails} setFriends={setFriends} />
        <PrivateRoute exact path="/dashboard/updateFriend/:friendId" component={UpdateFriend} setFriends={setFriends} />
        {/*Below acts as the default component when an invalid url is provided*/}
        <Route>
          <Login />
        </Route>
      </Switch>
    </div>
  );
}

export default App;

const Title = styled.h1`
  color: greenyellow;
  text-align: right;
  padding-right: 15px;
`;
