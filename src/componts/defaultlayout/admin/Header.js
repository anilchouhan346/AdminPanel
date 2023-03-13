import React from "react";
import Index from "../../Index";
import Sidebar from "./Sidebar";
import { createTheme, styled } from "@mui/material/styles";
import { red, green, blue } from "@mui/material/colors";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@emotion/react";




const Header = () => {
 const theme=useTheme();
  return (
    <>
   
      
      <Index.Box>
        <Index.AppBar position="static">
          <Index.Toolbar>
            <Index.Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              Admin panel
            </Index.Typography>
            <Index.Link
              to="/signup"
              // sx={{textDecoration:"none"}}
              style={{ textDecoration: "none", color: "white" }}
            >
              <Index.Button color="inherit">Signup</Index.Button>
            </Index.Link>
            <Index.Link
              to="/login"
              // style={{ textDecoration: "none", color: "white" }}
            >
              <Index.Button color="inherit">Login</Index.Button>
            </Index.Link>
          </Index.Toolbar>
        </Index.AppBar>
        {/* <Sidebar /> */}
      </Index.Box>
    </>
  );
};
export default Header;
