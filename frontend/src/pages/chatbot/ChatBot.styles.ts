import styled from "styled-components";

export const ChatbotWrapper = styled.div`
height: calc(100vh - 80px);
display: flex;
flex-direction: column;
justify-content: space-between;
padding: 20px 0;
align-items: center;

.starter_bot_img{
    width: 200px;

}
.chat_box_message{
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    height: 100%;
    flex: 1;
}
`