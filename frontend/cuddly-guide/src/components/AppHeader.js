import React from "react";
import { AppBar, Toolbar, Typography, Button, IconButton } from "@mui/material";
import { useLocation, useNavigate } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";
import { styled } from "@mui/material/styles";

const StyledAppBar = styled(AppBar)(({ theme }) => ({
  // background: "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",
  height: 65,
  position: "fixed",
  top: 0,
  backgroundColor: "transparent",
  boxShadow: "none",
}));

const StyledIconButton = styled(IconButton)(({ theme }) => ({
  marginRight: theme.spacing(2),
}));

const StyledButton = styled(Button)(({ theme }) => ({
  marginLeft: theme.spacing(2),
  color: "black",
  "&.active": {
    // color: "green",
    backgroundColor: "#A6CF98", // Add this line to set the background color
    borderRadius: 25,
  },
}));

const Navbar = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const isTabActive = (path) => location.pathname === path;
  console.log("Current Path: ", location.pathname);

  const routesWithoutNavbar = ["/login", "/"];
  const shouldDisplayNavbar = !routesWithoutNavbar.includes(location.pathname);

  return shouldDisplayNavbar ? (
    <StyledAppBar position="static">
      <Toolbar
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        {/* <StyledIconButton edge="start" color="inherit" aria-label="menu">
          <MenuIcon />
        </StyledIconButton> */}
        <div style={{ display: "flex", flexDirection: "row" }}>
          <Typography
            style={{
              fontSize: 22,
              flexDirection: "row",
              color: "#87CEEB",
              fontWeight: "700",
            }}
            variant="h6"
            sx={{ flexGrow: 1 }}
          >
            CODE
          </Typography>
          <Typography
            style={{
              fontSize: 22,
              flexDirection: "row",
              marginLeft: 8,
              color: "#FAC213",
              fontWeight: "700",
            }}
            variant="h6"
            sx={{ flexGrow: 1 }}
          >
            GUIDER
          </Typography>
        </div>
        <div>
          <StyledButton
            className={isTabActive("") ? "active" : ""}
            color="inherit"
            onClick={() => navigate("")}
          >
            Home
          </StyledButton>
          <StyledButton
            className={isTabActive("about") ? "active" : ""}
            color="inherit"
            onClick={() => navigate("about")}
            
          >
            About
          </StyledButton>
          <StyledButton
            className={isTabActive("services") ? "active" : ""}
            onClick={() => navigate("services")}
            color="inherit"
          >
            Services
          </StyledButton>
          <StyledButton
            color="inherit"
            onClick={() => {
              localStorage.clear();
              navigate("/Login");
            }}
          >
            Logout
          </StyledButton>
        </div>
      </Toolbar>
    </StyledAppBar>
  ) : null;
};

export default Navbar;
