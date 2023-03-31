import { useSelector } from 'react-redux'
import { State } from '../../../redux/reducer'
import { TeamNumber } from '../../../utils/types'
import DebatorView from '../DebatorView/DebatorView'
import { DebateScreenBoxWrapper } from './DebateScreenBox.styles'

const DebateScreenBox:React.FC = () => {
const {activeDebate} = useSelector((state:State)=>state.debate);

  return (
    <DebateScreenBoxWrapper >
      {/* {
        activeDebate ? activeDebate.participants.map((debator,index)=>(
          <DebatorView  isSpeaking={(index===0 || index===1) ? true :false}  key={debator._id} debator={debator}/>
        ))    :<p>loading..</p>
      } */}

      <div className='box_wrappers'>
      <div className='screen_box_header'>

        <h4 className='team_name teamOne'>Team {activeDebate?.teams[0].name}</h4>

      </div>
      <div className="left_team">

{
  activeDebate?.teams[0].members.map((member)=>(
    <DebatorView teamNumber={TeamNumber.TEAMONE} debator={member} key={member._id} />
    ))
}

    </div>
      </div>
      <div className='box_wrappers'>

        <div className='screen_box_header'>
        <div className='team_name teamTwo'>Team {activeDebate?.teams[1].name}</div>
          </div>
      <div className="right_team">

      {
  activeDebate?.teams[1].members.map((member)=>(
      <DebatorView  teamNumber={TeamNumber.TEAMTWO} debator={member}  key={member._id}/>
  ))
}
      </div>
      </div>

    
       
    </DebateScreenBoxWrapper>
  )
}

export default DebateScreenBox