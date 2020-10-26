import React, { useContext } from "react";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
 
import { CSSTransition, SwitchTransition } from "react-transition-group";
import { makeStyles, withStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
    
    button: {
      marginRight: theme.spacing(1),
      fontSize: 20,
      padding: "6px 12px",
      backgroundColor: "#FFA25B",
      color: "#ffffff",
      width: "250px",
      "&:hover": {
        backgroundColor: "#004A2F",
        borderColor: "#0062cc",
        //  boxShadow: 'none',
      },
      "&:active": {
        boxShadow: "none",
        // backgroundColor: '#004A2F',
        // borderColor: '#005cbf',
      },
      "&:focus": {
        //boxShadow: '0 0 0 0.2rem #004A2F',
      },
    },
    instructions: {
      marginTop: theme.spacing(1),
      marginBottom: theme.spacing(1),
    },
  }));
   
const ButtonField = (props) => {
    const classes = useStyles();
    return (
        <Button type={props.type} className={classes.button} style={{
            width: "500px",
            fontSize: 20,
            padding: "6px 12px",
            backgroundColor: "#FF9B9C",
            color: "#ffffff",
            marginBottom : '10px'
          }}>
            {props.children}
        </Button>
    )
}

export default ButtonField
