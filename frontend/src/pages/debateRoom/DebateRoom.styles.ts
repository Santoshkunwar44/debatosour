import styled from "styled-components";

type DebateRoomWrapperType={
    isLive:boolean;
}
export const DebateRoomWrapper =styled.div<DebateRoomWrapperType>`
    width: 100%;
    padding: 2rem;
    height: 100%;
    display: flex;
    flex-direction: column;
    gap: 2rem;
    filter:${(props)=>!props.isLive ? "blur(1.4px)" :""};
    .debate_room_top_header{
        display: flex;
        align-items: center;
        justify-content: space-between;
        .Debate_room_main_text{
            font-weight: bold;
            font-size: 2.3rem;
            display: flex;
            align-items: center;
            gap: 10px;
            position: relative;
            width: fit-content;
            
            ::after{
                content: "";
    bottom: 0;
    width: 100%;
    right: 0;

    position: absolute;
    height: 4px;
    border-radius: 10px;
    background:linear-gradient(45deg, rgba(174, 174, 174, 0.11), rgba(174, 174, 174, 0.21) , rgb(64 70 221 / 52%), rgb(64 70 221 / 62%));

    
}
.main_text_one{
    color: var(--primary_color);
}
}
.round_text{
    color: var(--dark_primary_text_color);
    font-size: 16px;
    height: 30px;

    display: flex;
    align-items: center;
    font-weight: bold;
    background-color: var(--dark_primary_text_color);
    color: white;
    padding: 0 10px;
    border-radius:4px;
}
}
    .debate_bottom_container{
            height: 100vh;
        padding-top: 2rem;
        display: flex;
        gap: 1rem;
    }
`