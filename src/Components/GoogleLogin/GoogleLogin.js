import React, { useContext } from "react";
import { Button, Card, Col, Container, Row } from "react-bootstrap";
import * as firebase from "firebase/app";
import "firebase/auth";
import "./GoogleLogin.css";
import logo from "../../images/logos/logo.png";
import firebaseConfig from "./Firebase.config.js";
import { userInformationData } from "../../App";
import google from "../../images/logos/googleico.png";
import { useHistory, useLocation } from "react-router-dom";

firebase.initializeApp(firebaseConfig);

const GoogleLogin = () => {
  const [userData, setUserData] = useContext(userInformationData);
  //Location
  let location = useLocation();
  let history = useHistory();

  let { from } = location.state || { from: { pathname: "/" } };

  const providerGoogle = new firebase.auth.GoogleAuthProvider();

  const handleGoogleSignIn = async () => {
    try {
      const res = await firebase.auth().signInWithPopup(providerGoogle);
      const { email, displayName, photoURL } = res.user;
      const singedInUser = {
        isSignIn: true,
        email: email,
        name: displayName,
        img: photoURL,
      };
      setUserData(singedInUser);
      // storeAuthToken();
      history.replace(from);
    } catch (err) {
      console.warn(err);
    }
  };

  return (
    <Container className="googleLogin">
      <Row>
        <div className="row d-flex justify-content-center align-items-center w-100 my-5">
          <div className="col-md-4 col-12">
            <img src={logo} className="logo" alt="Logo" />
            <div className="login_area mt-5 text-center">
                <h2>Log In</h2>
                <div className="divider d-flex align-items-center justify-content-center mt-2">
                    <div className="border_after"></div>
                    <span className="auth_head">We have Google Sign Only</span> 
                    <div className="border_after"></div>
                </div>
                <button onClick={handleGoogleSignIn} className="logButton google"> <img src={google} alt=""/> Sign in with Google</button>
            </div>
          </div>
        </div>
      </Row>
    </Container>
  );
};

export default GoogleLogin;
