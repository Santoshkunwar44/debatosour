import styled from "styled-components";

export const NavbarWrapper =styled.div`

width: 100%;
height: 100%;
background-color: rgb(255,255,255);
height: 80px;
display: flex;
align-items: center;
justify-content: space-between;
padding: 0 10px;
.nav_logo_box{
    display: flex;
    align-items: center;
    gap: 10px;
     img{
        width: 125px;
    }
    P{
        color: #686de0;
        font-weight: 800;
        font-size: 20px;

    }
    
}

.other_button_box{
    display: flex;
    gap:2rem;

.nav_list{
    display: flex;
    gap: 20px;
    align-items: center;
    text-transform: uppercase;
    li{
        position: relative;
        list-style: none;
    letter-spacing: 0.8px;
    font-size: 11px;
    font-weight: 700;
    cursor: pointer;
    color: rgb(14 11 61 / 76%);
    filter: blur(0.61px);
   

}
    }
    .active_li{
        filter: blur(0px) !important;
        ::after{
    content: "";
    bottom: -8px;
    width: 90%;
    right: 0;

    position: absolute;
    height: 4px;
    border-radius: 10px;
    background:linear-gradient(45deg, rgba(174, 174, 174, 0.11), rgba(174, 174, 174, 0.21) , rgb(64 70 221 / 52%), rgb(64 70 221 / 62%));


    }
}

.loggedInUserBox{
    display: flex;
    gap: 10px;
    cursor: pointer;    
    img{
        width: 40px;
        height: 40px;
        object-fit: cover;
        border: 3px solid #686de0
        ;
        padding: 1px;

        border-radius: 50%;

    } 
    .loggedInuserDetails p{ 
        font-size: 14px ;
        color: rgb(14, 11, 61);
        text-transform: uppercase;
        font-weight: bold;
        :nth-of-type(2){
            font-size: 8px;
            color: gray;
            font-weight: 100 !important;
        }
    }

}
    button{
        height: 32px;
        background-color: rgb(64 70 221);
        border: none;
        outline: none;
        font-size: 12px;
        letter-spacing: 1px;
        border-radius: 4px;
        color: white;
        width: fit-content;
        padding:  0 15px;
        cursor: pointer;
        transition: all .3s ease-in;
       
        :hover{
            background-color: rgb(74 79 181);
        }
    }
    .signup_btn{
            background-color: white !important;
            border: 1px solid #686de0;
            color: #686de0;

        }
    
}

`