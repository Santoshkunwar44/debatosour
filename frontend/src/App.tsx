import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import {Navigate, Route , Routes} from "react-router-dom"
import { bindActionCreators } from "redux";
import { AppWrapper } from "./App.styles";
import Signup from "./pages/Auth/Signup/Signup";
import ChatBot from "./pages/chatbot/ChatBot";
import DebateRoom from "./pages/debateRoom/DebateRoom";
import Home from "./pages/home/Home";
import { State } from "./redux/reducer";
import { actionCreators } from "./redux/store";
import {useEffect} from "react"
import { getLoggedInUserApi } from "./utils/Api";
import Login from "./pages/Auth/Login/Login";

function App() {
  const User = useSelector((state:State)=>state.user)
  const dispatch =useDispatch()
  const {AddLoggedInUser} =  bindActionCreators(actionCreators,dispatch )

  useEffect(()=>{
    fetchCurrentUser()
  },[])
  
  const  fetchCurrentUser=async()=>{

    try {
        const res= await getLoggedInUserApi()
        if(res.status===200) {
          AddLoggedInUser(res.data.message)
        }else{
          throw Error("You are not logged In")
        }
    } catch (error:any) {
      console.log(error?.message) 
    }

  }
 
    console.log(User)

  return (
    <AppWrapper>
      <Routes>
      <Route path="" element={<Home/>} />
      <Route path="/chatbot" element={<ChatBot/>} />
      <Route path="/login" element={ User ? <Navigate to={"/"} /> : <Login/>} />
      <Route path="/signup" element={User ? <Navigate to={"/"} /> : <Signup/>} />
      <Route path="/debate_room/:debateId" element={<DebateRoom/>} />
      </Routes>

    </AppWrapper>
  );
}

export default App;
