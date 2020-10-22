import React, { useContext } from "react";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import MyContext from "../context/product/MyContext";
import { CSSTransition, SwitchTransition } from "react-transition-group";
import { makeStyles, withStyles } from "@material-ui/core/styles";
const useStyles = makeStyles((theme) => ({
    
    button: {
      marginRight: theme.spacing(1),
      fontSize: 20,
      padding: "6px 12px",
      backgroundColor: "#F38F20",
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
   
const SteperButton = () => {
    const classes = useStyles();
  const myContext = useContext(MyContext);
  const {
    steps,
    activeStep,
    set_active_step,
    stepContent,
    answer,
    question,
    addCoordone,
    addCorrespondant,
    addPopulation,
    addInfo,addGaranties2 
  } = myContext;
  const [pop,setPopulation] = React.useState(false)
  const handleNext = () => {
    
    set_active_step(activeStep + 1);
    
  };

  const handleBack = () => {
    set_active_step(activeStep - 1);
 
  };

  const handleReset = () => {
    set_active_step(0);
  };
  return (
    <div>
      {activeStep === steps.length ? (
        <div>
          <Typography className={classes.instructions}>
          Toutes les étapes sont terminées - vous avez terminé
          </Typography>
          <Button onClick={handleReset} className={classes.button}>
             Réinitialiser
          </Button>
        </div>
      ) : activeStep === 0 && (answer.id && question.id) ? (
        <div>
          <CSSTransition
            in={true}
            appear={true}
            timeout={2000}
            classNames="butttonAnimation"
          >
            <div className="mb-5">
              <div className="my-2">
                {activeStep === 2 ? (
                  <Button
                    onClick={handleBack}
                    style={{
                      width: "500px",
                      fontSize: 20,
                      padding: "6px 12px",
                      backgroundColor: "#FF9B9C",
                      color: "#ffffff",
                    }}
                  >
                    Ajouter Un Corespandant
                  </Button>
                ) : activeStep === 3 ? (
                  <Button
                    onClick={() => setPopulation(true)}
                    style={{
                      width: "500px",
                      fontSize: 20,
                      padding: "6px 12px",
                      backgroundColor: "#FF9B9C",
                      color: "#ffffff",
                    }}
                  >
                    Ajouter une Population
                  </Button>
                ) : (
                  ""
                )}
              </div>

              {activeStep !== 0 ? (
                <Button
                  disabled={activeStep === 0}
                  onClick={handleBack}
                  className={classes.button}
                >
                  Retour
                </Button>
              ) : (
                ""
              )}

              <Button
                variant="contained"
                color="primary"
                onClick={handleNext}
                className={classes.button}
              >
                {activeStep === steps.length - 1 ? "Finish" : "Continuer"}
              </Button>
            </div>
          </CSSTransition>
          <Typography className={classes.instructions}>
            {stepContent}
          </Typography>
        </div>
      ) : activeStep === 1 && addCoordone ?
      <CSSTransition
      in={true}
      appear={true}
      timeout={2000}
      classNames="butttonAnimation"
    >
      <div className=" mb-5 ">
      {activeStep !== 0 ? (
                <Button
                  disabled={activeStep === 0}
                  onClick={handleBack}
                  className={classes.button}
                >
                  Retour
                </Button>
              ) : (
                ""
              )}

              <Button
                variant="contained"
                color="primary"
                onClick={handleNext}
                className={classes.button}
              >
                {activeStep === steps.length - 1 ? "Finish" : "Continuer"}
              </Button>

              
      </div>
      </CSSTransition>
      :activeStep === 2 && addCorrespondant ?
      <CSSTransition
      in={true}
      appear={true}
      timeout={2000}
      classNames="butttonAnimation"
    >
      <div className=" mb-5">
      {activeStep !== 0 ? (
                <Button
                  disabled={activeStep === 0}
                  onClick={handleBack}
                  className={classes.button}
                >
                  Retour
                </Button>
              ) : (
                ""
              )}

              <Button
                variant="contained"
                color="primary"
                onClick={handleNext}
                className={classes.button}
              >
                {activeStep === steps.length - 1 ? "Finish" : "Continuer"}
              </Button>

              
      </div>
      </CSSTransition>
      :
      activeStep === 3 && addInfo ?
      <CSSTransition
      in={true}
      appear={true}
      timeout={2000}
      classNames="butttonAnimation"
    >
      <div className=" mb-5">
      {activeStep !== 0 ? (
                <Button
                  disabled={activeStep === 0}
                  onClick={handleBack}
                  className={classes.button}
                >
                  Retour
                </Button>
              ) : (
                ""
              )}

              <Button
                variant="contained"
                color="primary"
                onClick={handleNext}
                className={classes.button}
              >
                {activeStep === steps.length - 1 ? "terminer" : "Continuer"}
              </Button>

              
      </div>
      </CSSTransition>
      :
      activeStep === 4 && addGaranties2 ?
      <CSSTransition
      in={true}
      appear={true}
      timeout={2000}
      classNames="butttonAnimation"
    >
      <div className=" mb-5">
      {activeStep !== 0 ? (
                <Button
                  disabled={activeStep === 0}
                  onClick={handleBack}
                  className={classes.button}
                >
                 Retour
                </Button>
              ) : (
                ""
              )}

              <Button
                variant="contained"
                color="primary"
                onClick={handleNext}
                className={classes.button}
              >
                {activeStep === steps.length - 1 ? "terminer" : "Continuer"}
              </Button>

              
      </div>
      </CSSTransition>
      :activeStep === 5    ?
      <CSSTransition
      in={true}
      appear={true}
      timeout={2000}
      classNames="butttonAnimation"
    >
      <div className=" mb-5">
      {activeStep !== 0 ? (
                <Button
                  disabled={activeStep === 0}
                  onClick={handleBack}
                  className={classes.button}
                >
                  Retour
                </Button>
              ) : (
                ""
              )}

              <Button
                variant="contained"
                color="primary"
                onClick={handleNext}
                className={classes.button}
              >
                {activeStep === steps.length - 1 ? "terminer" : "Continuer"}
              </Button>

              
      </div>
      </CSSTransition>
      :
      
      
      
      (
        ""
      )}
    </div>
  );
};

export default SteperButton;
