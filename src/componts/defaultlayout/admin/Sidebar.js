import React from "react";
import Index from "../../Index";
import DraftsIcon from "@mui/icons-material/Drafts";
import DashboardIcon from "@mui/icons-material/Dashboard";
import PeopleIcon from "@mui/icons-material/People";
import PrivacyTipIcon from "@mui/icons-material/PrivacyTip";
import NotInterestedIcon from "@mui/icons-material/NotInterested";
import InfoIcon from "@mui/icons-material/Info";
import Face5Icon from "@mui/icons-material/Face5";
import { styled } from "@mui/material/styles";



const Sidebar = () => {
  
  const [age, setAge] = React.useState("");

  const handleChange = (event) => {
    setAge(event.target.value);
  };
  return (
    <Index.Box>
      <Index.Box>
        <img src={Index.Svg.dashboard} />
        <Index.Box>
          <Index.List>
            <Index.ListItem disablePadding>
              <Index.ListItemButton>
                <Index.ListItemIcon>
                  <Index.Link
                    to="/dashboard"
                    // style={{ textDecoration: "none" }}
                  >
                    <DashboardIcon /> Dashboard
                  </Index.Link>
                </Index.ListItemIcon>
                {/* <ListItemText primary="Drafts" /> */}
              </Index.ListItemButton>
            </Index.ListItem>

            <Index.ListItem disablePadding>
              <Index.Link to="/userlist">
                <Index.ListItemButton>
                  <Index.ListItemIcon>
                    <PeopleIcon />
                  </Index.ListItemIcon>
                  <Index.FormControl
                    variant="standard"
                    sx={{ mt: "-20px", minWidth: "70px", m: "3px -17px" }}
                  >
                    <Index.InputLabel id="demo-simple-select-standard-label">
                      User-management
                    </Index.InputLabel>
                    <Index.Select
                      labelId="demo-simple-select-standard-label"
                      id="demo-simple-select-standard"
                      value={age}
                      onChange={handleChange}
                      label="User"
                    >
                      <Index.Link
                        to="/getall"
                        // style={{ textDecoration: "none", color: "black" }}
                      >
                        <Index.MenuItem>Get-All</Index.MenuItem>
                      </Index.Link>
                      <Index.Link
                        to="/signup"
                        style={{ textDecoration: "none", color: "black" }}
                      >
                        <Index.MenuItem>Add-User</Index.MenuItem>
                      </Index.Link>

                      <Index.Link
                        to="/getone"
                        // style={{ textDecoration: "none", color: "black" }}
                      >
                        <Index.MenuItem>Get-Singal-user</Index.MenuItem>
                      </Index.Link>
                    </Index.Select>
                  </Index.FormControl>
                </Index.ListItemButton>
              </Index.Link>
            </Index.ListItem>

            <Index.ListItem disablePadding>
              <Index.Link>
                <Index.ListItemButton>
                  <Index.ListItemIcon>
                    <Face5Icon />
                  </Index.ListItemIcon>
                  <Index.FormControl
                    variant="standard"
                    sx={{ mt: "-20px", minWidth: "70px", m: "3px -17px" }}
                  >
                    <Index.InputLabel id="demo-simple-select-standard-label">
                      CMA
                    </Index.InputLabel>
                    <Index.Select
                      labelId="demo-simple-select-standard-label"
                      id="demo-simple-select-standard"
                      value={age}
                      onChange={handleChange}
                      label="User"
                    >
                      <Index.Link
                        // style={{ textDecoration: "none", color: "black" }}
                      >
                        <Index.MenuItem>
                          <InfoIcon />
                          About Us
                        </Index.MenuItem>
                      </Index.Link>
                      <Index.Link
                        // style={{ textDecoration: "none", color: "black" }}
                      >
                        <Index.MenuItem>
                          <PrivacyTipIcon />
                          Privacy Policy
                        </Index.MenuItem>
                      </Index.Link>

                      <Index.Link
                        // style={{ textDecoration: "none", color: "black" }}
                      >
                        <Index.MenuItem>
                          <NotInterestedIcon />
                          t&c
                        </Index.MenuItem>
                      </Index.Link>
                    </Index.Select>
                  </Index.FormControl>
                </Index.ListItemButton>
              </Index.Link>
            </Index.ListItem>
          </Index.List>
        </Index.Box>
      </Index.Box>
    </Index.Box>
  );
};
export default Sidebar;
