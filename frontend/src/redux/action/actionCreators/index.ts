import { DebateType, UserType } from "../../../utils/types";
import { DebateActions, OtherActios, UserActions } from "../Actions/Actions";
import { ActionTypes } from "../actionTypes/ActionTypes";
import {Dispatch} from "redux"


export const AddLoggedInUser =(user:UserType)=>{

    return (dispatch : Dispatch<UserActions>)=>{
        dispatch({
            type:ActionTypes.ADDUSER,
            payload:user
        })
    }
}
export const RemoveLoggedInUser =()=>{
    return (dispatch : Dispatch<UserActions>)=>{
        dispatch({
            type:ActionTypes.REMOVEUSER,
        })
    }
}
export const AddToastRef =(toastRef:any)=>{
    return (dispatch : Dispatch<OtherActios>)=>{
        dispatch({
            type:ActionTypes.ADD_TOAST_REF,
            payload:toastRef
        })
    }
}
export const setIsLoading =(isLoading :boolean)=>{
    return (dispatch : Dispatch<OtherActios>)=>{
        if(isLoading){

            dispatch({
                type:ActionTypes.SET_IS_LOADING,
            })
        }else{
            dispatch({
                type:ActionTypes.SET_IS_NOT_LOADING,
            })

        }
    }
}
export const AddActiveDebate =(debate:DebateType)=>{
    return (dispatch : Dispatch<DebateActions>)=>{
        dispatch({
            type:ActionTypes.SET_ACTIVE_DEBATE,
            payload:debate
        })
    }
}
export const removeActiveDebate =()=>{
    return (dispatch : Dispatch<DebateActions>)=>{
        dispatch({
            type:ActionTypes.REMOVE_ACTIVE_DEBATE,
        })
    }
}
export const AddLiveDebateTab =()=>{
    return (dispatch : Dispatch<DebateActions>)=>{
        dispatch({
            type:ActionTypes.SET_LIVE_DEBATE_TAB,
        })
    }
}
export const AddUpcominggDebateTab =()=>{
    return (dispatch : Dispatch<DebateActions>)=>{
        dispatch({
            type:ActionTypes.SET_UPCOMING_DEBATE_TAB,
        })
    }
}


export const SetIsUserParticipant=(payload:true|false)=>{
    return (dispatch : Dispatch<DebateActions>)=>{
        dispatch({
            type:ActionTypes.SET_IS_USER_PARTICIPANT,
            payload
        })
    }
}

export const SetRoomIsLiveOrNot=(payload:true|false)=>{
    return (dispatch : Dispatch<DebateActions>)=>{
        dispatch({
            type:ActionTypes.SET_IS_LIVE,
            payload
        })
    }
}