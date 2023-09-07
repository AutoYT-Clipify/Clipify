// pages/BlogToVideo/Dashboard.js
import React from "react";
import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";

import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";

import { Box } from "@mui/material";
import Dialog from "@mui/material/Dialog";

import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";

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
