import React ,{useState} from 'react'
import { useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom'
import { LoginUserApi } from '../../../utils/Api';
import { AuthWraper } from '../Auth.styles'
import {bindActionCreators} from "redux"
import { actionCreators } from '../../../redux/store';

type loginState={
  error:string;
  data:{
    email:string;
    password:string;
  }
  
}
const Login:React.FC = () => {


    const  [loginData,setLoginData]  =  useState<loginState>({
      error:"",
      data:{
        email:"",
        password:""
      }
    })
    const navigate =useNavigate();
    const dispatch  = useDispatch()
    const {AddLoggedInUser} =  bindActionCreators(actionCreators,dispatch )

    const handleInputChange=(name:string,value:string)=>{
      setLoginData(prev=>({
        ...prev, data:{...prev.data, [name]:value}
      }))
    }

    const handleLogin =async()=>{




      try {
        
      const res = await  LoginUserApi(loginData.data);

      if(res.status===200){
        AddLoggedInUser(res.data.message)
        navigate("/")
      }else{
        throw Error(res.data.message)
      }


      } catch (error) {
        console.log(error)
      }


    }
    const handleGoogleLogin =()=>{
      window.open("http://localhost:8000/api/auth/google")
    }

  return (
    <AuthWraper>
      <img draggable={false} className='dinasour_image' src='/images/dinasour_coffee.png' alt='dinasourImg'/>
        <div className="login_main_box">

    <img draggable={false} className='logo_img' src="/images/auth_logo.png" alt="logo" />
    <div className="login_welcome_text">
        {/* <h5 className='welcome_back_text'>Welcome back 😋</h5> */}
        {/* <p className='welcome_secondary_text'>Continue again where you left from </p> */}
    </div>
    <div className='login_with_google_box' onClick={handleGoogleLogin}>
      <img src="/images/google.png" alt="googleIcon" />
     <p>
     Continue with Google
      </p>
    </div>
    <div className='sign_in_with_email_division' >

      <div className="left_hr"></div>
      <p>or sign in with email</p>
      <div className="right_hr"></div>

    </div>
    <div className='form_wrapper'>

    <div className='input_item'>

      <label>Email</label>
      <input className="input_element" type="email" placeholder='Enter  your email address' value={loginData.data.email} onChange={(e)=>handleInputChange("email",e.target.value)} />

    </div>
    <div className='input_item'>

      <label>Password</label>
      <input className="input_element" type="password" placeholder='Enter  your  password' value={loginData.data.password} onChange={(e)=>handleInputChange("password",e.target.value)}/>

    </div>
    <div className='bottom_other_options'>

    <div className='checkbox_item'> 

    <input type="checkbox"  />
    <p>Remember me</p>

    </div>
    <p className='forgot_password_text'>
      Forgot your password?
    </p>

    </div>
    <button className='login_button' onClick={handleLogin}>
      Login
    </button>
    <Link  to={"/signup"}>
    <p className='no_account_text'>I don't have account </p>
    </Link>


    </div>
        </div>
    </AuthWraper>
  )
}

export default Login