import styled from "styled-components";
export const ParticipationPersonWrapper= styled.div`

display: flex;
gap: 10px;
align-items: center;
border-radius: 5px;
cursor: pointer;
transition: all .5s;
padding:5px;
background:linear-gradient(45deg, rgba(174, 174, 174, 0.11), rgb(64 70 221 / 8%));
 backdrop-filter: blur(45px);
    :hover{
        background:linear-gradient(45deg, rgba(174, 174, 174, 0.21), rgb(64 70 221 / 12%));
    }
.participation_person_img{
    width: 35px;
    height: 35px;
    border-radius: 50%;
    object-fit: cover;
}
p{
    font-size: 14px;
}
`