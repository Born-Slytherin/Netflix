import React from 'react'

function Button(props) {
  return (
    <div>
            <button className='rounded-md p-2 text-red-600 border border-red-600 hover:bg-red-600 hover:text-black'>{props.text}</button>
    </div>
  )
}

export default Button
