import styled from "styled-components";

export const AuthWraper=styled.div`

width:100%;
height:100%;
display:flex;
align-items: center;
justify-content: center;
background-color: rgba(255,255,255);
margin-top: 2rem;
.dinasour_image{
    position: absolute;
    right: 10%;
    top: 10%;
    opacity: 0.7;
    width: 200px;
}
.login_main_box{
    width: 95%;
    max-width: 380px    ;
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 1rem;
    align-items: center;
    .logo_img{
        width: 200px;
        object-fit: cover;
    }
    .login_welcome_text{
        text-align: center;
    
        flex-direction: column;
        align-items: center;
        display: flex;
        gap: 12px;
        .welcome_back_text{
            font-size: 20px;
            letter-spacing: 1px;
            font-weight: 100;
            color: #686de0;
        }
        .welcome_secondary_text{
            color: rgb(99, 109, 126);
            letter-spacing: 1px;
            font-size: 12px;
        }
    }
    .login_with_google_box{
        justify-content: center;
        height: 40px;
        border-radius: 3px;
        display: flex;
        align-items: center;
        gap: 1rem;

        border: 1px solid rgb(234, 239, 245);
        transition: all .6s ease;
        cursor: pointer;
        width: 100%;
        box-shadow: 0px 0px 3px white;
        :hover{
            border-color: rgb(210 216 224);
                box-shadow: 0px 0px 3px #686de0;
        }
        img{
            width: 20px;
        }
        p{
            font-size: 14px;
        }
        
    }
    .sign_in_with_email_division{
        display: flex;
        align-items: center;
        width: 100%;
        gap: 10px;

        p{
            font-size: 12px;
            color: rgb(149, 159, 178);
        }
        .left_hr ,.right_hr{
            height: 1px;
            background-color:rgb(234, 239, 245); 
            flex: 1;
    
    
    
        }
    }
.form_wrapper{
    display: flex;
    flex-direction: column;
    width: 100%;
    gap: 20px;
    align-items: center;
    .single_item{
        display: flex;
        gap: 10px;

    }

    .input_item{
        display: flex;
        flex-direction: column;
        width: 100%;
        gap: 8px;
        flex: 1;

        label{
            font-size: 13px;
            color: #686de0;
        }
        .input_element{
            border: 1px solid rgb(234, 239, 245);
            border-radius: 5px;
            height: 45px;
            width: 100%;
            outline: none;
            padding: 0 10px;
            transition: all .5s ;
            box-shadow: 0px 0px 3px white;
            font-size: 13px;
            color: rgb(99, 109, 126);
            :focus{
                box-shadow: 0px 0px 3px #686de0;
            }
            :hover{
                box-shadow: 0px 0px 3px #686de0;
            }
        }
        .error_input{
            border: none !important;
            box-shadow:#ff0000b8 0px 0px 1px 1px !important;
        }
    }
    .bottom_other_options{
        width: 100%;
        display: flex;
        justify-content: space-between;
        font-size: 14px;

        .checkbox_item{
            display: flex;
            align-items: center;
            gap: 5px;
            p{
                color: rgb(99, 109, 126);
            }
            input{
                width: 14px;
                height: 14px;
            }
        }
        .forgot_password_text{
            color: #3F51B5;
            cursor: pointer;
        }
    }
    .login_button{
        background-color: #686de0;
        width: 100%;
        border: none;
        outline: none;
        height: 42px;
        border-radius: 3px;
        font-size: 18px;
        letter-spacing: 1px;
        font-weight: 700;
        color: white;
        cursor: pointer;

    }
    .no_account_text{
        color: #3F51B5;;;
        cursor: pointer;
        font-size: 14px;
    }

}
    
}

`