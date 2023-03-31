import styled from "styled-components";

export const DebateInfoWrapper = styled.div`

min-height: 200px;
border-radius: 10px;
background:var(--dark_gradient_bg);
margin: 2rem 0 ;
padding: 1rem;
display: flex;
flex-direction: column;
gap: 2rem;
.debate_info_header {


        display: flex;
    h1{
        flex: 1;
        font-weight: bolder;
        font-size: 20px;
        color: var(--dark_primary_text_color);
        text-transform: uppercase;
        letter-spacing: 0.1px;
        
    }
    .time_started_ago{
        padding-top: 5px;

        color: black;
        font-size: 12px;
    }
    

    
    
}
.debate_more_info{

    display: flex;
    justify-content: space-between;
    .details_info_left{
        flex: 1;
        .info_key_list{
            display: flex;
            flex-direction: column;
            gap: 0.5rem;

        .info_key{
            font-size: 13px;
            display: flex;
            gap: 10px;
           
        }
        .column_info_key{
            flex-direction: column;
            display: flex;
        }
    }
    }
    .debate_info_right{
        display: flex;
        gap: 2rem;
        .remaining_time_count{
            font-size: 1.72rem;
            font-weight: bold;
            
            color: var(--primary_color);
        }
        .remaining_text{
            color: var(--dark_primary_text_color);
            font-weight: 700;
            text-transform: uppercase;
            font-size: 13px;
            letter-spacing: 1px;
        }
        .admin_box_wrapper{
            display: flex;
            flex-direction: column;
            gap: 0.5rem;
            >p{
                font-size: 12px;
                color: var(--dark_primary_text_color);
                font-weight: 700;
                text-transform: uppercase;
        font-size: 13px;
        letter-spacing: 1px;
            }
        .admin_box{
            font-size: 12px;
            display: flex;
            gap: 10px;
            
            img{
                width: 35px;
                height: 35px;
                border-radius: 50%;
                object-fit: cover   ;
                
            }
            .admin_details_info{
                display: flex;
                flex-direction: column;
                .admin_username{
                    color: var(--primary_color);
                    text-transform: uppercase   ;
                    font-weight: 700;
                }
                .admin_email{
                    font-size: 9px;
                    color: var(--dark_primary_text_color);
                }
            }
        }
    }
}
}
.debates_team_box{
    display: flex;
    gap: 1rem;

}
`