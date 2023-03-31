import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import {Navigate, Route , Routes} from "react-router-dom"
import { bindActionCreators } from "redux";
import { AppWrapper, GlobalWrapper } from "./App.styles";
import Signup from "./pages/Auth/Signup/Signup";
import ChatBot from "./pages/chatbot/ChatBot";
import DebateRoom from "./pages/debateRoom/DebateRoom";
import Home from "./pages/home/Home";
import { State } from "./redux/reducer";
import { actionCreators } from "./redux/store";
import {useEffect} from "react"
import { getLoggedInUserApi } from "./utils/Api";
import Login from "./pages/Auth/Login/Login";
import { Loader } from "./Layouts/Loader/Loader";
import CurrentDebates from "./pages/CurrentDebates/CurrentDebates";
import CreateDebate from "./pages/CreateDebate/CreateDebate";

function App() {
  const {data} = useSelector((state:State)=>state.user)
  const {isLoading} = useSelector((state:State)=>state.other)




  const dispatch =useDispatch()
  const {AddLoggedInUser ,setIsLoading} =  bindActionCreators(actionCreators,dispatch )

  useEffect(()=>{
    fetchCurrentUser()
  },[])
  
  const  fetchCurrentUser=async()=>{
    setIsLoading(true)
    try {
      const res= await getLoggedInUserApi()
      if(res.status===200) {
        AddLoggedInUser(res.data.message)
        
        setIsLoading(false)
      }else{
        throw Error("You are not logged In")
      }
    } catch (error:any) {
      setIsLoading(false)
      console.log(error?.message) 
    }

  }

  return (
    <>
    <GlobalWrapper/>
    <AppWrapper>
      {
        isLoading && <Loader/>
        
        
      }
      <Routes>
      <Route path="" element={<Home/>} />
      <Route path="/live_debates" element={<CurrentDebates/>} />
      <Route path="/chatbot" element={<ChatBot/>} />
      <Route path="/create" element={<CreateDebate/>} />
      <Route path="/login" element={ data ? <Navigate to={"/"} /> : <Login/>} />
      <Route path="/signup" element={data ? <Navigate to={"/"} /> : <Signup/>} />
      <Route path="/debate_room/:debateId" element={<DebateRoom/>} />
      </Routes>

    </AppWrapper>
      </>
  );
}

export default App;
