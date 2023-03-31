import { UserType } from '../../utils/types'
import { ParticipantsItemWrapper } from './ParticipantsListItem.styles'

type ParticipantsItemPropType={
  person:UserType,
  selectParticipantsFunc:(user:UserType,index:number) =>void;
  index:number;
}

const ParticipantsListItem:React.FC<ParticipantsItemPropType> = ({person,selectParticipantsFunc,index}) => {
  return (
    <ParticipantsItemWrapper onClick={()=>selectParticipantsFunc(person,index)}>
        <img src={person.avatar} alt="userAvatarImg" />
        <div className="details_box">
            <div className="username">{person.firstName} </div>
            <div className="email">{person.email}</div>
        </div>
    </ParticipantsItemWrapper>
  )
}

export default ParticipantsListItem