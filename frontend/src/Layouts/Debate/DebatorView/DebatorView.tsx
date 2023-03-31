import React from 'react'
import { BsFillMicFill, BsFillMicMuteFill } from 'react-icons/bs'
import {  TeamNumber, TeamTypeByNumber, UserType } from '../../../utils/types'
import { DebatorViewWrapper } from './DebatorView.styles'

type DebatorsViewTypes = {
debator:UserType,
isSpeaking?:boolean,
teamNumber?:TeamTypeByNumber
}
const DebatorView:React.FC<DebatorsViewTypes> = ({debator ,isSpeaking ,teamNumber }) => {


  return (
    <DebatorViewWrapper teamOne={teamNumber===TeamNumber.TEAMONE}   isSpeaking={isSpeaking ? true :false}   >
        <img  className='debator_img' src={debator.avatar} alt="userImg" />
        <p className='debator_name'> {debator.firstName} </p>
        <div className='action_button_box'>
      {
        isSpeaking  ? <BsFillMicFill/> :    <BsFillMicMuteFill/>
      }
         
      

        </div>
    </DebatorViewWrapper>
  )
}

export default DebatorView