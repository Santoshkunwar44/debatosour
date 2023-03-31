import React from 'react'
import { MessageInputWrapper } from './MessageInput.styles'
import {BsFillSendFill} from "react-icons/bs"
type MessageInputPropType={
  isLiveChat?:boolean ;
}
const MessageInput:React.FC<MessageInputPropType> = ({isLiveChat}) => {
  return (
    <MessageInputWrapper  isLiveChat={isLiveChat ? true :false} >
        <input className='message_input' type="text" placeholder={` ${!isLiveChat ? "Ask anything to Debatasour chatbot..." :"Say something in live chat..."}`} />
            <div className='sent_message_box'>
                <BsFillSendFill/>

            </div>
    </MessageInputWrapper>
  )
}

export default MessageInput