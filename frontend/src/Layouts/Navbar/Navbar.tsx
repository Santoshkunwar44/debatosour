import React from "react"
import { useSelector } from "react-redux"
import { Link } from "react-router-dom"
import { State } from "../../redux/reducer"
import SignOutPopover from "../popovers/SignoutPopovers"

import { NavbarWrapper } from "./Navbar.styles"

const Navbar:React.FC = () => {
  const User = useSelector((state:State)=>state.user)
 
  return (
    <NavbarWrapper>
      <Link to={"/"}>
        <div className="nav_logo_box">
            <img src="/images/auth_logo.png" alt="logoImg" />
        </div>
      </Link>
        <div className="other_button_box">
{
  User ? 
  <SignOutPopover children={
<>
    <div className="loggedInUserBox">
    <img width={"50px"} src={User?.avatar} alt="UserAvatar" />
    <div className="loggedInuserDetails">
      <p>{User.firstName}</p>
      <p>{User.email}</p>
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