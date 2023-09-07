import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import CssBaseline from "@mui/material/CssBaseline";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import Typography from "@mui/material/Typography";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import Button from "@mui/material/Button";

// Icons
import HomeIcon from "@mui/icons-material/Home";
import AssessmentIcon from "@mui/icons-material/Assessment";
import PaidIcon from "@mui/icons-material/Paid";
import PeopleIcon from "@mui/icons-material/People";
import PeopleAltIcon from "@mui/icons-material/PeopleAlt";
import DescriptionIcon from "@mui/icons-material/Description";
import SettingsIcon from "@mui/icons-material/Settings";
import AddIcon from "@mui/icons-material/Add";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";

// Component
import Appbar from "../components/Appbar";
import VideoSection from "../components/VideoSection";
import Link from "next/link";
import { useEffect, useState } from "react";
// import {
//   generateCaption,
//   generateImageFromPrompt,
//   generateTwoWordsQuery,
// } from "@/utils/openai";
import {
  generateCaption,
  generateImageFromPrompt,
  generateTwoWordsQuery,
  generateVideoTitle,
} from "./api/openai";
import { HashLoader } from "react-spinners";
import { generatePromptToThumbnail } from "@/utils/service";
const drawerWidth = 240;

const menuItems = [
  { name: "Dashboard", icon: <HomeIcon /> },
  { name: "Product Suggestion", icon: <AssessmentIcon /> },
  { name: "Revenue", icon: <PaidIcon /> },
  { name: "Customers", icon: <PeopleIcon /> },
  { name: "Team Members", icon: <PeopleAltIcon /> },
  { name: "Invoices", icon: <DescriptionIcon /> },
];

