import React from "react";
import SideBar from "../components/admins/common/side-bar";

const AdminTemplate = ({ children }) => {
  return (
    <div>
      <SideBar />
      <div style={{marginLeft:"20vw", paddingTop:"2rem"}}>
      {children}
      </div>
    </div>
  );
};

export default AdminTemplate;
