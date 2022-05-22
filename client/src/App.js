import React, { useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Landing from "./components/layout/Landing";
import NavBar from "./components/layout/Navbar";

//Redux
import { Provider } from "react-redux";
import store from "./store";
import { loadUser } from "./actions/auth";
import setAuthToken from "./util/setAuthToken";

import Register from "../src/components/auth/Register";
import Login from "../src/components/auth/Login";
import Dashboard from "../src/components/dashboard/Dashboard";
import CreateProfile from "../src/components/profile-forms/CreateProfile";
import EditProfile from "../src/components/profile-forms/EditProfile";
import AddExperience from "../src/components/profile-forms/AddExperience";
import AddEducation from "../src/components/profile-forms/AddEducation";
import Profiles from "../src/components/profiles/Profiles";
import Profile from "../src/components/profile/Profile";
import Posts from "../src/components/posts/Posts";
import Post from "../src/components/Post/Post";
import NotFound from "../src/components/layout/NotFound";

import PrivateRouter from "../src/components/router/PrivateRouter";
import Alert from "../src/components/layout/Alert";
import AppRoutes from "../src/components/router/Routes";

import "./App.css";

if (localStorage.token) {
  setAuthToken(localStorage.token);
}

const App = () => {
  useEffect(() => {
    store.dispatch(loadUser());
  }, []);

  return (
    
    <Provider store={store}>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route exact path="/" element={<Landing />} />
        </Routes>
        <Alert />
        <section className="container">
          <Routes>
            <Route exact path="/register" element={<Register />} />
            <Route exact path="/login" element={<Login />}/>
            <Route exact path="/profiles" element={<Profiles/>} />
            <Route exact path="/profile/:id" element={<Profile/>} />
            <Route element={<PrivateRouter/>}>
              <Route exact path="/dashboard" element={<Dashboard/>} />
              <Route exact path="/create-profile" element={<><CreateProfile/></>} />
              <Route exact path="/edit-profile" element={<EditProfile/>} />
              <Route exact path="/add-experience" element={<AddExperience/>} />
              <Route exact path="/add-education" element={<AddEducation/>} />
              <Route exact path="/posts" element={<Posts/>} />
              <Route exact path="/posts/:id" element={<Post/>} />
            </Route>
            <Route path="*" element={<NotFound />} />
          </Routes>
        </section>
      </BrowserRouter>
    </Provider>
  );
};

export default App;
