import { UserType } from "../../utils/types";
import { UserActions } from "../action/Actions/Actions";
import { ActionTypes } from "../action/actionTypes/ActionTypes";


type UserStateType= null | UserType

const INITIAL_USERSTATE = null

const UserReducer=(state:UserStateType = INITIAL_USERSTATE,action:UserActions)=>{

    switch (action.type) {

        case ActionTypes.ADDUSER:
            return action.payload

        case ActionTypes.REMOVEUSER:
            return null

        default:
            return   INITIAL_USERSTATE
    }



}

export default UserReducer;