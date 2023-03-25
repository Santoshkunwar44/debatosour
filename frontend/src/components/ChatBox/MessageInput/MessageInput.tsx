import React from 'react'
import { MessageInputWrapper } from './MessageInput.styles'
import {BsFillSendFill} from "react-icons/bs"
const MessageInput:React.FC = () => {
  return (
    <MessageInputWrapper>
        <input className='message_input' type="text" placeholder='Ask anything to Debatasour chatbot...' />
            <div className='sent_message_box'>
                <BsFillSendFill/>

            </div>
    </MessageInputWrapper>
  )
}

export default MessageInput