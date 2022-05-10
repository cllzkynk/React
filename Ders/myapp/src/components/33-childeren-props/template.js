import React from "react";
const Template = ({children}) => {
  return (
    <>
      <div
        style={{
          backgroundColor: "blueviolet",
          textAlign: "center",
        }}
      >
        Admin Panel Header
      </div>
      <div style={{ padding: "5rem" }}>
          {children}
      </div>
      <div
        style={{
          backgroundColor: "gray",
          padding: "2rem",
          textAlign: "center",
        }}
      >
        Admin Panel Footer
      </div>
    </>
  );
};
export default Template;