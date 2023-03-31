import React from 'react'
import MessageInput from '../../ChatBox/MessageInput/MessageInput'
import MessageText from '../../ChatBox/MessageText'
import { LiveChatWrapper } from './LiveChat.styles'

const LiveChat:React.FC = () => {
    
  return (
    <LiveChatWrapper >
      <div className="live_chat_header">
        
    <h2>LIVE CHATS</h2>
      </div>
      <div className='live_chat_message_list'>

        <MessageText text='Hello i like this debate . The right one is Awesome'/>
        <MessageText text='Hello i like this debate . '/>
        <MessageText own={true} text='Hello guys i am in '/>


      </div>
      <MessageInput isLiveChat={true}/>
    </LiveChatWrapper>
  )
}

export default LiveChat