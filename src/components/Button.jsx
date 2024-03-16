import React from 'react'
import { Link } from 'react-router-dom'


function Button({to,text}) {
  return (
    <div>
      
      <Link to={to} className='p-2 text-red-600 border border-red-600 rounded-md hover:bg-red-600 hover:text-black'>
          {text}
      </Link>
    </div>
  )
}

export default Button
