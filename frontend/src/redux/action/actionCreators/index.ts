import { UserType } from "../../../utils/types";
import { UserActions } from "../Actions/Actions";
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