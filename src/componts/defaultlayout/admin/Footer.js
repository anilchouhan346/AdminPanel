import React from "react";
import Index from "../../Index";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import FacebookIcon from "@mui/icons-material/Facebook";

const Footer = () => {
  return (
    <Index.Box
      style={{
        border: "0px solid white",
        height: "100px",
        backgroundColor: "#1976d2",
        margin: "40px 0px",
        position: "inherit",
        boxShadow:
          "rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px",
      }}
    >
      <Index.Box 
      // sx={{ display: "flex", justifyContent: "center" }}
      sx={{display:"flex",justifyContent:"center"}}
      >
       
          {/* </Index.Box> */}
          <span 
          // sx={{ color: "white", marginTop:"1rem" }}
          >
            Copyright © 2023 CodeSandbox BV
          </span>
         
      </Index.Box>
    </Index.Box>
  );
};
export default Footer;
