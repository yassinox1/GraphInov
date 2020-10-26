import {
    TOGGLE_THEMES
}from "../types"


export default (state,action)=>{

    switch(action.type){
        case TOGGLE_THEMES:
            return {
                ...state,
                theme : action.payload
            }
    }

}

 