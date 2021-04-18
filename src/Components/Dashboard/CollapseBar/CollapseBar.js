import React, { useContext, useEffect, useState } from "react";

import ShoppingCartOutlinedIcon from "@material-ui/icons/ShoppingCartOutlined";
import SpeakerNotesOutlinedIcon from "@material-ui/icons/SpeakerNotesOutlined";
import TextsmsOutlinedIcon from "@material-ui/icons/TextsmsOutlined";
import { NavLink } from "react-router-dom";
import { Avatar } from "@material-ui/core";
import { userInformationData } from "../../../App";
import './CollapseBar.css';

const CollapseBar = () => {
  const [userData, setUserData] = useContext(userInformationData);

  return (
    <>
      <ul className="navbar-nav ml-auto mt-2 mt-lg-0 d-sm-block d-md-block d-lg-none ">
            <li className="nav-item active">
              <NavLink
                style={{ fontFamily: "Piazzolla, serif" }}
                to="/order"
                activeClassName="sidebar__active"
                className="list-group-item list-group-item-action admin_sidenav"
              >
                <ShoppingCartOutlinedIcon /> Order
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                style={{ fontFamily: "Piazzolla, serif" }}
                to="/service-list"
                activeClassName="sidebar__active"
                className="list-group-item list-group-item-action admin_sidenav"
              >
                <SpeakerNotesOutlinedIcon /> Service list
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink
                style={{ fontFamily: "Piazzolla, serif" }}
                to="/review"
                activeClassName="sidebar__active"
                className="list-group-item list-group-item-action admin_sidenav"
              >
                <TextsmsOutlinedIcon /> Review
              </NavLink>
            </li>
      </ul>
      <div className="ml-auto  d-none d-md-none d-lg-block ">
        <Avatar src={userData.img} />
      </div>
      <div
        className="  d-none d-md-none d-lg-block "
        style={{ margin: "0 20px" }}
      >
        <b>{userData.name}</b>
      </div>
    </>
  );
};

export default CollapseBar;
