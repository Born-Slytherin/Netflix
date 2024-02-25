import React from 'react'
import { Link } from 'react-router-dom'


function Button(props) {
  return (
    <div>
      
      <Link to={props.to} className='p-2 text-red-600 border border-red-600 rounded-md hover:bg-red-600 hover:text-black'>
          {props.text}
      </Link>
    </div>
  )
}

export default Button
