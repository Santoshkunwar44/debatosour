import styled from "styled-components";

export const  BannerWrapper  = styled.div`
display: flex;
 width: 100%;
 flex-direction: column;
 gap: 1.4rem;
align-items: center;
position: relative;
z-index: 2;
.banner_bg_image{
    width: 100%;
    position: absolute;
    height: 100%;
    z-index: -1;

 img{
    width: 150px;
    position: absolute;
    opacity: 0.5;
}
.speaker_img{
    top: 30% ;
    width: 200px;
    opacity: 1;
}

    .cartoon_speech {
        left: 1%;
        top: 20%;
        opacity: 0.31;
        width: 120px;
    }
    .hello_dinasour{
        right: 10%;
        width: 100px;
        top: 40%;
        opacity: 0.2;
    }
}
.banner_content{
    width: 80%;
    display: flex;
    flex-direction: column;
    align-items: center;
    word-break: break-all;
    padding: 2rem;
    .top_site_info{
        font-weight: bold;
        color: rgb(64 70 221);
        cursor: pointer;
        font-size: 12px;
        letter-spacing: 1px;
        margin-bottom: 10px;
        position: relative;
        ::after{
            content: "";
            width: 40%;
            position: absolute;
            height: 2px;
            background: rgb(104, 109, 224);
            border-radius: 30px;
            bottom: -7px;

            left: 0;
            right: 0;
            margin: auto;

        }
    }
    
    .bottom_text{
        margin: auto;
        width: 80%;
        display: flex;
        flex-direction: column;
        align-items: center;
        text-align: center;
    }
.main_text{
    text-align: center;
    font-size: 40px;
    line-height: 52px;
    letter-spacing: 2px;
    font-weight: 700;
    color: rgb(14, 11, 61);
}
.secondary_main_text{
    color: rgb(14, 11, 61);
    text-align: center;
    width: 85%;
    line-height: 23px;
    margin-top: 1rem;
    font-size: 14px;
}
.quodium{
    display: inline;
    width: 40px;
}

}
.banne_bottom_option_box{
    width: 40%;
    text-align: center;
    display: flex;
    gap: 10px;
    align-items: center;
    justify-content: space-between;
    button{
        display: flex;
        align-items: center;
        font-size: 12px;
        gap: 10px;
        outline: none;
        border: none;
        background-color: rgb(64 70 221);
        border-radius:1px;
        height: 40px;
        padding: 0 0.51rem;
        color: white;
        letter-spacing: 1px;
        width: fit-content;
        text-transform: uppercase;
        cursor: pointer;
        svg{
            font-size: 1.3rem;
        }
        :hover{
            background-color: rgb(26, 33, 201);
        }
      
    }
    .prepare_for_debate_btn{
            background-color:white ;
            border: 1px solid rgb(64 70 221);
            color: rgb(64 70 221);

            :hover{
                background-color: rgb(64 70 221 / 27%);
        }
            
        }
}
.debate_link_box{
    width: 37%;
    height: 50px;
    padding: 5px;

    display: flex;
    gap: 10px;
    input{
        height: 100%;
        flex: 1  ;
        border: none;
        box-shadow: 0px 0px 2px rgb(64 70 221);
        padding-left: 10px;
        color: grey;
        outline: none;
        transform: skewX(350deg);
        ::placeholder{
            color: #a3a3a3;;

            font-size: 12px;
        }
    }
    button{
        outline: none;
        border: none;
        background-color: rgb(64 70 221);
        width: 100px;
        border-radius:3px;
        color: white;
        letter-spacing: 1px;
        cursor: pointer;
        transform: skewX(350deg);
        /* height: 40px; */
        height: 100%;
        align-items: center;
        display: flex;
        justify-content: center;
        gap: 5px;
        :hover{
            background-color: rgb(26, 33, 201);
        }
        svg{
            font-size: 1.3rem;
        }
       
    }
}

`