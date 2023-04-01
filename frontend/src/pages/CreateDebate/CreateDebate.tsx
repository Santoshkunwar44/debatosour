import React from 'react'
import DebateFormInput from '../../components/DebateForm/DebateFormInput'
import { CreateDebateWrapper } from './CreateDebate.styles'
import Navbar from "../../Layouts/Navbar/Navbar"
import { AlertLayout } from '../../Layouts/Alert/AlertLayout'
import { useSelector } from 'react-redux'
import { State } from '../../redux/reducer'
const CreateDebate:React.FC = () => {
const {data} = useSelector((state:State)=>state.user)


  return (
    <>
<Navbar/>

    <CreateDebateWrapper>
      {

       !data && <AlertLayout/>
      }
        <div className="create_debate_form">
<DebateFormInput/>
        </div>
    </CreateDebateWrapper>
    </>
  )
}

export default CreateDebate