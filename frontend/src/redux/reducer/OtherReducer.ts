import { otherStateType } from "../../utils/types"
import { OtherActios } from "../action/Actions/Actions"
import { ActionTypes } from "../action/actionTypes/ActionTypes"


const INITIAL_OTHER_STATE = {
    toastRef:null,
    isLoading:false

}

const OtherReducer=(state:otherStateType = INITIAL_OTHER_STATE,action:OtherActios)=>{

    switch (action.type) {

        case ActionTypes.ADD_TOAST_REF:
            return  {...state,toastRef: action.payload}
        case ActionTypes.SET_IS_LOADING:
            return  {...state,isLoading: true}
        case ActionTypes.SET_IS_NOT_LOADING:
            return  {...state,isLoading: false}
        default:
            return   INITIAL_OTHER_STATE
    }



}

export default OtherReducer;