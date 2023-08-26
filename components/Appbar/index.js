import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";

import Tooltip from "@mui/material/Tooltip";
import Button from "@mui/material/Button";
import Avatar from "@mui/material/Avatar";

import AddIcon from "@mui/icons-material/Add";
import SearchIcon from "@mui/icons-material/Search";
import { styled, alpha } from "@mui/material/styles";
import InputBase from "@mui/material/InputBase";
import { Container, InputAdornment, TextField } from "@mui/material";
import { useState } from "react";
import Minimenu from "../Minimenu";

// Component

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(1),
    width: "auto",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      width: "30ch",
      "&:focus": {
        width: "32ch",
      },
    },
  },
}));

export default function Appbar({ drawerWidth }) {
  const [searchTerm, setSearchTerm] = useState("");

  const handleChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleOpenStripe = () => {
    window.open('https://buy.stripe.com/8wMg1n04F4MHbC09AC')
  }

  return (
    <AppBar
      position="fixed"
      elevation={0} // Disable shadow
      sx={{
        backgroundColor: "white",
        width: `calc(100% - ${drawerWidth}px)`,
        ml: `${drawerWidth}px`,
      }}
    >
      <Toolbar>
        {/* <Search
          sx={{
            backgroundColor: "grey",
            marginRight: "auto",
          }}
        >
          <SearchIconWrapper>
            <SearchIcon />
          </SearchIconWrapper>
          <StyledInputBase
            placeholder="Search…"
            // sx={{ backgroundColor: "transparent" }} // Make the input transparent as well
            // inputProps={{ "aria-label": "search" }}
          />
        </Search> */}
        <Box>
          <TextField
            id="search"
            type="search"
            placeholder="Search anything comes to your mind" // Use placeholder instead of label
            value={searchTerm}
            onChange={handleChange}
            sx={{
              width: 450,
              "& .MuiInputLabel-root": {
                fontSize: "12px",
              },
              "& .MuiInputBase-root": {
                fontSize: "12px",
                // padding: "8px 12px",
                borderRadius: "20px",
              },
            }}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <SearchIcon />
                </InputAdornment>
              ),
            }}
          />
        </Box>
        <Box sx={{ flexGrow: 1 }} />
        <Button
          variant="outlined"
          onClick={handleOpenStripe}
          sx={{
            mx: 2,
            // backgroundColor: "lightgrey",
            color: "#7B68EE",
            borderColor: "#7B68EE",
            fontSize: "10px",
            fontStyle: "Raleway",

            "&:hover": {
              borderColor: "lightgrey",
              color: "grey",
            },
          }}
          startIcon={<AddIcon />}
        >
          Add tokens
        </Button>
        <Tooltip title="Open settings">
          <IconButton sx={{ mx: 1, p: 0 }}>
            <Avatar
              alt="Remy Sharp"
              src="/static/user/user_image.jpeg"
              sx={{ width: 30, height: 30 }}
            />
          </IconButton>
        </Tooltip>
        <Minimenu />
      </Toolbar>
    </AppBar>
  );
}

//  {/* <Typography variant="h6" noWrap component="div">
//           Permanent drawer
//         </Typography> */}
//         <Search>
//           <SearchIconWrapper>
//             <SearchIcon />
//           </SearchIconWrapper>
//           <StyledInputBase
//             placeholder="Search…"
//             // inputProps={{ "aria-label": "search" }}
//           />
//         </Search>
//         <Box />
//         {/* <Box sx={{ flexGrow: 0 }}> */}
//         {/* <Button
//           variant="outlined"
//           sx={{ bg: "white", color: "black" }}
//           startIcon={<AddIcon />}
//         >
//           Add tokens
//         </Button> */}
// <Button
//   variant="outlined"
//   sx={{
//     // backgroundColor: "lightgrey",
//     color: "white",
//     borderColor: "white", // This changes the outline color

//     "&:hover": {
//       backgroundColor: "grey",
//       color: "lightwhite",
//     },
//   }}
//   startIcon={<AddIcon />}
// >
//   Add tokens
// </Button>
//         <Tooltip title="Open settings">
//           <IconButton sx={{ p: 0 }}>
//             <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
//           </IconButton>
//         </Tooltip>
//         <Minimenu />
//         {/* </Box> */}
