import React, { useState } from "react"
import { DebateActionWrapper } from "./DebateAction.styles"
import {BsFillMicFill, BsFillMicMuteFill} from "react-icons/bs"
import {FcEndCall} from "react-icons/fc"
import {HiSpeakerWave} from "react-icons/hi2"
type DebateActionStateType={

  isMute:boolean,

} 
const DebateAction:React.FC = () => {

  const [debateActionState,setDebateActionState]=useState<DebateActionStateType>({
    isMute:true
  })

  return (
    <DebateActionWrapper>
      <HiSpeakerWave/>
      {

      
!debateActionState.isMute ? <BsFillMicFill className="activeMic"/> :<BsFillMicMuteFill/> 
      }
      <FcEndCall/>
      </DebateActionWrapper>
  )
}

export default DebateAction