import styled from "styled-components";

export const MessageTextWrapper = styled.div`
display: flex;
align-items: center;
gap: 10px;

.user_emoji{
    align-self: flex-end;
    .user_image{
        width: 40px;
        height: 40px;
        object-fit: cover;
        border-radius: 50%;
    }
}
.logo_img{
    width:50px;
    align-self: flex-end;
}

.message_content{

    /* max-width: 250px; */
    cursor: pointer;
    display: flex;
    flex-direction: column;
    gap: 5px;
    position: relative;
    
    
    .message_text_content{
        padding: 10px 7px;
        background: linear-gradient(45deg, rgba(174, 174, 174, 0.21), rgb(64 70 221 / 17%),rgba(174, 174, 174, 0.21));
        font-size: 12px;
        color: #1e1e1e;
        border-radius: 4px;
        border-bottom-left-radius: 0px;
        
    }
    .my_text_content{
        
        border-bottom-left-radius: 4px;
        border-bottom-right-radius: 0px;
    }
    .message_time{
        position: absolute;
        right: 0;
        top: -12px;
        color: #aeaeae;
        font-size: 8px;
        align-self: flex-end;
    }
    .options_icon{
        position: absolute;
    
        top: 0;
        bottom: 0;
        margin:auto;
        color: grey;
    }
    .my_own_option{

        left: -2rem !important;

    }
    .other_option{
        right: -2rem;
    }

}


`