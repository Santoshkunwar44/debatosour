import {  Avatar, AvatarGroup } from "@chakra-ui/react"
import { MdOutlineViewInAr } from "react-icons/md"
import { DebateCardWrapper } from "./DebateCard.styles"
import {AiOutlineUsergroupAdd} from "react-icons/ai"
import {DebateType, UserType} from "../../../utils/types"
import React, { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import moment from "moment"
import { useSelector } from "react-redux"
import { State } from "../../../redux/reducer"

  type DebateCardPropType = {
    debate:DebateType,
    isLive?:boolean,
  } 
type DebateCardState={
  timeLeft:{
    hour:string |null;
    minute:string |null;
    second:string |null;
  }
} 
const DebateCard:React.FC<DebateCardPropType> = ({debate,isLive}) => {


  const [debateCardState,setDebateCardState] =useState<DebateCardState>(
    {timeLeft:{
      hour:null,
      minute:null,
      second:null,
    }}
  )
  const [isParticipant,setIsParticipant] = useState<boolean | null>(null)
    const {data} = useSelector((state:State)=>state.user)
    const [ participants,setParticipants]=useState<UserType[]>([]);

    useEffect(()=>{

      let isParticipant  = debate.teams.some(team=>team.members.some(member=>member._id ===data?._id))
      if(!isParticipant){
        setIsParticipant(false)
      }else{
        setIsParticipant(true)
      }

    },[debate,data])


    
    useEffect(()=>{
      if(!debate)return;
      let result= debate.teams.reduce((acc:UserType[],team)=>{
        team.members.forEach((person:UserType)=>{
                  acc.push(person)
              })
             return acc 
          },[])
    setParticipants(result)
      

    },[debate])
    



    // Return a cleanup function to clear the interval when the component unmounts



  return (
    <DebateCardWrapper>
      <div className="card_top_box">
   <h5 className="debate_topic">{debate.topic}</h5> 
     <AvatarGroup size='md' max={participants.length - 1  }>
      {
        participants.map((participant) =>(
          <Avatar  referrerPolicy="no-referrer"  className="avatars" name={participant.firstName} src={participant.avatar} />
        ))
      }

</AvatarGroup>
      </div>
<div className="debate_card_bottom">

<div className="debate_more_details">
  <div  className="debate_details_left">

  <div className="info_key">
     <p>Debate Type</p>  <p className="info_value">  British Parliamentary </p>
    {/* British Parliamentary */}
    {/* ,WSDC, Public forum, Lincoln–Douglas  */}
  </div>
  <div className="info_key">
     <p>Debate Admin</p>  <p className="info_value">{ debate.admin?.firstName} { debate.admin?.lastName}</p>
  </div>
  <div className="info_key">
    <p>Number of participants</p>  <p className="info_value">{debate.participantsCount}</p> 
  </div>
  </div>
  <div className="debate_details_right">

  <div className="info_key">
    <p> Number of Rounds</p>  <p  className="info_value">
       {debate.noOfRounds}
      </p>
  </div>
  <div className="info_key started_time">
    {
      isLive ?  <>
       <p>
      Started  </p>  
       <p>{moment(debate.startTime).startOf('hour').fromNow()}</p>
      </>
     :  <>
     
      <p>
      Starts At </p>  
       <p>{moment(debate.startTime).format("LLL")}</p>
     </> 
      }
      </div>

  <div className="info_key end_time">
  <p>Ends  </p>
  {
   isLive === null ? "" : isLive ? 
  <p>with {moment(debate.endTime).fromNow() }</p>   
 : <>   <p>{moment(debate.endTime).format("LLL")}</p></>
  }

   </div>
  </div>
  {/* <span className="started_time">Started 3 hours ago</span>    */}
</div>
<div className="debate_button_box">
  <Link to={`/debate_room/${debate?._id}?audience=${true}`}>
   <button> <MdOutlineViewInAr/> <p> { isLive ? "Watch":"View Debate" } </p> </button>
  </Link>
  <Link to={`/debate_room/${debate?._id}`}>
    {
      (isLive && isParticipant) ? 
      <button>  <AiOutlineUsergroupAdd/> <p>Participate</p> </button> :""
    }
  </Link>
</div>
</div>
    </DebateCardWrapper>
  )
}

export default DebateCard