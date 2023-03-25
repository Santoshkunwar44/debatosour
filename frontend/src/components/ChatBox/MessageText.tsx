import { MessageTextWrapper } from "./MessageText.styles"
import {useState} from "react"
import {FiMoreVertical} from "react-icons/fi"


type MessageTextProps={
    text:string;
    own?:boolean

}

const MessageText:React.FC<MessageTextProps> = ({text,own}) => {

  const [isHovered,setIsHovered] =useState<Boolean>(false )
  return (
    <MessageTextWrapper onMouseLeave={()=>setIsHovered(false)} onMouseOver={()=>setIsHovered(true)} className="own" style={{marginLeft:own ? "auto" :"", flexDirection : own ? "row-reverse":"row"}}>
 <div  className="user_emoji">

  { 
    own ? <img className="user_image" src="/images/user.jpeg" alt="userImg" /> :  <p>🤖</p> 
  } 


 </div>
   <div className="message_content">
{
  isHovered &&  <>
  
  <span className="message_time">3:00 AM</span>
  <FiMoreVertical className={`options_icon ${own? "my_own_option":"other_option"}`}/>
  </>
}
    
      

   

 
     <p className={`message_text_content ${own ? "my_text_content":""}` }>
            {text} 
        </p>

    </div>   
    </MessageTextWrapper>
  )
}

export default MessageText