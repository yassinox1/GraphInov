import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardContent from "@material-ui/core/CardContent";
import {
  MdDone,
  MdBusiness,
  MdPerson,
  MdSupervisorAccount,
  MdLocalHospital,
  MdBeachAccess,
} from "react-icons/md";
 
import{FaUsers,FaUmbrella,FaPlusCircle,FaCheckCircle}from"react-icons/fa"
import "./Stepers.css";

const useStyles = makeStyles({
  root: {
    backgroundColor: "#FFFFFF",
    boxShadow:
      "0 0.46875rem 2.1875rem rgba(4, 9, 20, 0.03), 0 0.9375rem 1.40625rem rgba(4, 9, 20, 0.03), 0 0.25rem 0.53125rem rgba(4, 9, 20, 0.05), 0 0.125rem 0.1875rem rgba(4, 9, 20, 0.03)",
  },
  media: {
    height: 140,
  },
});
const CardWidget = ({ title, color, w, id, handleChange, selectedID }) => {
  const isSelectedDone = selectedID == id ? true : false;

  const Nejma = () =>
    isSelectedDone ? (
      <div>
        <FaCheckCircle
          style={{ 
            height: '30px',
    width: '30px',
            fontSize: "26px", fontWeight: "bold", color: "#92D050" }}
        />
      </div>
    ) : (
      <FaCheckCircle style={{ color: "#FFFFFF" }} />
    );

  const classes = useStyles();
  return (
    <div
      style={
        w
          ? { width: w, cursor: "pointer",height:'300px' }
          : { width: "30%", cursor: "pointer" }
      }
      onClick={() => handleChange(id, title)}
    >
      <Card className={classes.root} style={{borderTopLeftRadius: '2.5% 5%',borderBottomRightRadius: '2.5% 5%',borderTopRightRadius: '2.5% 5%',borderBottomLeftRadius: '2.5% 5%'}}>
        <CardHeader action={<Nejma />} />
        <CardContent>
          <h1
            style={{
              color: "#1E1812",
              fontSize: "40px",
              fontStyle: "normal",
              fontWeight: "bold",
            }}
          >
            {title}
          </h1>
          <div style={{ fontSize: "7em", color: color }}>
            {id == 1 ? (
              <MdPerson />
            ) : id == 2 ? (
              <FaUsers />
            ) : id == 3 ? (
              <MdSupervisorAccount />
            ) : id == 4 || id == 6 || id == 8? (
              <FaPlusCircle />
            ) : (
              <FaUmbrella />
            )}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};
const Done = {
  backgroundColor: "#A6CB12",
  fontSize: "15px",
  height: "25px",
  width: "25px",
  borderRadius: "50%",
};
export default CardWidget;
