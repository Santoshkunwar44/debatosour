import React from 'react'
import MessageText from '../../ChatBox/MessageText'
import { LiveChatWrapper } from './LiveChat.styles'

const LiveChat:React.FC = () => {
    
  return (
    <LiveChatWrapper>
      <div className="live_chat_header">

        Live Chat 
      </div>
      <div className='live_chat_message_list'>

        <MessageText text='Hello i like this debate . The right one is Awesome'/>
        <MessageText text='Hello i like this debate . '/>
        <MessageText own={true} text='Hello guys i am in '/>
        <MessageText text='He played well'/>
        <MessageText text='He was the only who wined yesterdays debate.'/>
        <MessageText own={true} text='Oh is it ? Event i think so'/>
        <MessageText text='Yess it  is'/>

        <MessageText text='Hello i like this debate . The right one is Awesome'/>
        <MessageText text='Hello i like this debate . '/>
        <MessageText text='He played well'/>
        <MessageText text='He was the only who wined yesterdays debate.'/>
        <MessageText own={true} text='Hello guys i am in '/>
        <MessageText own={true} text='Oh is it ? Event i think so'/>
        <MessageText text='Yess it  is'/>

        <MessageText text='Hello i like this debate . The right one is Awesome'/>
        <MessageText text='Hello i like this debate . '/>
        <MessageText own={true} text='Hello guys i am in '/>
        <MessageText text='He played well'/>
        <MessageText text='He was the only who wined yesterdays debate.'/>
        <MessageText own={true} text='Oh is it ? Event i think so'/>
        <MessageText text='Yess it  is'/>

      </div>
    </LiveChatWrapper>
  )
}

export default LiveChat