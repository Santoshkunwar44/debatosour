import { UserType } from '../../../utils/types'
import { ParticipationPersonWrapper } from './ParticipationPerson.styles'

type ParticipationPersonType = {
  person:UserType
} 
const ParticipantPerson:React.FC<ParticipationPersonType> = ({person}) => {
  return (
    <ParticipationPersonWrapper>
    <img className='participation_person_img'  src={person.avatar} alt='userImg'/>
    <p>
      {person.firstName}
    </p>
    </ParticipationPersonWrapper>
  )
}

export default ParticipantPerson