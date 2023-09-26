import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Header.css";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import VideoCallIcon from "@mui/icons-material/VideoCall";
import AppsIcon from "@mui/icons-material/Apps";
import NotificationsIcon from "@mui/icons-material/Notifications";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import Logo from "./logo.PNG"
// import MicIcon from "@mui/icons-material/Mic";

const Header = (props) => {
  const [inputSearch, setInputSearch] = useState("");
  return (
    <div className="header">
      <div className="header__left">
        <MenuIcon />
        <Link to="/">
        <img
          className="header__logo"
          src={Logo}
          alt="Youtube-logo"
        />

        </Link>
      </div>
      <div className="header__input">
        <input
          onChange={(e) => setInputSearch(e.target.value)}
          value={inputSearch} 
          placeholder="Search"
          type="text"
        />
        <Link to={`search/${inputSearch}`}>

        <SearchIcon className="header__inputButton" />
        </Link>
        {/* <div>
      <MicIcon/>
      </div> */}
      </div>
      <div className="header__icons">
        <VideoCallIcon className="header__icon" />
        <AppsIcon className="header__icon"/>
        <NotificationsIcon className="header__icon"/>
        <AccountCircleIcon 
          alt="x"
          src ="https://yt3.ggpht.com/yti/APfAmoGSQ6mkI_Up_Er-aLV4y2_6dvddb-lFTzkVyo0n=s88-c-k-c0x00ffffff-no-rj-mo"
        />
      </div>
    </div>
  );
};

export default Header;
