import styled from "styled-components";

export const LiveChatWrapper = styled.div`

flex: 9;
height: 100%;
 backdrop-filter: blur(45px);
 border-radius: 10px;
 display: flex;
 flex-direction: column;
 gap: 2rem;
 .live_chat_header{
    background-color: rgb(174 174 174 / 21%);
 backdrop-filter: blur(45px);
 height: 60px;
 border-radius: 10px;
 display: flex;
 align-items: center;
 padding: 0 1rem;

 }
.live_chat_message_list{
    padding: 1rem 10px;
    border-radius: 20px;
    background: linear-gradient(45deg, rgb(174 174 174 / 5%), rgb(64 70 221 / 6%), rgba(174, 174, 174, 0.21));
    display: flex;
    flex-direction: column;
    gap: 1rem;

}
`