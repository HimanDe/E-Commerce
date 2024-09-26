import React, { useState } from 'react'
import userContext from './UserContext'

const UserState = (props) => {
    const [user, setuser] = useState([]);
    console.log(user)
    
    // let userDetailsArr = JSON.parse(localStorage.getItem('userDetails')) || []
    // console.log(userDetailsArr)
    // setuser(userDetailsArr)
  return (
    <userContext.Provider value={{user, setuser}}>
      {props.children}
    </userContext.Provider>
  )
}

export default UserState
