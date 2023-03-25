import React from 'react'
import DebatorView from '../DebatorView/DebatorView'
import { DebateScreenBoxWrapper } from './DebateScreenBox.styles'

const DebateScreenBox:React.FC = () => {
  return (
    <DebateScreenBoxWrapper>
        <DebatorView username="santosh kunwar" profileImg="https://pps.whatsapp.net/v/t61.24694-24/336320368_541202704763093_5925990094284959542_n.jpg?ccb=11-4&oh=01_AdRRJdI0nOnjAl13Amm3RBzR7NFOsfyCOIpe82YnjYMLxA&oe=6427D8DD" />
        <DebatorView isSpeaking={true} username="Rajiv shrestha" profileImg="/images/user.jpeg"/>
        <DebatorView   username={"Dhenga Vhai"} profileImg={"https://scontent.fbwa1-1.fna.fbcdn.net/v/t39.30808-1/297386683_793168335071202_7686532393229168177_n.jpg?stp=dst-jpg_p200x200&_nc_cat=102&ccb=1-7&_nc_sid=7206a8&_nc_ohc=7sKRI8TpiA8AX_QxZSq&_nc_ht=scontent.fbwa1-1.fna&oh=00_AfAX_zKStFEXsDl_bUs8Th62HTm-eVWoB_nF3KQvjJDbpQ&oe=641F894A"} />
        <DebatorView username={"Shekhar Thapa"} profileImg={"https://scontent.fbwa1-1.fna.fbcdn.net/v/t39.30808-1/331862979_1409018533176365_1295222929079613374_n.jpg?stp=cp6_dst-jpg_p200x200&_nc_cat=103&ccb=1-7&_nc_sid=f67be1&_nc_ohc=vYcoGx5E2xQAX-49ZvV&_nc_ht=scontent.fbwa1-1.fna&oh=00_AfBJ2tPZA5LBw1YI_byc9_Y1_Dc_gl3sqncBjkkwDRrdug&oe=641EDEE5"} />
        <DebatorView username={"Shekhar Thapa"} profileImg={"https://scontent.fbwa1-1.fna.fbcdn.net/v/t39.30808-1/331862979_1409018533176365_1295222929079613374_n.jpg?stp=cp6_dst-jpg_p200x200&_nc_cat=103&ccb=1-7&_nc_sid=f67be1&_nc_ohc=vYcoGx5E2xQAX-49ZvV&_nc_ht=scontent.fbwa1-1.fna&oh=00_AfBJ2tPZA5LBw1YI_byc9_Y1_Dc_gl3sqncBjkkwDRrdug&oe=641EDEE5"} />
        <DebatorView username={"Shekhar Thapa"} profileImg={"https://scontent.fbwa1-1.fna.fbcdn.net/v/t39.30808-1/331862979_1409018533176365_1295222929079613374_n.jpg?stp=cp6_dst-jpg_p200x200&_nc_cat=103&ccb=1-7&_nc_sid=f67be1&_nc_ohc=vYcoGx5E2xQAX-49ZvV&_nc_ht=scontent.fbwa1-1.fna&oh=00_AfBJ2tPZA5LBw1YI_byc9_Y1_Dc_gl3sqncBjkkwDRrdug&oe=641EDEE5"} />
    
       
    </DebateScreenBoxWrapper>
  )
}

export default DebateScreenBox