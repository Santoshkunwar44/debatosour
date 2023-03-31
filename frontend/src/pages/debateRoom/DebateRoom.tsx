import React ,{useEffect ,useState} from 'react'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import {  useParams, useSearchParams } from 'react-router-dom'
import { bindActionCreators } from 'redux'
import LiveChat from '../../components/DebateRoom/LiveChat/LiveChat'
import DebateInfo from '../../Layouts/Debate/DebateInfo/DebateInfo'
import DebateScreenBox from '../../Layouts/Debate/DebateScreenBox/DebateScreenBox'
import Participants from '../../Layouts/Debate/Participants/Participants'
import Navbar from '../../Layouts/Navbar/Navbar'
import { actionCreators, State } from '../../redux/store'
import { getDebateByIdApi } from '../../utils/Api'
import { DebateRoomWrapper } from './DebateRoom.styles'
import DebateAction from '../../components/DebateRoom/DebateAction/DebateAction'
import { WatchType } from '../../utils/types'

const DebateRoom:React.FC = () => {


  const debateId = useParams().debateId
  const dispatch =useDispatch()
  const {AddActiveDebate ,SetIsUserParticipant ,SetRoomIsLiveOrNot} = bindActionCreators(actionCreators,dispatch)
  const {activeDebate ,isUserParticipant ,isLive}  = useSelector((state:State)=>state.debate)
  const {data} = useSelector((state:State)=>state.user);
  const [searchParams,setSearchParams] =useSearchParams();
  const [watchType,setWatchType] =useState<WatchType | null>(null)


  // console.log( Boolean(searchParams.get('audience')))
useEffect(()=>{
  if(Boolean(searchParams.get('audience'))){
    setWatchType("AUDIENCE")
  }else{
    setWatchType("PARTICIPANT")
  }
},[searchParams])

  useEffect(()=>{
    if(!debateId)return;
    fetchDebateById();
  },[debateId]) 
  useEffect(()=>{
    if(!activeDebate)return ;
  let isParticipant  =    activeDebate?.teams.some(team=>team.members.some(member=>member._id ===data?._id))
  let now = new Date().getTime();
  if( now < activeDebate?.startTime){

SetRoomIsLiveOrNot(false)
}else{
    SetRoomIsLiveOrNot(true
      )
  }
  if(!isParticipant){
    SetIsUserParticipant(false)
  }else{
    SetIsUserParticipant(true)
  }
  },[activeDebate,data])
  
  const fetchDebateById=async()=>{
    if(!debateId) return ;
    try {
      const res = await getDebateByIdApi(debateId) 
      if(res.status !==200 )throw Error(res.data.message) 
      AddActiveDebate(res.data.message[0]);
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <>
    <Navbar/>
    <DebateRoomWrapper isLive={ isLive ?  true : false}>
    <div className='debate_room_top_header'>
      <h1 className='Debate_room_main_text'>
        <p className='main_text_one'>{isLive ? "ENJOY": "NOT STARTED"}</p> DABATEE  </h1>
   
      <div className='round_text'>
        ROUND 0/{activeDebate?.noOfRounds}
      </div>
    </div>
        <DebateScreenBox/>
     {
      isUserParticipant=== null ? ".." : (isUserParticipant && isLive && watchType === "PARTICIPANT" ) ?  <DebateAction/>:""
     }   
        <DebateInfo />
        <div className='debate_bottom_container'>
                <Participants/>
                <LiveChat/>
        </div>
    </DebateRoomWrapper>

    </>
  )
}

export default DebateRoom