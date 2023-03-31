import React ,{useEffect ,useState} from 'react'
import { ParticipantsWrapper } from './Participants.styles'

import { State } from '../../../redux/reducer';
import { useSelector } from 'react-redux';
import { UserType } from '../../../utils/types';
import { Avatar, AvatarGroup } from '@chakra-ui/react';
import ParticipantPerson from '../../../components/DebateRoom/participantPerson/ParticipantPerson';

const Participants:React.FC = () => {
  const {activeDebate} = useSelector((state:State)=>state.debate);

  const [ participants,setParticipants]=useState<UserType[] | null>(null);

    useEffect(()=>{
      if(!activeDebate)return;
      let result= activeDebate.teams.reduce((acc:UserType[],team)=>{
        team.members.forEach((person:UserType)=>{
                  acc.push(person)
              })
             return acc 
          },[])
    setParticipants(result)
      

    },[activeDebate])


  return (
    <ParticipantsWrapper>

      <div className='participatants_header'>
{
  participants &&  <>
      <p>Participants</p>
    <AvatarGroup size='md' max={participants?.length -1}>
      {
     participants ?   participants.map((participant) =>(
          <Avatar  referrerPolicy="no-referrer"  className="avatars" name={participant.firstName} src={participant.avatar} /> 
        )):""
      }
</AvatarGroup>
  </>
}
    


      </div>
      <div className='participation_person_list'>
      {
          participants  ? participants?.map(participant =>(
            <ParticipantPerson key={participant._id} person={participant}/>
             
          )) :<div className='loading'></div>

        }
        
   
        </div>
    </ParticipantsWrapper>
  )
}

export default Participants