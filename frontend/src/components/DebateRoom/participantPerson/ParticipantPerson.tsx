import { ParticipationPersonWrapper } from './ParticipationPerson.styles'

const ParticipantPerson = () => {
  return (
    <ParticipationPersonWrapper>
    <img className='participation_person_img'  src='/images/user.jpeg' alt='userImg'/>
    <p>
      Sam Sommers
    </p>
    </ParticipationPersonWrapper>
  )
}

export default ParticipantPerson