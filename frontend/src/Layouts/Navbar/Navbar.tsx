import React from "react"
import { useSelector } from "react-redux"
import { Link, useLocation } from "react-router-dom"
import { State } from "../../redux/reducer"
import SignOutPopover from "../popovers/SignoutPopovers"

import { NavbarWrapper } from "./Navbar.styles"

const Navbar:React.FC = () => {
  const {data} = useSelector((state:State)=>state.user)
const location = useLocation().pathname



  return (
    <NavbarWrapper>
      <Link to={"/"}>
        <div className="nav_logo_box">
            <img src="/images/auth_logo.png" alt="logoImg" />
        </div>
      </Link>
        <div className="other_button_box">
       <ul className="nav_list">
        <Link to={"/"}>
         <li className={`${location ==="/" && "active_li"}`}>Home</li>
        </Link>
        <Link to={"/live_debates"}>
         <li className={`${location ==="/live_debates" && "active_li"}`}> Debates</li>
        </Link>
        <Link to={"/chatbot"}>
         <li className={`${location ==="/chatbot" && "active_li"}`}>chatbot </li>
        </Link>
         <li>Profile</li>
       </ul>
{
  data ? 
  <SignOutPopover children={
<>
    <div className="loggedInUserBox">
    <img referrerPolicy="no-referrer" width={"50px"} src={data?.avatar} alt="UserAvatar" />
    <div className="loggedInuserDetails">
      <p>{data.firstName}</p>
      <p>{data.email}</p>
    </div>
    </div>
</> }/>
 
  :<>
    
<><Link to={"/login"}>
<button>Login</button>
</Link>
<Link to={"/signup"}>
<button className="signup_btn">Signup</button>
</Link>
</>

  
  

          
  </>
}


        </div>
    </NavbarWrapper>
  )
}

export default Navbar