import React, { useState ,useEffect } from 'react'
import { searchUserByNames } from '../../../utils/Api'
import { UserType } from '../../../utils/types'
import ParticipantsListItem from '../ParticipantsListItem'
import { SearchParticipantsListWrapper } from './SearchParticipantsList.styles'


    type SearchParticipantsListType={
        participantsSearchInput:string;
        handleSelectParticipants:(user:UserType,index:number)=>void;
        selectedParticipants:UserType[] ,
        index:number
    } 

const SearchedParticipantsList:React.FC<SearchParticipantsListType> = ({participantsSearchInput ,index,handleSelectParticipants,selectedParticipants}) => {
    const [ searchedParticipants,setSearchParticipants] =useState<UserType[]>([]);
    const [ isFetching,setFetching] =useState<boolean>(false)


    useEffect(()=>{
        handleSearchParticipants()
  },[participantsSearchInput]);
  // useEffect(()=>{

  //  let theResult = searchedParticipants.filter((person:UserType)  =>{
  //     return selectedParticipants.every(select=>select.firstName !== person.firstName )
  //   })
  //   setSearchParticipants(theResult)


  // },[searchedParticipants])
  const handleSearchParticipants =async()=>{
      try {
        setFetching(true)
        if(participantsSearchInput.length <=0) return; 
        const res =   await    searchUserByNames(participantsSearchInput)
        if(res.status===200){


          const  filtered = res.data.message.filter((person:UserType)  =>{
            return selectedParticipants.every(select=>select._id !== person._id )
          })
          
          setSearchParticipants(filtered)
          setFetching(false)
        }else{
          throw Error("No User found ")
        }
      } catch (error:any) {
        console.log(error.message)
        setFetching(false)
      }
    }


  return (
    <SearchParticipantsListWrapper>

{
  participantsSearchInput.length >0 ?  isFetching? <p>loading...</p> : searchedParticipants.map(person=>(
    <ParticipantsListItem selectParticipantsFunc={handleSelectParticipants} index={index} person={person} key={person._id}/>
  )) : null 
}
    </SearchParticipantsListWrapper>
  )
}

export default SearchedParticipantsList