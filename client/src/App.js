import React, { useEffect } from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

//Redux
import { Provider } from "react-redux";
import store from "./store";

import Landing from "./components/layout/Landing";
import NavBar from "./components/layout/Navbar";
import Register from "./components/auth/Register";
import Login from "./components/auth/login";
import Dashboard from './components/dashboard/Dashboard';
import CreateProfile from './components/profile-forms/CreateProfile';
import EditProfile from './components/profile-forms/EditProfile';
import AddExperience from './components/profile-forms/AddExperience';
import AddEducation from './components/profile-forms/AddEducation';
import Profiles from "./components/profiles/Profiles";
import Profile from "./components/profile/Profile";


import PrivateRouter from "./components/router/PrivateRouter";

import Alert from "./components/layout/Alert";
import setAuthToken from "./util/setAuthToken";
import { loadUser } from "./actions/auth";

if (localStorage.token) {
  setAuthToken(localStorage.token);
}

const App = () => {

  useEffect(() => {
    store.dispatch(loadUser());
  }, []);

  return (
    <Provider store={store}>
      <Router>
        <NavBar />
        <Router exact path="/" componet={<Landing />} />
        <section className="container">
          <Alert />
          <Switch>
            <Route exact path="/register" componet={<Register />} />
            <Route exact path="/login" componet={<Login />} />
            <Route exact path="/profiles" componet={<Profiles/>}/>
            <Route exact path="/profile/:id" componet={<Profile/>}/>
            <PrivateRouter exact path="/dashboard" componet={<Dashboard />} />
            <PrivateRouter exact path="/create-profile" componet={<CreateProfile />} />
            <PrivateRouter exact path="/edit-profile" componet={<EditProfile />} />
            <PrivateRouter exact path="/add-experience" componet={<AddExperience />} />
            <PrivateRouter exact path="/add-education" componet={<AddEducation />} />
          </Switch>
        </section>
      </Router>
    </Provider>
  );
};

export default App;
