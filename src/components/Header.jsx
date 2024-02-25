import React from 'react'
import Button from './Button'

function Header() {
  return (
    <header className='w-full px-6 flex justify-between font-bold fixed top-0'>
        <h1><img src="/assets/netflix.png" alt="" className='w-28'/></h1>
        <ul className='flex justify-center items-center gap-4 '>
            <li className=' text-black'>
              <select name="language" id="language" className='p-2 bg-red-600 outline-none rounded '>
                <option value="eng">English</option>
                <option value="hindi">Hindi</option>
                <option value="ara">Arabic</option>
                <option value="fra">Francais</option>
              </select>
            </li>

            <Button text="Home" to="/"/>
            <Button text="Sign UP" to="/signUP"/>

        </ul>
    </header>
  )
}

export default Header
