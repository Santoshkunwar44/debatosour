import styled from "styled-components";


export const DebateFormWrapper = styled.div`

width: 100%;
display:flex;
flex-direction: column;
gap: 1rem;
padding-bottom: 1rem;
.create_debate_header{
    display: flex;
    gap: 2rem;
    align-items: center;
    margin-bottom: 1rem;
}
.team_box_container{
display: flex;
flex-direction: column;
gap: 1rem;
margin-top: 2rem;
    .team_header_text{
        color: var(--dark_primary_text_color);
        font-size: 15px;
    }
    .team_wrapper_box{
        display: flex;
        gap: 1rem;
        align-items: flex-start;
    }
}
    .input_box_wrappers{
        padding: 2rem 1rem ;
        background:var(--dark_gradient_bg);
        border-radius: 10px;
    display: flex;
    gap: 2rem;
.input_item{
    display: flex;
    flex-direction: column;
    gap: 3px;
    .team_item{
        display: flex;
        flex-direction: column;
        gap: 3px;

        h2{
            font-size: 12px;
            color: gray;
        }
        .team_input_box{
            margin-top: 5px;
            display: flex;
            flex-direction: column;
            gap: 10px;
        }
    }
    .form_label{
        font-size: 12px;
        letter-spacing: 1px;
        color: grey;
        margin-bottom: 5px;
        
        display: block;
        
    }
}
.starting_time_item{
    flex-direction: column;
    display: flex;
    gap: 5px;
    .time_name{
        font-size: 13px;
        letter-spacing: 1px;
        color: gray;
    }
    .time_box_row{
        display: flex;
        gap: 2rem ;
    }
    .time_box{
        display: flex;
        flex: 1;
        background-color:rgb(243 243 243);
        align-items: center;
        position: relative;
        input{
                background-color: transparent !important;
                color: gray;
        }
        .time_place{
            left: 1.7rem;
            flex: 1 ;
            position: absolute;
            color: gray;
            font-size: 12px;
            letter-spacing: 1px;
        }
    }
}
    .input_basic_box{
        display: flex;
        flex: 1;
        flex-direction: column;
        gap: 1rem;
        .form_input_row_box{
    width: 100%;
    display: flex;
    flex-direction: column;
    gap:10px;

    
}

    }

    .right_input_box{
        flex: 1;
        display: flex;
        gap: 1rem;
        flex-direction: column;
        .duration_type{
            display: flex;
            gap: 5px;
            height: 38px;
            align-items: center;
            button{
                height: 100%;
                width: 50%;
                border-radius: 3px;
                font-size: 11px;
                letter-spacing: 1px;
                opacity: 0.9;
                border:none;
                font-weight: bold;
                text-transform: uppercase;
                border: 2px solid var(--primary_color);
                color: black;
                background-color: rgb(251, 251, 251);
                opacity: 0.6;
                :hover{
                    background-color: var(--primary_color);;
                }
            }
            .active_duration{
                scale: 1;
                opacity: 1;
                background-color: var(--primary_color);;
                border: none;
                color: white;
                :hover{
                    background-color:rgb(56 64 239);
                }
            }
        }
        .starting_time_item{
        display: flex;
        gap: 5px;
      
            .instant_box{
            display: flex;
            gap: 5px;
            height: 38px;
            align-items: center;
            button{
                height: 100%;
                width: 50%;
                border-radius: 3px;
                font-size: 8px ;
                letter-spacing: 1px;
                opacity: 0.9;
                border:none;
                font-weight: bold;
                text-transform: uppercase;
                border: 2px solid var(--primary_color);
                color: black;
                background-color: rgb(251, 251, 251);
                opacity: 0.6;
                :hover{
                    background-color: var(--primary_color);;
                }
            }
            .active_duration{
                scale: 1;
                opacity: 1;
                background-color: var(--primary_color);;
                border: none;
                color: white;
                :hover{
                    background-color:rgb(56 64 239);
                }
            }
            }
            .time_name{
                font-size: 10px;
                letter-spacing: 1px;
                margin-bottom: 4px;

                color: gray;

            }
            .duration_input{
                display: flex;
                gap: 10px;
                height: 40px;
                .time_box{
                    background-color:rgb(243 243 243);
                    display: flex;
                    align-items: center;
                }
                input{
                    height: 90%;


                }
                div{
                    padding: 0 5px;
                    color: grey;
                    font-size: 10px;
                }
            }
            flex:1;
    }
    }
}
.participants_list{
    display: flex;
    flex-direction:column;
    margin-top: 10px;
    gap: 10px;
    height: auto;
    max-height: 300px;
    overflow-y: scroll;
    text-align: center;

}


input,select{
            height: 50px;
            width:100%;
            border-radius: 4px;
            font-size: 14px;
            padding-left: 8px;
            outline: none;
            letter-spacing: 1px;
            border: none;
            color:rgb(101 112 124);
            background-color:rgb(251 251 251);
            /* box-shadow: 0px 0px 2px rgb(64, 70, 221); */
            option{
                height: 40px;
            }
            ::placeholder{
                font-size: 12px;
                letter-spacing: 0.8px;
                color: rgb(118 118 118 / 73%);
            

            }

}

.lable_row{
    display: flex;
    justify-content: space-between;
    .team_info_text{
        display: flex;
        flex-direction: column;
        font-family: 'Catamaran', sans-serif;
        font-weight: bold;
    }
    span{
        font-size: 11px;
        color: gray;
        color: #673AB7;
        letter-spacing: 0.71px;

    }

}
.create_debate_btn{
    background-color: rgb(64, 70, 221);
    height: 40px;
    width: fit-content;

    align-self: flex-end;
    border-radius: 5px;
    padding: 0 1rem;
    color: white;
    font-size: 12px;
    letter-spacing: 1px;
    :disabled{
        opacity: 0.8;
        pointer-events:none;
    }
    :hover{
        background-color:  rgb(26 33 201);
    }
}

`