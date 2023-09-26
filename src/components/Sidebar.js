import React from "react";
import SidebarRow from "./SidebarRow";
import HomeIcon from "@mui/icons-material/Home";
import WhatshotIcon from "@mui/icons-material/Whatshot";
import SubscriptionsIcon from "@mui/icons-material/Subscriptions";
import VideoLibraryIcon from '@mui/icons-material/VideoLibrary';
import HistoryIcon from '@mui/icons-material/History';
import OndemandVideoIcon from '@mui/icons-material/OndemandVideo';
import WatchLaterIcon from '@mui/icons-material/WatchLater';
import ThumbUpAltIcon from '@mui/icons-material/ThumbUpAlt';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import "./Sidebar.css";
const SideBar = () => {
  return (
    <div className="sidebar">
      
      <SidebarRow selected Icon={HomeIcon} Title="Home" />
      <SidebarRow Icon={WhatshotIcon} Title="Tranding" />
      <SidebarRow Icon={SubscriptionsIcon} Title="Subscriptions" />
      <hr />
      <SidebarRow Icon={VideoLibraryIcon} Title="VideoLibrary" />
      <SidebarRow Icon={HistoryIcon} Title="History" />
      <SidebarRow Icon={OndemandVideoIcon} Title="OndemandVideo" />
      <SidebarRow Icon={WatchLaterIcon} Title="WatchLater" />
      <SidebarRow Icon={ThumbUpAltIcon} Title="Liked Videos" />
      <SidebarRow Icon={ExpandMoreIcon} Title="Show More" />

    </div>
  );
};
export default SideBar;
