import React, { useState, useContext,useEffect } from "react";

import Stepers from "./Stepers";
import CardWidget from "./CardWidget";
import {
  CSSTransition,
} from "react-transition-group";
import "./Stepers.css";
import StepWidget from "./StepWidget";
import MyContext from "../context/product/MyContext";
import SteperButton from "./SteperButton";
import Garenties from "./Garenties";
import Spinner from '../Components/common/Spinner';

const Main = () => {
  const myContext = useContext(MyContext);
  const {
    questions,
    answers,
    question,
    answer,
    select_question,
    select_answer,
    activeStep,
    addPopulation,get_questions,get_answers,
    steps,addGaranties

  } = myContext;
  
  useEffect(() => {
    
    

  get_questions()
    get_answers()
  }, [])

  const [trans, setTrans] = useState(0);

  const handleChange = (id, title) => {
    select_question(title, id);
    select_answer("");
    setTrans(!trans);
  };

  const handleChange2 = (id, title) => {
    select_answer(title, id);
  };


 
  return (
    <div style={{ display: "flex", marginTop: "30px" , backgroundColor:'#EFF2F4' }}>
      {    answers.length  && questions.length && <div style={{ flex: ".995" }}>
        <Stepers />

         
         {activeStep === 0 ? (
          
          <div style={{ backgroundColor: "" }}>
            
            <CSSTransition
            in={true}
            appear={true}
            timeout={3000}
            classNames="alert"
          >
            <div
              className=""
              style={{
                display: "flex",
                justifyContent: "space-around",
                marginTop: "20px",
              }}
            >
              {questions.map((item, index) => (
                <CardWidget
                  title={item.title}
                  color={item.color}
                  id={item.id}
                  handleChange={handleChange}
                  selectedID={question.id}
                />
              ))}
            </div>
          </CSSTransition>

          <CSSTransition
            in={true}
            appear={true}
            timeout={2000}
            classNames="widget"
          >
            <div
              style={{ display: "flex", justifyContent: "space-around" }}
              className="my-5"
            >
              {answers.map((item) => (
                <CardWidget
                  title={item.title}
                  color={item.color}
                  id={item.id}
                  handleChange={handleChange2}
                  w="48%"
                  selectedID={answer.id}
                />
              ))}
            </div>
          </CSSTransition>
         
            
            </div>
         
        ) : activeStep === 1 ? (
         
           <StepWidget title="Coordonnées" step={activeStep} id="1" height='700px'  />
          
        ) : (activeStep === 2 ) ?  (
          <StepWidget title="Correspandant"   step={activeStep} id="2"    height='600px'/>
        ) :(activeStep === 3 && !addPopulation)   ? (
          <StepWidget title="Structuration de l’Entreprise"   step={activeStep} id="3" height='600px' />
        ) : 
        ((activeStep === 3 && addPopulation)  )  ? (
          <StepWidget title="Ensmble Du Personelle"   step={activeStep} id="4"  height='600px'/>
        ) :
        (activeStep === 4 )    ? (
       addGaranties ? <Garenties type="2"/> : <Garenties type="1"/>    
          //<StepWidget  title="Choix des garantiess et tarif" step={activeStep} id="5"  height='600px'  />
        
        ) : (
          ""
        )}
         {(activeStep==0 || activeStep >= steps.length-1) ? <SteperButton/> : ''} 
      </div>
      }
     
    </div>
  );
};

export default Main;
