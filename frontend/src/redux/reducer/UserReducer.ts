import { UserType } from "../../utils/types";
import { UserActions } from "../action/Actions/Actions";
import { ActionTypes } from "../action/actionTypes/ActionTypes";


type UserStateType= {
    data:UserType| null
}

const INITIAL_USERSTATE = {
    data:null
}

const UserReducer=(state:UserStateType = INITIAL_USERSTATE,action:UserActions)=>{

    switch (action.type) {

        case ActionTypes.ADDUSER:
            return  {...state,data:action.payload}

        case ActionTypes.REMOVEUSER:
            return { ...state,data:null}

        default:
            return   state
    }



}

export default UserReducer;