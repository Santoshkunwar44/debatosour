import styled from "styled-components";
export const DebatorViewWrapper = styled.div`
flex: 1;
min-width: 200px;
display: flex;
max-height: 250px;
align-items: center;
justify-content: center;
flex-direction: column;
gap: 1rem;
background:linear-gradient(45deg, rgba(174, 174, 174, 0.21), rgb(64 70 221 / 12%));
backdrop-filter: blur(45px);
border-radius: 10px;
cursor: pointer;
transition: all .2s;
:hover{
    scale: 1.05;

    /* background:linear-gradient(45deg, rgba(174, 174, 174, 0.21), rgb(64 70 221 / 12%)); */
background: linear-gradient(45deg, rgba(174, 174, 174, 0.21), rgb(64 70 221 / 17%),rgba(174, 174, 174, 0.21));;
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
`