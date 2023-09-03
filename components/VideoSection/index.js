// pages/BlogToVideo/Dashboard.js
import React from "react";

import List from "@mui/material/List";

// Comp
import Cards from "../VideoCard";
const VideoSection = ({ videos }) => {
  return (
    <div>
      <List style={{ display: "flex", flexDirection: "row", flexWrap: "wrap" }}>
        {videos.map((video, index) => (
          <Cards key={index} video={video} />
        ))}
      </List>
    </div>
  );
};

export default VideoSection;