export default function Dashboard() {
  // const [loading, setLoading] = useState(true);
  // const [videos, setVideos] = useState([]);
  // const fetchData = () => {
  //   const data = JSON.parse(localStorage.getItem("data") || "[]");
  //   return data;
  // };
  // useEffect(() => {
  //   const prompt = JSON.parse(localStorage.getItem("prompt"));
  //   if (prompt) {
  //     generateImage(prompt);
  //   } else {
  //     const localVideos = JSON.parse(localStorage.getItem("videos"));
  //     if (localVideos.length) {
  //       setVideos(localVideos);
  //     }
  //     setLoading(false);
  //   }
  // }, []);

  // const generateImage = async (prompt) => {
  //   try {
  //     let twoWords = await generateTwoWordsQuery(prompt);
  //     let caption = await generateCaption(prompt);
  //     console.log("twoWords: ", twoWords);
  //     let imageUrl = await generateImageFromPrompt(twoWords);
  //     console.log("imageUrl: ", imageUrl);
  //     const video = {
  //       outputImage: imageUrl,
  //       words: twoWords,
  //       prompt: prompt,
  //       user: 123,
  //       caption: caption,
  //     };

  //     let updatedVideo = [...videos, video];

  //     const localVideos = JSON.parse(localStorage.getItem("videos"));

  //     if (localVideos && localVideos.length) {
  //       // setVideos(localVideos);
  //       updatedVideo = [...updatedVideo, ...localVideos];
  //     }
  //     localStorage.setItem("videos", JSON.stringify(updatedVideo));
  //     localStorage.removeItem("prompt");
  //     setVideos(updatedVideo);
  //     setLoading(false);
  //   } catch (error) {
  //     console.log("error: ", error);
  //     setLoading(false);
  //   }
  // };
  const [loading, setLoading] = useState(true);
  const [videos, setVideos] = useState([]);

  const fetchData = () => {
    const data = JSON.parse(localStorage.getItem("data") || "[]");
    return data;
  };

  useEffect(() => {
    const dataSets = fetchData();
    const lastData = dataSets[dataSets.length - 1]; // Get the last dataset

    const localVideos = JSON.parse(localStorage.getItem("videos") || "[]");
    const existingVideo = localVideos.find(
      (video) => video.prompt === lastData.prompt
    );

    if (!existingVideo) {
      // If the video hasn't been generated yet
      generateImage(
        lastData.prompt,
        lastData.selected_social_media,
        lastData.source
      );
    } else {
      setVideos(localVideos);
      setLoading(false);
    }
  }, []);

  const generateImage = async (prompt, selected_social_media, source) => {
    try {
      let twoWords = await generateTwoWordsQuery(prompt);
      let caption = await generateCaption(prompt);
      let imageUrl = await generateImageFromPrompt(twoWords);
      let videoTitle = await generateVideoTitle(prompt);

      const video = {
        source: source,
        outputImage: imageUrl,
        words: twoWords,
        prompt: prompt,
        user: 123,
        caption: caption,
        videoTitle: videoTitle,
        selected_social_media: selected_social_media,
      };

      let updatedVideo = [...videos, video];

      const localVideos = JSON.parse(localStorage.getItem("videos") || "[]");
      if (localVideos.length) {
        updatedVideo = [...updatedVideo, ...localVideos];
      }

      localStorage.setItem("videos", JSON.stringify(updatedVideo));
      setVideos(updatedVideo);
      setLoading(false);
    } catch (error) {
      console.log("error: ", error);
      setLoading(false);
    }
  };

  const handleOpenStripe = () => {
    window.open("https://buy.stripe.com/8wMg1n04F4MHbC09AC");
  };

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <Appbar drawerWidth={drawerWidth} />
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: drawerWidth,
            boxSizing: "border-box",
          },
        }}
        variant="permanent"
        anchor="left"
      >
        <Box sx={{ m: 2, p: 1, mt: 1 }}>
          {/* <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{
              fontSize: "24px",
              fontWeight: "900",
              color: "#7B68EE",
              fontStyle: "Lato",
            }}
          >
            Clipfy Club
          </Typography> */}
          <Link href={"#home"}>
            <img className="w-[7rem]" src="/logo.png" alt="Logo" />
          </Link>
        </Box>
        {/* <Toolbar /> */}

        <Box sx={{ height: "50px" }} />

        <List>
          {menuItems.map((item, index) => (
            <ListItem key={item.name} disablePadding>
              <ListItemButton
                sx={{
                  ...(index === 0 && {
                    // bgcolor: "#afa3f5",
                    background: "linear-gradient(90deg, #c3baf7, transparent)",
                  }),
                }}
              >
                <Box sx={{ mx: 2, color: "grey" }}>
                  {item.icon} {/* This will render the corresponding icon */}
                </Box>
                <ListItemText
                  primary={item.name}
                  sx={{
                    ".MuiListItemText-primary": {
                      fontStyle: "Raleway",
                      fontSize: "15px",
                      color: "black",
                      fontWeight: "500",
                    },
                  }}
                />
              </ListItemButton>
            </ListItem>
          ))}
          <ListItem key="Setting" disablePadding>
            <ListItemButton>
              <Box sx={{ mx: 2, color: "grey" }}>
                <SettingsIcon />
              </Box>
              <ListItemText
                primary="Settings"
                sx={{
                  ".MuiListItemText-primary": {
                    fontStyle: "Raleway",
                    fontSize: "15px",
                    color: "black",
                    fontWeight: "500",
                  },
                }}
              />
            </ListItemButton>
          </ListItem>
        </List>
        {/* <Divider /> */}
      </Drawer>
      <Box sx={{ flexGrow: 1, p: 3 }}>
        <Toolbar />
        <Box
          sx={{
            display: "flex", // Make sure this is a flex container
            alignItems: "center", // To vertically align the items
            width: "100%",
            height: "70px",
            backgroundColor: "transparent",
          }}
        >
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{
              display: "inline",
              fontWeight: "bold",
              fontSize: "2rem",
              color: "#7B68EE",
            }}
          >
            Recent Videos
          </Typography>
          <Box sx={{ flexGrow: 1 }} />
          {/* This box will grow and take up available space */}
          <Button
            variant="outlined"
            disableElevation
            startIcon={<AddIcon />}
            onClick={handleOpenStripe}
            sx={{
              mx: 1,
              color: "#7B68EE",
              borderColor: "#7B68EE",
              fontStyle: "Raleway",
              fontSize: "12px",
              padding: "10px 24px", // Example padding values: 12px vertical and 24px horizontal
              borderRadius: "8px", // Fully rounded edges
              fontWeight: "bold",
            }}
          >
            Create new video
          </Button>
          <Button
            startIcon={<ContentCopyIcon />}
            onClick={handleOpenStripe}
            sx={{
              mx: 1,
              bgcolor: "#7B68EE !important",
              color: "white",
              fontStyle: "Raleway",
              fontSize: "12px",
              padding: "10px 24px", // Example padding values: 12px vertical and 24px horizontal
              borderRadius: "8px", // Fully rounded edges
              fontWeight: "bold",
              "&:hover": {
                bgcolor: "#7B68EE",
              },
            }}
          >
            Copy the code snippet
          </Button>
        </Box>
        {loading ? (
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              height: "70vh", // Optionally, set a specific height for the container
            }}
          >
            <HashLoader
              loading={loading}
              size={150}
              aria-label="Loading Spinner"
              data-testid="loader"
              color="#7B68EE"
            />
          </div>
        ) : (
          <VideoSection videos={videos} />
        )}
      </Box>
    </Box>
  );
}
