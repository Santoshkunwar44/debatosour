import { DebateInitialStateType, THEENUMBSS } from "../../utils/types"
import { DebateActions } from "../action/Actions/Actions";
import { ActionTypes } from "../action/actionTypes/ActionTypes";

const INITIAL_DEBATE_STATE={
    activeDebate:null,
    currentDebateTab:THEENUMBSS.UPCOMING_TAB,
    isUserParticipant:null,
    isLive:null 
}

const DebateReducer=(state:DebateInitialStateType=INITIAL_DEBATE_STATE,action:DebateActions)=>{   

    switch (action.type) {
        case ActionTypes.SET_ACTIVE_DEBATE:
            return {...state, activeDebate: action.payload}
            
        case ActionTypes.REMOVE_ACTIVE_DEBATE:
            return {...state, activeDetails:null}
        
        case ActionTypes.SET_UPCOMING_DEBATE_TAB :
            return {...state, currentDebateTab: THEENUMBSS.UPCOMING_TAB}
        
        case ActionTypes.SET_LIVE_DEBATE_TAB:
            return {...state, currentDebateTab: THEENUMBSS.LIVE_DEBATE_TAB}
        
        case ActionTypes.SET_IS_USER_PARTICIPANT:
            return {...state,isUserParticipant:action.payload}
        
        case ActionTypes.SET_IS_LIVE:
            return {...state,isLive:action.payload}
        default:
            return state;
    }

}
export default DebateReducer