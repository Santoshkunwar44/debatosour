import { useToast } from '@chakra-ui/react';
import React, { ChangeEvent, useState } from 'react'
import { DebateTeam, DebateType, UserType } from '../../../utils/types'
import SearchedParticipantsList from '../../Participants/SearchedParticipantsList/SearchedParticipantsList';
import SelectedParticipants from '../../Participants/selectedParticipants/SelectedParticipants';
import { TeamFormWrapper } from './TeamForm.styles'
import {GrClose}  from "react-icons/gr"


type TeamFormType={
    team:DebateTeam,
    handleTeamName:(event:ChangeEvent<HTMLInputElement>,teamIndex:number)=>void;
    index:number;
    setDebateForm:React.Dispatch<React.SetStateAction<DebateType>>;
    debateForm:DebateType;
}




const TeamForm:React.FC<TeamFormType> = ({team,index,handleTeamName,setDebateForm ,debateForm }) => {
  
  
  const toast = useToast()
  const handleSelectParticipants=(user:UserType,teamIndex:number)=>{

    // setDebateForm
    let debateTeams= debateForm.teams;
    let isFull = debateForm.teams[index].members.length >=4;
    if(isFull){
      toast({
        description: "Only 4 members is allowed in a team",
        status: 'error',
        duration: 3000,
        position:"top",
        isClosable: true,
    })
    return;
    }
    const exist =  debateTeams.filter(team=>team.members.find(teamMember=>teamMember._id === user._id))

      if(exist.length >0){
        toast({
            description: "This user is already in a team",
            status: 'error',
            duration: 3000,
            position:"top",
            isClosable: true,
        })
        return;
      }

   

    setDebateForm((prev)=>({


      
      ...prev,teams:prev.teams.map((team,index)=>{
        if(index===teamIndex){
         return {...team, members:[...team.members,user]}
       
        }else{
          return team
        }
      })
    }))
  }
  const [participantsSearchInput,setParticipantsSearchInput] =useState<string>("")
  const removeSelectedParticipants =(user:UserType,teamIndex:number)=>{
    let debateTeam= debateForm.teams;
  //  let filteredDebateTeam= debateTeam.map(team=>  team.members.filter(teamMember=>teamMember._id !== user._id))
   let filteredTeam = debateTeam.map(team=>({...team,members:team.members.filter(teamMember=>teamMember._id !== user._id)}))
   setDebateForm((prev)=>({
    ...prev,teams:filteredTeam
   }))
  }

  console.log(participantsSearchInput)

  return (
    <TeamFormWrapper pinkBg={index ===1 ? true :false}>

<h2>Team {index +1} </h2>
    <SelectedParticipants index={index} removeSelectedParticipants={removeSelectedParticipants} selectedParticipants={team.members}/>
        <div className='team_input_box'>

        <input  type="text" placeholder='Enter team name' name="name" onChange={(e)=>handleTeamName(e,index)}  value={team.name}  />
        <div className='search_user_input'>
        <input type="text" placeholder='Add member...'   onChange={(e)=>setParticipantsSearchInput(e.target.value)}  value={participantsSearchInput} />
       {

       participantsSearchInput.length >0 && <GrClose onClick={()=>setParticipantsSearchInput("")}/>
       }
        </div>
        </div>

<SearchedParticipantsList index={index} handleSelectParticipants={handleSelectParticipants} selectedParticipants={team.members} participantsSearchInput={participantsSearchInput}/>
    </TeamFormWrapper>
  )
}

export default TeamForm