import styled from "styled-components";

export const DebateScreenBoxWrapper = styled.div`
width: 100%;
display: flex;
gap: 2rem;
.box_wrappers{
    height: 100%;

}
.screen_box_header{
    height: 50px;
    .team_name{
        letter-spacing: 0.80px;
        font-size: 20px;
        text-transform: uppercase;
        font-weight: 700;
        opacity:0.7;
        width: fit-content;
        /* background:var(--dark_gradient_bg); */
        padding: 2px 15px;
        border-radius: 4px;
        display: flex;
        align-items: center;
        justify-content: center;
        position: relative;
        height: 40px;
        :after{
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
    .teamOne{
        color: var(--primary_color);
    }
    .teamTwo{
        margin-left: auto;
        /* background:var(--secondary_gradient_bg); */
        color: var(--secondary_color);
        ::after{
            background:linear-gradient(45deg, rgba(174, 174, 174, 0.11), rgba(174, 174, 174, 0.21) , #de009b, #de009be8);

        }
    }
}
.left_team,.right_team{
    flex: 6;
    display: flex;
    flex-wrap: wrap;
    gap: 0.6rem;
    height: 100%;
}

`