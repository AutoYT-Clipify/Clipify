import * as React from "react";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { useEffect, useState } from "react";
import { getCurrentUser, logout } from "@/utils/firebase.utils";
import { useRouter } from "next/router";

export default function Minimenu() {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const [name, setName] = useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const userGet = async () => {
    try {
      const user = await getCurrentUser();
      setName(user?.displayName);

      if (!!user) {
        router.push("/dashboard");
      } else {
        router.push("/sign-in");
      }
    } catch (err) {
      console.log(err);
      return null;
    }
  };

  useEffect(() => {
    userGet();
  }, []);

  const router = useRouter();
  const handleLogout = async () => {
    await logout();
    router.push("/sign-in");
  };

  return (
    <div>
      {/* <Button
        id="basic-button"
        aria-controls={open ? "basic-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
      >
        Dashboard
      </Button> */}
      <Button
        id="basic-button"
        aria-controls={open ? "basic-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
        sx={{
          backgroundColor: "transparent",
          fontSize: "12px",
          fontStyle: "Raleway",
          color: "black",
          fontWeight: "bold",
          "&:hover": {
            backgroundColor: "rgba(255, 255, 255, 0.1)", // Optional: slight white shade on hover
          },
        }}
      >
        {name ? name : ""}
        {/* <Typography
          variant="caption"
          sx={{ color: "lightgrey", display: "block" }}
        >
          Owner
        </Typography> */}
      </Button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
      >
        {/* <MenuItem onClick={handleClose}>Profile</MenuItem> */}
        {/* <MenuItem onClick={handleClose}>My account</MenuItem> */}
        <MenuItem
          onClick={() => {
            handleLogout();
          }}
        >
          Logout
        </MenuItem>
      </Menu>
    </div>
  );
}
