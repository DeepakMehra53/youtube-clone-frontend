import React from "react";
import "./SearchPage.css";
import ChannelRow from "./ChannelRow";
import VideoRow from "./VideoRow"
import TuneIcon from "@mui/icons-material/Tune";
const SearchPage = () => {
  return (
    <div className="searchPage">
      <div className="searchPage__filter">
        <TuneIcon />
        <h2>FILTER</h2>
      </div>
      <hr />
      <ChannelRow
        image="https://yt3.ggpht.com/ytc/AKedOLRbdv3Di8paQyrgMF_VwFXPkhwVzcW59Vgo8dTsyw=s176-c-k-c0x00ffffff-no-rj-mo"
        channel="Clever programmer"
        verified
        subs="976k"
        noOfVideos="598"
        description="Just Want to Say a Big Thanks to Clever Programmer Team. Their Youtube Channel helped me a lot!!"
      />
      <hr />
      <VideoRow 
        views="1.4M"
        subs="653k"
        description="asdadasfsdfdsvfsdgvdfgfg"
        timestamp="56 second ago"
        channel="Clever Programmer"
        title="🔴sasdasdawdsadawd"
        
      />
    </div>
  );
};

export default SearchPage;
