import React ,{useState} from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { AddLoggedInUser } from '../../../redux/action/actionCreators';
import { RegisterUserApi } from '../../../utils/Api';
import { AuthWraper } from '../Auth.styles'


type signUpStateType={

  firstName:string;
  lastName:string;
  email:string;
  password:string;
  confirmPassword:string | undefined;
  others:{
    missingFields:string[] ;
    error:string ;
  }
  

}

const Signup:React.FC = () => {


  const [userDetails,setUserDetails] = useState <signUpStateType>({
firstName:"",
lastName:"",
email:"",
password:"",
confirmPassword:"",
others:{
  missingFields:[] ,
  error:""
}
  })
  const navigate =  useNavigate()


  const handleInputChange =(name:string,value:string)=>{
    setUserDetails((prev)=>({...prev, [ name]:value}))
  }

  const handleRegister =async()=>{

    let fieldsMissing = false
    for (const key in userDetails) {
      if (Object.prototype.hasOwnProperty.call(userDetails, key)) {
         let missingKey=  userDetails[key as keyof typeof userDetails]
        if(!missingKey ){
          setUserDetails(prev=>({...prev, others:{...prev.others,missingFields:[...prev.others.missingFields,key]}}))
          fieldsMissing = true
        }
      }
    }

    if(fieldsMissing){
      return 
    }


    try {

      let payloadData ={
        firstName:userDetails.firstName,
        lastName:userDetails.lastName,
        password:userDetails.password,
        email:userDetails.email,
      }
    

        const  res = await RegisterUserApi(payloadData);
        console.log(res)
        if(res.status===200){
          console.log("User successfully registered")
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
        {/* <h5 className='welcome_back_text'>Welcome  😋</h5>
        <p className='welcome_secondary_text'>Get started with Debatosour now !! </p> */}
    </div>
    <div className='login_with_google_box' onClick={handleGoogleLogin}>
      <img src="/images/google.png" alt="googleIcon" />
     <p>
     Continue with Google
      </p>
    </div>
    <div className='sign_in_with_email_division' >

      <div className="left_hr"></div>
      <p>or sign up with email</p>
      <div className="right_hr"></div>

    </div>
    <div className='form_wrapper'>
<div className='single_item'>

    <div className='input_item'>

      <label>First Name</label>
      <input className="input_element" type="text" placeholder='First Name'
      value={userDetails.firstName}
      onChange={(e)=>handleInputChange("firstName",e.target.value)} />
    
    </div>
    <div className='input_item'>

      <label>Last Name</label>
      <input className="input_element" type="text" placeholder='Last Name'
      value={userDetails.lastName}
        onChange={(e)=>handleInputChange("lastName",e.target.value)}/>

    </div>
</div>
    <div className='input_item'>

      <label>Email</label>
      <input className="input_element" type="email" placeholder='Enter your email address'
            value={userDetails.email}  
            onChange={(e)=>handleInputChange("email",e.target.value)}/>

    </div>
    <div className="single_item">

    <div className='input_item'>

      <label>Password</label>
      <input className={`input_element ${ userDetails?.password !== userDetails.confirmPassword ? "error_input" :"" }`} type="password" placeholder='Enter your password'
          value={userDetails.password}  
       onChange={(e)=>handleInputChange("password",e.target.value)} />

    </div>
    <div className='input_item'>

      <label>Confirm Password</label>
      <input className={`input_element ${ userDetails?.password !== userDetails.confirmPassword ? "error_input" :"" }`}  type="password" placeholder='Confirm password' 
      
      value={userDetails.confirmPassword}  
      onChange={(e)=>handleInputChange("confirmPassword",e.target.value)}/>

    </div>
    </div>
    <div className='bottom_other_options'>

    
 
    </div>
    
    <button className='login_button' onClick={()=>handleRegister()}>
      Sign up
    </button>
    <Link to="/login">
    <p className='no_account_text'>Already have account </p>
    </Link>


    </div>
        </div>
  </AuthWraper>
  )
}

export default Signup