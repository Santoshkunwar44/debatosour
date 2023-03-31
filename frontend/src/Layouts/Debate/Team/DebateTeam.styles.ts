import styled from "styled-components";

type DebateTeamWrapperProp={
    isPink:boolean,
    isLive:boolean
}

export const DebateTeamWrapper = styled.div<DebateTeamWrapperProp>`
flex: 1;
gap: 10px;
display: flex;
flex-direction: column;
background:${(props)=>props.isPink ? "var(--secondary_gradient_bg)":"var(--light_gradient_bg)"} ;
padding:  2rem 1rem;
border-radius: 20px;
/* filter:${(props)=>!props.isLive? "blur(1px)":"" };
pointer-events: ${(props)=>!props.isLive ? "none":""}; */
.team_header_info{

    height: 60px;
    align-items: center;
    display: flex;
    border-radius       :4px ;
    padding: 0 10px;
    background-color:rgb(255 255 255 / 36%);;
    justify-content: space-between;
    .team_name{
        font-weight: bold;
        letter-spacing: 1px;
        text-transform: uppercase;
color: var(--dark_primary_text_color);
    }
    .vote_box{
display: flex;
align-items: center;
gap: 2rem;
    
        .vote_button{

            display: flex;
            align-items: center;
            height: 100%;
            color: white;
        padding: 5px 10px;
        border-radius: 3px;
        justify-content: center;
        gap: 5px;
            background:${(props)=>props.isPink ? "var(--secondary_color)" : "var(--primary_color)"} ;
            :hover{
                background:${(props)=>props.isPink ? "var(--secondary_color)" : "var(--primary_color)"} ;
            }
            svg{
                font-size: 1.2rem;
            }
        }
    }

}
.team_member_list{
    display: flex;
    flex-direction: column;
    gap: 0.51rem;
}



`