import React from 'react'
import LiveChat from '../../components/DebateRoom/LiveChat/LiveChat'
import DebateScreenBox from '../../Layouts/Debate/DebateScreenBox/DebateScreenBox'
import Participants from '../../Layouts/Debate/Participants/Participants'
import Navbar from '../../Layouts/Navbar/Navbar'
import { DebateRoomWrapper } from './DebateRoom.styles'

const DebateRoom:React.FC = () => {
  return (
    <>
    <Navbar/>
    <DebateRoomWrapper>

        <DebateScreenBox/>
        <div className='debate_bottom_container'>
                <Participants/>
                <LiveChat/>
                

        </div>
    </DebateRoomWrapper>

    </>
  )
}

export default DebateRoom