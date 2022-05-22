import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";

const PrivateRouter = ({
  auth: { isAuthenticated, loading }
}) => {
  return !isAuthenticated && !loading ? (<Navigate to="/login" replace />) : (<Outlet/>);
};

PrivateRouter.propTypes = {
  auth: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps)(PrivateRouter);