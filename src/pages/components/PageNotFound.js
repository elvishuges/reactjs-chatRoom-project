import { Link } from 'react-router-dom';
import React from "react";
import { connect } from "react-redux";
import { compose } from "redux";
import { useHistory } from "react-router";

import { logoutUser } from './../../actions/auth.action'



function PageNotFound(props) {

  const history = useHistory();

  const handleLogout = () => {
    props.dispatch(logoutUser())
    history.push('/login');
  };
  return (
    <div>
      <div style={{ textAlign: "center" }}>
        <Link to="/login">Go to Home </Link>
        <div onClick={handleLogout}>Logout</div>
      </div>
    </div>
  )
}

const mapStateToProps = (store) => ({
  user: store.user
});

const mapDispatchToProps = (dispatch) => ({
  dispatch
});

export default compose(
  connect(mapStateToProps, mapDispatchToProps)
)(PageNotFound);