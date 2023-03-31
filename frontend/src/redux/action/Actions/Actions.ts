import { DebateType, UserType ,} from "../../../utils/types";
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



interface AddToastRef{
    type:ActionTypes.ADD_TOAST_REF,
    payload:null | any
}
interface SetIsLoading{
    type:ActionTypes.SET_IS_LOADING,
}
interface SetNotLoading{
    type:ActionTypes.SET_IS_NOT_LOADING,
}

export type OtherActios =  AddToastRef | SetIsLoading  | SetNotLoading



// debate actions

interface  SetActiveDebate{
    type:ActionTypes.SET_ACTIVE_DEBATE,
    payload:DebateType
}

interface  RemoveActiveDebate{
    type:ActionTypes.REMOVE_ACTIVE_DEBATE,
}
interface  AddLiveDebateTab{
    type:ActionTypes.SET_LIVE_DEBATE_TAB,
}
interface  AddUpcomingDebateTab{
    type:ActionTypes.SET_UPCOMING_DEBATE_TAB,
}


interface AddIsUserParticipant{
    type:ActionTypes.SET_IS_USER_PARTICIPANT,
    payload:boolean
}

interface SetIsLiveDebate{
    type:ActionTypes.SET_IS_LIVE,
    payload:boolean
}
export type DebateActions = SetActiveDebate | RemoveActiveDebate | AddLiveDebateTab |AddUpcomingDebateTab | AddIsUserParticipant |SetIsLiveDebate