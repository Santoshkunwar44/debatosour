import styled from "styled-components";


type DebatorViewWrappertype={
    isSpeaking:boolean,
    teamOne:boolean,
}

export const DebatorViewWrapper = styled.div<DebatorViewWrappertype>`
flex: 1;
min-width: 200px;
padding: 1rem ;
display: flex;
max-height: 250px;
align-items: center;
justify-content: center;
flex-direction: column;
gap: 1rem;
background: ${(props)=>props.teamOne ? "var(--light_gradient_bg)":"var(--secondary_gradient_bg)"} ;
backdrop-filter: blur(45px);
border-radius: 10px;
cursor: pointer;
transition: all .4s;

:hover{
    scale: 1.03 ;

    /* linear-gradient(45deg, rgba(174, 174, 174, 0.21), rgb(64 70 221 / 17%),rgba(174, 174, 174, 0.21));; */
    /* linear-gradient(45deg,#f709af29,rgb(183 183 195 / 31%),#f709af45),#f709af05; */
background: ${(props)=>props.teamOne ? "linear-gradient(45deg, rgba(174, 174, 174, 0.21), rgb(64 70 221 / 24%), rgb(174 174 174 / 28%));" :"linear-gradient(45deg,#f709af29,rgb(183 183 195 / 31%),#f709af45),#f709af05; "} ;
filter: blur(0px);

}
.debator_img{
    width: 80px;
    height: 80px;
    border-radius: 50%;
    border: 4px  solid rgb(64 70 221 / 70%);
    padding: 5px;
    object-fit: cover;

}
.debator_name{
    font-size: 12px;
    color: rgba(64, 70, 221, 0.7);
    text-transform: uppercase;
    font-weight: 600
    ;
}
.action_button_box{
    display: flex;
    width:100%;
    justify-content: flex-end;
    position: absolute;
    bottom: 10px;

    padding: 0 10px;
    
    svg{
        color: rgba(64, 70, 221, 0.7);
    }
}
`