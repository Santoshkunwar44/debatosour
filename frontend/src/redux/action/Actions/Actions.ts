import { UserType } from "../../../utils/types";
import { ActionTypes } from "../actionTypes/ActionTypes";

// USER ACTIONS

interface AddUserAction{
    type:ActionTypes.ADDUSER,
    payload:UserType,
}
interface RemoveUserAction{
    type:ActionTypes.REMOVEUSER,
}

export type UserActions =  AddUserAction | RemoveUserAction;

