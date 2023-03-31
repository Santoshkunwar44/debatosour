import styled from "styled-components";
  type TeamFormWrapperType={
    pinkBg:boolean
  }
export const TeamFormWrapper = styled.div<TeamFormWrapperType>`
width: 100%;
background: ${(props)=>props.pinkBg ? "var(--secondary_gradient_bg)" :"var(--light_gradient_bg)"};
border-radius: 10px;
padding: 1rem;
h2{
  text-transform: uppercase;
    font-weight: bold;
    letter-spacing: normal;
    margin-bottom: 10px;
    color:${(props)=>props.pinkBg ? "var(--secondary_color)" :"var(--primary_color)"};
}
.team_input_box{
    display: flex;
    flex-direction: column;
    gap: 10px;
    width: 100%;
    .search_user_input{
      display: flex;
      align-items: center;
      background-color: rgb(251, 251, 251);
      padding-right: 10px;
      input{
        background-color: transparent;
      }
      svg{
        cursor: pointer;
        font-size: 12px;
        :hover{

          scale: 1.2;
        }
      }
    }
}

`