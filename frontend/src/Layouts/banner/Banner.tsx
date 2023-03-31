import { BannerWrapper } from "./Banner.styles"
import {MdOutlineAdd ,MdModelTraining} from "react-icons/md";
import {HiOutlineViewfinderCircle} from "react-icons/hi2";
import { Link } from "react-router-dom";
  const Banner = () => {


  return (
    <BannerWrapper>
        <div className="banner_bg_image">

            <img className="cartoon_speech" src="/images/cartoon_speech.png" alt="dinasourImg" />
            {/* <img  className="speaker_img" src="/images/speech.png" alt="speaker" /> */}
            <img className="hello_dinasour"  src="/images/dinasour_hello.png" alt="debateImage" />


        </div>
        <div className="banner_content" >
                <p className="top_site_info">Virtual Debate platform</p>
            <h1 className="main_text_banner">Online platform to organize</h1>
            <div className="bottom_text">
            <h1 className="main_text_banner">
            a virtual debate for all <img className="quodium" src="/images/qodium.png" alt="quodium" />      </h1>   
            <p className="secondary_main_text">Debatasour lets a users to create a online debate and manages the audience  to watch the debate & provide  feedback to the debators. </p>
        
            </div>
        </div>
        <div className="banne_bottom_option_box">

      
  <Link to={"/create"}>
           <button className="banner_bottom_button_option_button">
        <MdOutlineAdd/>  
        <p>
              Create Debate 
            </p>
        </button>
  </Link>
 
        <Link to="/chatbot">
        <button className="prepare_for_debate_btn">
          <MdModelTraining/>
          <p>
               Prepare for Debate
            </p>
        </button>
        </Link>


        </div>
<div className="debate_link_box">

    <input type="text" placeholder="Enter or paste link of debate" />
    <Link to={"/debate_room/34"}>
    <button>  <HiOutlineViewfinderCircle className="watch_icon"/> WATCH</button>
    </Link>

</div>
    </BannerWrapper>
  )
}

export default Banner