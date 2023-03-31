import styled from "styled-components";
export const SelectedParticipantsWrapper = styled.div`
    display: flex;
    gap: 10px;
    flex-wrap: wrap;
    margin: 10px 0;
    .selected_participants{
        border-radius: 6px;
        padding:  5px 10px;
        display: flex;
        cursor: pointer;
        align-items: center;
        position: relative;
        gap: 5px;
        background-color: #EFF3F6;
        :hover{
            background-color: #aeaeae;
        }
        .delete_button{
           
            svg{
                font-size: 17px;
                color: #ff00004f;

                transition: all .3s;
                :hover{
                    color: red;
                }
            }
            
        }
        img{
            width: 22px;
            height: 22px;
            object-fit: cover;
            border-radius: 50%;
        }
        .username{
            font-size: 11px;
            letter-spacing: 1px;
        }
    }
`