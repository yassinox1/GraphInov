import React, { useReducer } from "react";
import {
  GET_QUESTIONS,
  GET_ANSWERS,
  SELECT_QUESTION,
  SELECT_ANSWER,
  SET_ACTIVE_STEP,
  ADD_GARENTIES2,
  ADD_GARENTIES,
  GET_STEP_CONTENT,
  ADD_INFO,
  ADD_POPULATION,
  ADD_CORRDONNEE,
  ADD_CORRESPANDONT,
} from "../types";
import MyReducer from "./MyReducer";
import MyContext from "./MyContext";
import axios from "axios";
const ProductState = (props) => {
  const initialstate = {
    questions: [
      { id: 1, title: "Particulier", color: "#28AEE4" },
      { id: 2, title: "Entreprise", color: "#F36886" },
      { id: 3, title: "Indepandant", color: "#53216D" },
    ],
    answers: [
      { id: 4, title: "Offre Voiture", color: "#92D050" },
      { id: 5, title: "Offre Vie", color: "#F36886" },
    ],
    question: {
      id: "",
      title: "",
    },
    answer: {
      id: "",
      title: "",
    },
    activeStep: 0,
    steps: [
      "Description de loffre",
      "Coordonées Souscripteur",
      "Coordonées correspondant",
      "Informations Complémentaires",
      "Choix des garantiess et tarif",
      "Result",
    ],

    stepContent: "Select campaign settings...",
    addCoordone: false,
    addCorrespondant: false,
    addPopulation: false,
    addGaranties: false,
    addGaranties2: false,
    addInfo: false,
    cordonee: "",
    correspandont: "",
    population: "",
    infoLs: "",
  };

  const [state, dispatch] = useReducer(MyReducer, initialstate);

  //Get ALL Question
  const get_questions = async () => {
    //const res = await axios.get('http://localhost:3004/questions')
    dispatch({ type: GET_QUESTIONS, payload: state.questions });
  };

  //Get ALL Answer
  const get_answers = async () => {
  //  const res = await axios.get("http://localhost:3004/answers");
    dispatch({ type: GET_ANSWERS, payload: state.answers });
  };

  //select question
  const select_question = (selectedQuestion, id) => {
    dispatch({ type: SELECT_QUESTION, payload: { selectedQuestion, id } });
  };

  //select answer
  const select_answer = (selectedAnswer, id) => {
    dispatch({ type: SELECT_ANSWER, payload: { selectedAnswer, id } });
  };

  //Steps
  const set_active_step = (step) => {
    get_step_content(step);
    dispatch({ type: SET_ACTIVE_STEP, payload: step });
  };

  //getStepContent
  const get_step_content = (step) => {
    switch (step) {
      case 0:
        return dispatch({
          type: GET_STEP_CONTENT,
          payload: "",
        });
      case 1:
        return dispatch({
          type: GET_STEP_CONTENT,
          payload: "",
        });
      case 2:
        return dispatch({
          type: GET_STEP_CONTENT,
          payload: "",
        });
      case 3:
        return dispatch({
          type: GET_STEP_CONTENT,
          payload: "",
        });
      case 4:
        return dispatch({
          type: GET_STEP_CONTENT,
          payload: "",
        });
      default:
        return dispatch({ type: GET_STEP_CONTENT, payload: "" });
    }
  };

  const add_corrdonee = (cor) =>
    dispatch({ type: ADD_CORRDONNEE, payload: cor });
  const add_correspondant = (cor) =>
    dispatch({ type: ADD_CORRESPANDONT, payload: cor });
  const add_population = (cor) =>
    dispatch({ type: ADD_POPULATION, payload: cor });
  const add_info = (cor) => dispatch({ type: ADD_INFO, payload: cor });
  const add_garanties = () => dispatch({ type: ADD_GARENTIES, payload: true });
  const add_garanties2 = () =>
    dispatch({ type: ADD_GARENTIES2, payload: true });
  return (
    <MyContext.Provider
      value={{
        questions: state.questions,
        answers: state.answers,
        get_questions,
        get_answers,
        select_question,
        select_answer,
        question: state.question,
        answer: state.answer,
        steps: state.steps,
        activeStep: state.activeStep,
        set_active_step,
        get_step_content,
        stepContent: state.stepContent,
        addCoordone: state.addCoordone,
        addCorrespondant: state.addCorrespondant,
        addInfo: state.addInfo,
        addGaranties: state.addGaranties,
        addGaranties2: state.addGaranties2,
        cordonee: state.cordonee,
        correspandont: state.correspandont,
        population: state.population,
        addPopulation: state.addPopulation,
        infoLs: state.infoLs,
        add_corrdonee,
        add_correspondant,
        add_population,
        add_info,
        add_garanties,
        add_garanties2,
      }}
    >
      {props.children}
    </MyContext.Provider>
  );
};

export default ProductState;
