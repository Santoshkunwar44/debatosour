import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalBody,
    ModalCloseButton,
    useDisclosure,
    Button
  } from '@chakra-ui/react'
import React ,{useState} from 'react'
import { DebateModalWrapper } from './CreateDebateModal.styles'

type CreateDebateModal ={
  children?:React.ReactNode
}


 export const  CreateDebateModal:React.FC<CreateDebateModal>=({children})=> {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const [hours, setHours] = useState<number>(0);
    const [minutes, setMinutes] = useState<number>(0);
  
    const handleHourChange = (e:React.ChangeEvent<HTMLInputElement>) => {
      setHours(parseInt(e.target.value));
    };
  
    const handleMinuteChange = (e:React.ChangeEvent<HTMLInputElement>) => {
      setMinutes(parseInt(e.target.value));
    };
    return (
      <>
        <span onClick={onOpen}>{children}</span>
  
        <Modal isOpen={isOpen} onClose={onClose}>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader className='modalHeader' display={"flex"} alignItems={"center"} gap={"10px"}>
              <img width={"80px"} src="/images/speech.png" alt="" />
            <p style={{color:"#4046DD"}}  color='#4046DD'>CREATE DEBATE</p>  </ModalHeader>
            <ModalCloseButton />
            <ModalBody>

              <DebateModalWrapper>
      <div>
                <label className="form_label" >Topic name</label>
                <input type="text" placeholder='Topic for debate' />
      </div>
      <div>
      <label htmlFor="" className="form_label">No of rounds</label>
                <input type="text" placeholder='Number of rounds' />
      </div>
      <div>
      <label htmlFor="" className="form_label">Team size</label>
                <input type="number" placeholder='Team sizes' />
      </div>
                <div className='form_input_row_box'>
      <label className='form_label' >Starting time </label>
      <div className=' className="form_label"'>
        <div className='starting_time_item_box'>
        <div  className='starting_time_item'>
      <p className="form_label">Date  </p>
                <input type="date" name="" id="" />
        </div>
        <div  className='starting_time_item'>
          <p className="form_label">Time </p>
          
                <input type="time" name="" id="" />
        </div >
        <div className='starting_time_item'>
          <p className="form_label">Duration </p> 
            <div className='duration_input'>

<div className='time_box'>

        <input  type="number" min={"1"} max="24" placeholder='0hr'  value={hours} onChange={handleHourChange} />
        <div>hr</div>
</div>
<div className='time_box'>

        <input type="number" min={"1"} max="59" placeholder='0min' value={minutes} onChange={handleMinuteChange} />
        <div className=''>
          min
        </div>
</div>

            </div>
      </div>
      </div>
          </div>
                </div>
                <button className='create_debate_btn'>
                    CREATE DEBATE
                </button>


              </DebateModalWrapper>

            </ModalBody>
           
          </ModalContent>
        </Modal>
      </>
    )
  }