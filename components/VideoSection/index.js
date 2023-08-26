// pages/BlogToVideo/Dashboard.js
import React from "react";

import List from "@mui/material/List";

// Comp
import Cards from "../VideoCard";
const VideoSection = () => {
  return (
    <div>
      <List style={{ display: "flex", flexDirection: "row", flexWrap: "wrap" }}>
        {["Videos"].map((text, index) => (
          <Cards />
        ))}
      </List>
    </div>
  );
};

export default VideoSection;
