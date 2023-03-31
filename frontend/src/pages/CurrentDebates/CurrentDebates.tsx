import { useEffect, useState } from "react"
import DebateCard from "../../components/DebateRoom/DebateCard/DebateCard"
import Navbar from "../../Layouts/Navbar/Navbar"
import { getAllDebateApi, getCurrentDebateApi } from "../../utils/Api"
import { DebateType } from "../../utils/types"
import { CurrentDebatesWrapper } from "./CurrentDebates.styles"
import { useSelector } from "react-redux"
import { State } from "../../redux/reducer"
import {THEENUMBSS} from "../../utils/types"
import { bindActionCreators } from "redux"
import { actionCreators } from "../../redux/store"
import { useDispatch } from "react-redux"


const CurrentDebates = () => {
  const [theDebateArr,settheDebateArr]= useState<DebateType[] | null>(null);
const {currentDebateTab} = useSelector((state:State)=>state.debate)
const dispatch = useDispatch()
const {AddLiveDebateTab,AddUpcominggDebateTab} = bindActionCreators(actionCreators,dispatch )

  useEffect(()=>{
    handleFetchtheDebateArr()
  },[currentDebateTab  ])


  const handleChangeDebateTabtype=(type:THEENUMBSS.LIVE_DEBATE_TAB | THEENUMBSS.UPCOMING_TAB)=>{
    if(type === currentDebateTab)return ;
    if(type === THEENUMBSS.LIVE_DEBATE_TAB){
      AddLiveDebateTab()
    }else{
      AddUpcominggDebateTab()
    }
settheDebateArr(null)
  }

  const handleFetchtheDebateArr= async()=>{
    let res= null
    try {
      if(currentDebateTab===THEENUMBSS.LIVE_DEBATE_TAB){
        res= await  getCurrentDebateApi()
      }else{
        res= await  getAllDebateApi()
      }
   if(res.status===200){
    settheDebateArr(res.data.message)
   }else{
    throw Error(res.data.message)
   }
    } catch (error) {
        console.log(error)

    }
  }

  return (
    <>
        <Navbar/>
    <CurrentDebatesWrapper>
        <div className="currentDebates_bg">


        </div>
        <div className="current_debates_header">
          <h3 className="live_debates text1">{currentDebateTab ===THEENUMBSS.UPCOMING_TAB ? "UPCOMING" :"LIVE"}  <h3 className="text2">DEBATES</h3> </h3>
          <div className="tab_buttons_wrapper">
            <button className={`${currentDebateTab===THEENUMBSS.UPCOMING_TAB ?"active_tab_button":""}`} onClick={()=>{handleChangeDebateTabtype(THEENUMBSS.UPCOMING_TAB)}}>Upcoming Debates </button>
            <button className={`${currentDebateTab===THEENUMBSS.LIVE_DEBATE_TAB ? "active_tab_button":""}`} onClick={()=>{handleChangeDebateTabtype(THEENUMBSS.LIVE_DEBATE_TAB)}}>Live Debates</button>
          </div>
          </div>

        <div className="debate_wrapper_list">
          {
            theDebateArr ? theDebateArr.length >0 ? theDebateArr.map(debate=>(

              <DebateCard debate={debate} isLive={currentDebateTab ==="LiveDebates"}/>
            )): <>NOT ONGOING DEBATES</> :<p>loading..</p>
          }
     
        </div>
    </CurrentDebatesWrapper>
    </>
  ) 
}

export default CurrentDebates