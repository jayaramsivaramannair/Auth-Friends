import './App.css';
import { Route, Switch } from 'react-router-dom';
import Login from "./components/Login";
import Dashboard from "./components/Dashboard";
import PrivateRoute from "./components/PrivateRoute";

function App() {
  return (
    <div className="App">
      <h1>Friends App</h1>
      <Switch>
        <Route exact path="/">
          <Login />
        </Route>
        <PrivateRoute exact path="/dashboard" component={Dashboard} />
      </Switch>
    </div>
  );
}

export default App;
