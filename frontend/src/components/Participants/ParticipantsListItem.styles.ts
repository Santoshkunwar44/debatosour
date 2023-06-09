import styled from "styled-components";

export const ParticipantsItemWrapper = styled.div`
width: 100%;
height: 50px;
display: flex;
border-radius: 5px;
gap:10px;
align-items: center;
transition: all .3s;
cursor: pointer;
padding: 7px 4px;
:hover{
    background-color: rgb(174 174 174 / 37%);
}
img{
    width: 40px;
    height: 40px;
    border-radius: 50%;
    object-fit: cover;

}
.details_box{
    display: flex;
    justify-content: flex-start ;
    flex-direction: column;
    align-items: flex-start;

    .username{
        color: rgb(14, 11, 61);
        font-size: 14px;
        text-transform: uppercase;
    }
    .email{
        font-size: 10px ;
        color: gray;
    }
}
`