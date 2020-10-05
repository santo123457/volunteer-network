import React, { createContext, useState } from 'react';
import './App.css';
import Home from './Components/Home/Home';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import NotFound from './Components/NotFound/NotFound';
import Header from './Components/Header/Header';
import Events from './Components/Events/Events';
import Domain from './Components/Domain/Domain';
import Blog from './Components/Blog/Blog';
import Admin from './Components/Admin/Admin';
import Register from './Components/Register/Register';
import Login from './Components/Login/Login';
import PrivetRoute from './Components/PrivetRoute/PrivateRoute';
import Tasks from './Components/Tasks/Tasks';
import AddTasks from './Components/AddTasks/AddTasks';
import AddEvent from './Components/AddEvent/AddEvent';
export const UserContext = createContext();

function App() {
  const [loggedInUser , setLoggedInUser] = useState({});
  return (
    <UserContext.Provider value={[loggedInUser , setLoggedInUser]}>
      <Router>
        <Switch>

          <Route exact path="/">
          <Header></Header>
          <Home></Home>
          </Route>

          <Route path="/home">
          <Header></Header>
          <Home></Home>
          </Route>
        <Route path="/domain">
        <Header></Header>
          <Domain></Domain>
        </Route>
        <Route path="/events">
        <Header></Header>
          <Events></Events>
        </Route>
        <Route path="/blog">
        <Header></Header>
          <Blog />
        </Route>
        <Route path="/login">
          <Login></Login>
        </Route>
        <Route path="/users">
          <Header></Header>
          <Tasks></Tasks>
        </Route>
        <Route path="/addTasks">
          <AddTasks></AddTasks>
        </Route>
        <PrivetRoute path="/register">
            <Register></Register>
          </PrivetRoute>
          <PrivetRoute path="/admin-panel/registerList">
          <Admin></Admin>
          </PrivetRoute>
          {/* <Route path="/admin-panel/registerList">
          <Admin></Admin>
          </Route> */}
          <Route path="/admin-panel/addEvent">
          <AddEvent></AddEvent>
          </Route>
          <Route path="*">
          <NotFound></NotFound>
          </Route>

        </Switch>
      </Router>
      </UserContext.Provider>
  );
}

export default App;
