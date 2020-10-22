import React from "react";
import SimpleDrawer from "../common/SimpleDrawer"
 
import NavbarLeft from "../layouts/NavbarLeft";
import NavbarRight from "../layouts/NavbarRight"
const Navbar = () => {
  return (
    <div style={AppHeaderStyle}>
        <div style={{display:'flex',alignItems:'center'}}>
      <SimpleDrawer />
      <NavbarLeft/>
 
      </div>
      <NavbarRight/>
    </div>
  );
};

const AppHeaderStyle = {
  backgroundColor: "#FFFFFF",
  display: "flex",
  alignItems: "center",
  alignContent: "center",
  flex: "1",
  padding: "0 1.5rem",
  height: "60px",
  fontSize: ".78rem",
  justifyContent: "space-between",
  boxShadow: '0 0.46875rem 2.1875rem rgba(4, 9, 20, 0.03), 0 0.9375rem 1.40625rem rgba(4, 9, 20, 0.03), 0 0.25rem 0.53125rem rgba(4, 9, 20, 0.05), 0 0.125rem 0.1875rem rgba(4, 9, 20, 0.03)'
};

export default Navbar;
