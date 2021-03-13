import './App.css';
import React, { useState } from 'react';
import { Route, Switch } from 'react-router-dom';
import Login from "./components/Login";
import Dashboard from "./components/Dashboard";
import PrivateRoute from "./components/PrivateRoute";
import ProtectedRoute from "./components/ProtectedRoute";
import FriendDetails from "./components/FriendDetails";

function App() {

  const [friends, setFriends] = useState([]);

  return (
    <div className="App">
      <h1>Friends App</h1>
      <Switch>
        <Route exact path="/">
          <Login />
        </Route>
        <PrivateRoute exact path="/dashboard" component={Dashboard} friends={friends} setFriends={setFriends} />
        <ProtectedRoute exact path="/dashboard/:friendId" component={FriendDetails} friends={friends} />
        {/*Below acts as the default component when an invalid url is provided*/}
        <Route>
          <Login />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
