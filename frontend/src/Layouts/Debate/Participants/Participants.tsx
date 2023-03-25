import React from 'react'
import Avatar from '@mui/material/Avatar';
import AvatarGroup from '@mui/material/AvatarGroup';
import { ParticipantsWrapper } from './Participants.styles'
import ParticipantPerson from '../../../components/DebateRoom/participantPerson/ParticipantPerson';

const Participants:React.FC = () => {
      
  return (
    <ParticipantsWrapper>

      <div className='participatants_header'>

        <img src="/images/user.jpeg" alt="participantsImg" />
        <img src="/images/user.jpeg" alt="participantsImg" />
        <div  className='participants_other'>
          24 +
          </div>
          <p className='participants_text'>participants</p>
  

      </div>
      <div className='participation_person_list'>
        <ParticipantPerson/>
        <ParticipantPerson/>
        <ParticipantPerson/>
        <ParticipantPerson/>
        <ParticipantPerson/>
        <ParticipantPerson/>
        <ParticipantPerson/>
        <ParticipantPerson/>
        <ParticipantPerson/>
        <ParticipantPerson/>
        <ParticipantPerson/>
   
        </div>
    </ParticipantsWrapper>
  )
}

export default Participants