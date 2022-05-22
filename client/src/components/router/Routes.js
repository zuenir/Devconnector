import React from "react";
import { Route, Routes  } from "react-router-dom";
import Register from "../auth/Register";
import Login from "../auth/Login";
import Dashboard from "../dashboard/Dashboard";
import CreateProfile from "../profile-forms/CreateProfile";
import EditProfile from "../profile-forms/EditProfile";
import AddExperience from "../profile-forms/AddExperience";
import AddEducation from "../profile-forms/AddEducation";
import Profiles from "../profiles/Profiles";
import Profile from "../profile/Profile";
import Posts from "../posts/Posts";
import Post from "../Post/Post";
import NotFound from "../layout/NotFound";

import PrivateRouter from "../router/PrivateRouter";
import Alert from "../layout/Alert";

const AppRoutes = () => {
  return (
    <section className="container">
      <Alert />
      <Routes>
        <Route exact path="/register" element={<Register />} />
        <Route exact path="/login" element={Login} />
        <Route exact path="/profiles" componet={Profiles} />
        <Route exact path="/profile/:id" componet={Profile} />
        <PrivateRouter exact path="/dashboard" componet={Dashboard} />
        <PrivateRouter exact path="/create-profile" componet={CreateProfile} />
        <PrivateRouter exact path="/edit-profile" componet={EditProfile} />
        <PrivateRouter exact path="/add-experience" componet={AddExperience} />
        <PrivateRouter exact path="/add-education" componet={AddEducation} />
        <PrivateRouter exact path="/posts" componet={Posts} />
        <PrivateRouter exact path="/posts/:id" componet={Post} />
        <Route componet={NotFound} />
      </Routes>
    </section>
  );
};

export default AppRoutes;
