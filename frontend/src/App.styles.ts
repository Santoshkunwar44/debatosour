import styled, { createGlobalStyle } from "styled-components";

export const GlobalWrapper = createGlobalStyle`
:root{

    --dark_primary_text_color:rgb(14, 11, 61);
    --light_primary_text_color: #625959;
    --dark_gradient_bg:linear-gradient(45deg, rgba(174, 174, 174, 0.21), rgba(64, 70, 221, 0.17), rgba(174, 174, 174, 0.21));
    --light_gradient_bg:linear-gradient(45deg, rgba(174, 174, 174, 0.21), rgba(64, 70, 221, 0.12));
    --secondary_gradient_bg:linear-gradient(45deg,#f709af1a,rgb(183 183 195 / 12%),#f709af21),#f709af05;
    --primary_secondary_gradient_bg : linear-gradient(45deg, #f709af1a, rgba(64, 70, 221, 0.12));
    --primary_color:rgb(104, 109, 224);
--primary_color_dark:rgb(26, 33, 201);;
--secondary_color:#F709AF


}
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;

}
.main_text{
    display: flex;
    gap: 10px;
    color: var(--primary_color);
    font-size: 40px;
    font-weight: bolder;
    width: fit-content;
    position: relative;
    ::after{
    content: "";
    bottom: 0;
    width: 100%;
    right: 0;
    position: absolute;
    height: 4px;
    border-radius: 10px;
    background:linear-gradient(45deg, rgba(174, 174, 174, 0.11), rgba(174, 174, 174, 0.21) , rgb(64 70 221 / 52%), rgb(64 70 221 / 62%));


}
}

.secondary_main_text{
    color: var(--dark_primary_text_color) !important;
}
.header_text_with_bg{
    background: var(--dark_gradient_bg);
    width: fit-content;
    padding: 7px;
    border-radius: 6px;
    font-size: 10px;
    color: #625959;
    cursor: pointer;
    letter-spacing: 1px;
}
`

export const AppWrapper = styled.div`
    background-color: rgba(255,255,255);
    width: 95%;
    max-width: 1024px;
    margin: 0 auto;
    height:calc(100vh -80px);
.feature_box{
    /* display: none; */
}
`