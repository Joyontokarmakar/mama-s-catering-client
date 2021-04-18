import React from "react";
import { NavLink } from "react-router-dom";
import './NotFound.css'

const NotFound = () => {
  return (
    <div id="found_err">
        <div class="found_err">
            <div class="found_err-404">
                <h1>404</h1>
            </div>
            <h2>We are sorry, Page not found!</h2>
            <p>The page you are looking for might have been removed had its name changed or is temporarily unavailable.</p>
            <NavLink to="/" className="mr-3 mb-3 mt-2 text-dark notfound_btn" style={{ textDecoration: "none" }}>
                Back To Home
            </NavLink>
        </div>
    </div>
  );
};

export default NotFound;
