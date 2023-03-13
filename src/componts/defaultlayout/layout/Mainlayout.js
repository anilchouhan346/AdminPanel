import React from "react";
import UserlistAdmin from "../../../container/admin/pages/user/UserlistAdmin";
import Index from "../../Index";
import Footer from "../admin/Footer";
import Header from "../admin/Header";
import Sidebar from "../admin/Sidebar";
// import Sidebar from "../admin/Sidebar";

const Mainlayout = ({ children }) => {
  return (
    // <Index.Container>
    <Index.Container minWidth= "600px">
      <div>
        <Header />
      </div>
      <div style={{ display: "flex", flexDirection: "row",gap:"2rem",marginTop:"10px"}}>
        <div >
          <Sidebar />
        </div>

        <div style={{ width: "100%" }}>{children}</div>
      </div>
      <div>
        <Footer />
      </div>
    </Index.Container>
  
  );
};
export default Mainlayout;
