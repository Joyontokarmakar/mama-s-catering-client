import React, { useContext, useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { userInformationData } from "../../../App";

import ShoppingCartOutlinedIcon from "@material-ui/icons/ShoppingCartOutlined";
import SpeakerNotesOutlinedIcon from "@material-ui/icons/SpeakerNotesOutlined";
import TextsmsOutlinedIcon from "@material-ui/icons/TextsmsOutlined";

const SidebarHeading = () => {
  const [userData, setUserData, isAdmin, setAdmin] = useContext(
    userInformationData
  );

  return (
    <>
      <NavLink
        style={{ fontFamily: "Piazzolla, serif" }} to="/order" activeClassName="sidebar__active"
        className="list-group-item list-group-item-action">
          <ShoppingCartOutlinedIcon /> Order
      </NavLink>

      <NavLink style={{ fontFamily: "Piazzolla, serif" }} to="/service-list" activeClassName="sidebar__active"
        className="list-group-item list-group-item-action">
          <SpeakerNotesOutlinedIcon /> Service list
      </NavLink>
      <NavLink style={{ fontFamily: "Piazzolla, serif" }} to="/review" activeClassName="sidebar__active"
        className="list-group-item list-group-item-action">
          <TextsmsOutlinedIcon /> Review
      </NavLink>
    </>
  );
};

export default SidebarHeading;
