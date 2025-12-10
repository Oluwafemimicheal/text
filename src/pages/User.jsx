import React from 'react'
import { Link, Outlet } from 'react-router-dom'

const User = () => {
  return (
    <div>
      User Page
      <Outlet/>
      {/* <button type='button' className='ml-30 p-2 bg-blue-700 rounded-sm'>
        <Link to={'/profile'}>Profile</Link>
      </button> */}
    </div>
  ) 
}

export default User
