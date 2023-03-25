import React from 'react'
import { DebatorViewWrapper } from './DebatorView.styles'

type DebatorsViewTypes = {
  username:string;
  profileImg:string;
  isSpeaking?:boolean
}
const DebatorView:React.FC<DebatorsViewTypes> = ({username,profileImg ,isSpeaking}) => {
  return (
    <DebatorViewWrapper style={{boxShadow: isSpeaking ? "rgb(64 70 221 / 72%) 1px 1px 6px 2px":""}}>
        <img  className='debator_img' src={profileImg} alt="userImg" />
        <p className='debator_name'> {username} </p>
    </DebatorViewWrapper>
  )
}

export default DebatorView