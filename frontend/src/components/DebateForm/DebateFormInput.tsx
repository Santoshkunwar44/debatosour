import { useToast } from '@chakra-ui/react'
import React, { ChangeEvent, useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { State } from '../../redux/reducer'
import { createDebateApi } from '../../utils/Api'
import { DebateFormPayloadData, DebateType } from '../../utils/types'
import { DebateFormWrapper } from './DebateFormInput.styles'
import TeamForm from './TeamForm/TeamForm'
import DatePicker from "react-datepicker"
import "react-datepicker/dist/react-datepicker.css";
import { useNavigate } from 'react-router-dom'


type InstantDebateTimes="1Minute"|"2Minute"|"3Minute"

const DebateFormInput:React.FC = () => {
    const {data}  = useSelector((state:State)=>state.user)
    const [duration,setDuration]=useState<{hour:number,minute:number}>({
      hour:1,
      minute:0
    })
    const [durationType,setDurationType] =useState<"Instant Debate" | "Set Duration">("Set Duration");
    const [instantDebateTimes,setInstantDebateTimes ]=useState<InstantDebateTimes>("1Minute")
    const [startTime,setStartTime]=useState<Date>(new Date())
    const [debateForm,setDebateForm] = useState<DebateType>({
      topic:"",
      type:"",
      startTime:0,
      noOfRounds:1,
      admin:data,
      duration:0,
      endTime:0,
      teams:[
        {
          name:"",
          members:[]
        },
        {
          name:"",
          members:[]
        },
      ]
    })
    const navigate =useNavigate()
    const toast =  useToast()
    
    useEffect(()=>{
      if(durationType==="Instant Debate"){
        handleInstatDebateChange("1Minute")
      }else if(durationType==="Set Duration"){
        setDuration({
          minute:0,hour:1
        })

      }
    },[durationType])

    useEffect(()=>{
      let durationInMs = 1000 * 60 *((duration.hour  * 60 )  + (duration.minute )  )
      setDebateForm((prev)=>({
        ...prev,duration:durationInMs
      }))
    },[duration])
    const handleTeamName=(event:ChangeEvent<HTMLInputElement>,teamIndex:number)=>{
      setDebateForm((prev)=>({
        ...prev,teams:prev.teams.map((team,index)=>{
          if(index===teamIndex){
            return {...team,name:event.target.value }
          }else{
            return team
          }
        })
      }))


    }
    const handleInputChange =(event:ChangeEvent<HTMLInputElement  | HTMLSelectElement>)=>{



    let name:number | string  = event.target.name
    let value:number | string = event.target.value
    if(name === "noOfRounds" && (parseInt(value) >5 || parseInt(value) <1)){
      return;
    };
    if(name==="participantsCount" && parseInt(value)>8){
      return;
    }
    if(name ==="participantsCount" || name === "noOfRounds"){
      value = parseInt(value)
    }
      setDebateForm(prev=>({
        ...prev,[name]:value
      }))
    }
    const handleCreateDebate=async()=>{
      

      let theFormCopy ={...debateForm}
      let theTeams=theFormCopy.teams.map(team=>({...team,members:team.members.map(member=>member._id)}))

      const date = new Date(theFormCopy.startTime);

      
      // Add milliseconds to the date

      
      // Convert the updated date back to UTC format

      


      // payloadData.teams;
     let  thePayload :DebateFormPayloadData = {
      ...theFormCopy,
      teams:theTeams,
      admin:data,
      endTime:   date.getTime() + theFormCopy.duration
     }
     
    const isValid =  handleFormValidate(thePayload)
    console.log(isValid)
    let teamMebersCount = thePayload.teams.reduce((acc:number,item )=>{

      let theLen= item.members.length
      return acc+theLen



    },0)
    thePayload.participantsCount=teamMebersCount
 
    if(isValid){
      try {
        
          const res = await createDebateApi(thePayload)
          if(res.status === 200){
            toast({
              description: "Debate created successfully",
              status: 'success',
              duration: 5000,
              position:"top",
              isClosable: true,
            })
            navigate(`/debate_room/${res.data?.message?._id}`)

          }else{
            throw Error(res.data.message)
          }
      } catch (error:any) {
        toast({
          description: "Something went wrong while creating debate",
          status: 'error',
          duration: 5000,
          position:"top",
          isClosable: true,
        })
        
        console.log(error.message)
      }
    }




    }
    const handleStartDate=(value:Date)=>{
      setStartTime(value);
      let startDateInMs= new Date(value).getTime() < new Date().getTime();
      if(startDateInMs){
        toast({
          description: "Please choose the future date.",
          status: 'error',
          duration: 5000,
          position:"top",
          isClosable: true,
        })
        return 
      }

      setDebateForm((prev)=>({
        ...prev,startTime:new Date(value).getTime()
      }))
    }

    const handleInstatDebateChange=(string:InstantDebateTimes)=>{
      
      let durationInMs = 1000 * 60;
      if(string=== "1Minute"){
        durationInMs*=1
        setInstantDebateTimes("1Minute")
      }else if(string=== "2Minute"){
        setInstantDebateTimes("2Minute")
        durationInMs*=2
        
      }else {
        setInstantDebateTimes("3Minute")
        durationInMs*=3

      }
      setDebateForm(prev=>({
        ...prev,duration:durationInMs
      }))

    }

    const handleDates=(event:ChangeEvent<HTMLInputElement>,dateType:string)=>{
      let name= event.target.name
      let value= event.target.value
      
      if(dateType==="duration"){
        if(name==="hour" && 24 < parseInt(value))return;
        if(name==="minute" && 59 < parseInt(value)){
          setDuration(prev=>({...prev,minute:0}))

   
        return;
        };
        setDuration(prev=>({...prev,[name]:parseInt(value)}))
      }
      
      
    }

    const handleFormValidate=(payload:DebateFormPayloadData)=>{
      const missingField:string[] = []
      Object.keys(payload).forEach((key) => {
        const value = payload[key as keyof DebateFormPayloadData];
        if(!value){
          missingField.push(key)
        } 
      });
      // alert(`${missingField.map((key) => key).join("/") } fields are missing`)
      if(missingField.length >0){

        toast({
          description:`${missingField.map((key) => key).join("/") } fields are missing`,
          status: 'error',
          duration: 5000,
          position:"top",
          isClosable: true,
        })
        return false;
      }

      if(durationType==="Set Duration"){
        const hasMoreThanOneMember = payload.teams.every(team => team.members.length >= 1);
        if(!hasMoreThanOneMember){
          toast({
            description:`Add atleast one member.`,
            status: 'error',
            duration: 5000,
            position:"top",
            isClosable: true,
        })
        return false
      }
    }else{
      const hasOnlyOneMember = payload.teams.every(team => team.members.length === 1);
      if(!hasOnlyOneMember){
        toast({
          description:`Quick Debate should  have  one member.`,
          status: 'error',
          duration: 5000,
        position:"top",
        isClosable: true,
      })
      return false
      }
    }
    const hasTopic =payload.teams.every(team => team.name);
    if(!hasTopic){
      toast({
        description:`Team name is required.`,
        status: 'error',
        duration: 5000,
      position:"top",
      isClosable: true,
    })
    return false
    }
    if(payload.duration <= 0){
      toast({
        description:`Duration should not be  0.`,
        status: 'error',
        duration: 5000,
      position:"top",
      isClosable: true,
    })
    return false
    }
 


    return true


    }
    
  return (
    <DebateFormWrapper>
    <div className="create_debate_header">
            <h1 className='main_text'>CREATE <h1 className='secondary_main_text'>DEBATE</h1> </h1>
            </div>
            <h2 className='header_text_with_bg'>DEBATE INFORMATION</h2>
            <div className='input_box_wrappers'>

            <div className='input_basic_box'>
<div className='input_item'>

                <label className="form_label" >Topic name</label>
                <input type="text" placeholder='Topic for debate' name='topic' onChange={handleInputChange}/>
</div>
      <div className='input_item'>
      <label  className="form_label">No of rounds</label>
                <input name='noOfRounds' value={debateForm.noOfRounds} max={10} type="number" placeholder='Number of rounds' onChange={handleInputChange} />
      </div>
      <div className='input_item'>
      <label  className="form_label">Debate Type</label>
            <select  id="" name='type' onChange={handleInputChange}>
              <option selected disabled>choose debate type</option>
              <option value="British Parliamentary">British Parliamentary</option>
              <option value="World Schools format (WSDC)">World Schools format (WSDC)</option>
              
              <option value="Public forum">Public forum</option>
              <option value="Lincoln–Douglas">Lincoln–Douglas</option>

            </select>
      </div>
    
       
          </div>
          <div className="right_input_box">
          <div className='form_input_row_box input_item'>
             <label className='form_label' >Starting time </label>

        <div className='starting_time_item_box'>
      
        <div  className='starting_time_item'>
    <DatePicker
          selected={startTime}
          onChange={(date:Date) => handleStartDate(date)}
          showTimeSelect
          
          dateFormat="yyyy/MM/dd , h:mm aa"
        /> 
         
        </div >
       
      </div>
</div>
<div className='input_item'>

          <label className='form_label' >Starting time </label>
          <div className='duration_type'>
            <button className={`${durationType ==="Set Duration" && "active_duration"}`} onClick={()=>setDurationType("Set Duration")}>Set Duration </button>
            <button onClick={()=>setDurationType("Instant Debate")} className={`${durationType ==="Instant Debate" && "active_duration"}`}>Instant Debate </button>
      
    </div>
  </div>
   
 

<div className='starting_time_item input_item'>
          <p className="form_label">Duration </p> 

          {
            durationType === "Instant Debate" ?       <div className='instant_box'>
            <button className={`${instantDebateTimes==="1Minute" && "active_duration"}`}  onClick={()=>handleInstatDebateChange("1Minute")}>1 Minutes </button>
            <button className={`${instantDebateTimes==="2Minute" && "active_duration"}`} onClick={()=>handleInstatDebateChange("2Minute")}>2 Minutes  </button>
            <button className={`${instantDebateTimes==="3Minute" && "active_duration"}`} onClick={()=>handleInstatDebateChange("3Minute")}>3 Minutes  </button>
      
    </div> :
       <div className='time_box_row'>

       <div className='time_box'>
               <input  name='hour' type="number" min={"1"} max="24"  value={duration.hour}  onChange={(e)=>handleDates(e,"duration")} />
               <div className='time_place'>hr</div>
       </div>
       <div className='time_box'>
       
               <input required={true} name='minute' type="number"  min={"0"}   value={duration.minute}    onChange={(e)=>handleDates(e,"duration")} />
               <div className='time_place'>
                 min
               </div>
               </div>
                 </div>
          }
    
      
      </div>
          </div>
                </div>
                <div className='team_box_container'>

<div className='lable_row'> 
<label  className="header_text_with_bg">ADD TEAM MEMBERS</label>
<div className='team_info_text'>

<span>Members must be registed in this site</span>
<span>Maximum 4 member in a team</span>
  </div>
</div>
<div className="team_wrapper_box">

{
  debateForm.teams.map((team,index)=>  <TeamForm  debateForm={debateForm} setDebateForm={setDebateForm} handleTeamName={handleTeamName} team={team}   index={index}  key={index}/> )}
  </div>

  </div>
                <button type='submit' className='create_debate_btn' onClick={handleCreateDebate}>
                    CREATE DEBATE
                </button>
    </DebateFormWrapper>
  )
}

export default DebateFormInput