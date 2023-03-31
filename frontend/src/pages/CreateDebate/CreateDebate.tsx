import React from 'react'
import DebateFormInput from '../../components/DebateForm/DebateFormInput'
import { CreateDebateWrapper } from './CreateDebate.styles'
import Navbar from "../../Layouts/Navbar/Navbar"
const CreateDebate:React.FC = () => {

  return (
    <>
<Navbar/>
    <CreateDebateWrapper>
        <div className="create_debate_form">

        

<DebateFormInput/>






        </div>
    </CreateDebateWrapper>
    </>
  )
}

export default CreateDebate