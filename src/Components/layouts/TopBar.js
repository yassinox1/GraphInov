import React,{useContext} from "react";
import ThemesContext from "../../context/themes/ThemesContext";
import Navbar from "./Navbar"
const TopBar = () => {
  const themesContext = useContext(ThemesContext);
  const { toggle_theames} = themesContext;
  return (
    <div>
      <nav class="navbar  " style={NavStyle}>
        <a class="navbar-brand" style={{ paddingTop: "0px" }} href="/#">
          <div class="app-header__logo">
            <img
              src={require("../../asstes/images/graphtalk.png")}
              height="35px"
              width="270px"
              alt=""
            ></img>
          
          </div>
          
        </a>
      </nav>
      
      <Navbar/>
    </div>
  );
};
const NavStyle = {
    height: "36px",
    padding: "0px 0px",
    marginBottom: "0px",
    backgroundColor: "#252733"
  };
export default TopBar;
