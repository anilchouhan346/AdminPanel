import { Dashboard, Home } from "@mui/icons-material";
import { Grid } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  BrowserRouter,
} from "react-router-dom";
import Header from "../componts/defaultlayout/admin/Header";
import Sidebar from "../componts/defaultlayout/admin/Sidebar";
import Dashboards from "../container/admin/pages/dashboard/Dashboard";
import UserlistAdmin from "../container/admin/pages/user/UserlistAdmin";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import Loginadmin from "../componts/user/auth/loginadmin/Loginadmin";
import Signupadmin from "../componts/user/auth/Signupadmin/Signupadmin";
import Mainlayout from "../componts/defaultlayout/layout/Mainlayout";

const Routers = () => {
  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <Router>
          <Routes>
            <Route path="/" element={<Mainlayout />} />
            <Route path="/userlist" element={<UserlistAdmin />} />
            <Route path="/login" element={<Loginadmin />} />
            <Route path="/dashboard" element={<Dashboards />} />
            <Route path="/signup" element={<Signupadmin />} />
            <Route path="/getall" element={<UserlistAdmin />} />
          </Routes>
        </Router>
      </Box>
    </>
  );
};
export default Routers;
{
  /* <Route path="" element={<UserList />} />
        <Route path="sign-up" element={<Signup />} />
        <Route path="login" element={<SignIn />} />

        <Route path="add-users/:editId" element={<AddUser />} />
        <Route path="add-users" element={<AddUser />} /> */
}
{
  /* </Routes>
          </Router>
        </Grid>
      </Grid> */
}
