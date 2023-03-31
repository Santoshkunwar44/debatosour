import React from 'react'
import { UserType } from '../../../utils/types'
import { SelectedParticipantsWrapper } from './SelectedParticipants.styles'
import {IoMdClose} from "react-icons/io"
type SelectedParticipantsType={
    selectedParticipants:UserType[];
    index:number;
    removeSelectedParticipants:(user:UserType,teamIndex:number) => void;
}


const SelectedParticipants:React.FC<SelectedParticipantsType> = ({selectedParticipants,removeSelectedParticipants ,index}) => {
  return (
    <SelectedParticipantsWrapper>
{
  selectedParticipants.map(person=>(

          <div key={person._id} className="selected_participants">

            <img src={person.avatar} alt="avatarImg" />
            <div className="username">{person.firstName}</div>
            <div onClick={()=>removeSelectedParticipants(person,index)} className='delete_button'>
<IoMdClose/> 
            </div>
          </div>
  ))
}
        

    </SelectedParticipantsWrapper>
  )
}

export default SelectedParticipants