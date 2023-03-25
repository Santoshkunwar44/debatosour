import styled from "styled-components";

export const MessageInputWrapper = styled.div`

width: 80%;
height: 60px;
padding: 0 1rem;
border-radius: 10px;
background-color: #EFF3F6;
background: linear-gradient(45deg, rgba(174, 174, 174, 0.21), rgb(64 70 221 / 17%),rgba(174, 174, 174, 0.21));
display: flex;
gap: 10px;
overflow: hidden;
align-items: center;
.message_input{

    flex: 1;
    height: 100%;
    background-color: transparent;
    /* background: linear-gradient(45deg, rgba(174, 174, 174, 0.21), rgb(64 70 221 / 17%),rgba(174, 174, 174, 0.21)); */
    border: none;
    outline: none;
    color: gray;
    font-size: 14px;

    ::placeholder{
        color: #aeaeae;
        font-size: 12px;
        letter-spacing: 0.9px;
    }
}
.sent_message_box{
    height: 80%;
    width: 50px;
    display: grid;
    place-items: center;
    color: white;
    background-color: #4046DD;
    cursor: pointer;
    border-radius: 8px;
    :hover{
        background-color:  rgb(26 33 201);
    }    
    svg{
        font-size: 1.52rem;

    }
}

`