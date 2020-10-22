import {
  GET_QUESTIONS,GET_ANSWERS,SELECT_QUESTION,SELECT_ANSWER,ADD_GARENTIES,ADD_GARENTIES2,SET_ACTIVE_STEP,ADD_POPULATION,ADD_INFO,GET_STEP_CONTENT,ADD_CORRDONNEE,ADD_CORRESPANDONT
} from "../types";

export default (state, action) => {
  switch (action.type) {
    
    case GET_QUESTIONS:
 
      return {
        ...state,
        questions: action.payload
      };
      case GET_ANSWERS:
   
      return {
        ...state,
        answers: action.payload
      };
      case SELECT_QUESTION:
       
      return {
        ...state,
        question: {title : action.payload.selectedQuestion,id : action.payload.id}
        
      };
      case SELECT_ANSWER:
      return {
        ...state,
        answer:  {title : action.payload.selectedAnswser,id : action.payload.id}
      };
      case SET_ACTIVE_STEP:
        return {
          ...state,
          activeStep:  action.payload 
        };
        case GET_STEP_CONTENT:
          return {
            ...state,
            stepContent:  action.payload 
          };
        case ADD_CORRDONNEE:
       
          return{
            ...state,
            cordonee  : action.payload,
            addCoordone : true
          }
          case ADD_CORRESPANDONT:
      console.log('correspondant',action.payload)
            return{
              ...state,
              correspandont  : action.payload,
              addCorrespondant : true
            }
            case ADD_POPULATION:
       
            return{
              ...state,
              population  : action.payload,
              addPopulation : true
            }
            case ADD_INFO:
              console.log('info ls',action.payload)
                    return{
                      ...state,
                      infoLs  : action.payload,
                      addInfo : true
                    } 
                    
                    case ADD_GARENTIES:
                  
                            return{
                              ...state,
                              addGaranties: true
                            } 
                            case ADD_GARENTIES2:
                  
                              return{
                                ...state,
                                addGaranties2: true
                              } 
    default:
      return state;
  }
};
