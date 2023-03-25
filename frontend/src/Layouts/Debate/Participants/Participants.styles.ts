import styled from "styled-components";

export const ParticipantsWrapper = styled.div`

background: linear-gradient(45deg, rgb(174 174 174 / 5%), rgb(64 70 221 / 6%), rgba(174, 174, 174, 0.21));
 backdrop-filter: blur(45px);
 flex: 3;
 height: 100%;
 padding: 10px;
 display: flex;
 flex-direction: column;
 gap: 1rem;
 
 border-radius: 10px;
.participatants_header{
    width: 100%;
    display: flex;
    align-items: flex-start;
    align-items: center;
    background-color: #ffffff;

    padding: 10px ;
    border-radius: 8px;

    .participants_other{
        width: 40px;
        height: 40px;
        background-color: #aeaeae;
        border-radius: 50%;
        display: grid;
        place-items: center;
        font-size: 7px;
        color:white;
        border: 3px solid  rgb(64, 70, 221);;
        transform: translateX(-24px);
        
    }
    .participants_text{
        letter-spacing: 1px;
        text-transform: capitalize;
        color: rgb(64, 70, 221);;
        font-weight: 700;
        font-size: 14px;
    }
    img{
        width: 40px;
        height: 40px;
        border-radius: 50%;
        border: 3px solid  rgb(64, 70, 221);;
            object-fit: cover;
        :nth-of-type(2){
            transform: translateX(-14px);
        }
        :nth-of-type(3){
            transform: translateX(-28px);
        }
            }
}

.participation_person_list{
    display: flex;
    flex-direction: column;
    gap: 7px;
 
}

`