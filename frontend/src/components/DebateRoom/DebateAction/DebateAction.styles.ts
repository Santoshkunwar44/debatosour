import styled from "styled-components";

export const DebateActionWrapper = styled.div`

width:30%;
height:50px;
border-radius:3px;
display:flex;
justify-content:center;
backdrop-filter:blur(20px);
margin:auto;
gap:2rem;
background:var(--primary_secondary_gradient_bg);
align-items:center;

svg{
    font-size:1.52rem;
    transition:all .3s;
    color:#808080b0;
    cursor:pointer  ;
    color: var(--primary_color);
    :hover{
        scale:1.3;
        color:    var(--primary_color);;
    }

}



`