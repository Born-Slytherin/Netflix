import React from 'react'
import { Link } from 'react-router-dom'


function Footer() {
  return (
    <footer className='w-full p-6 flex flex-col text-white gap-4 justify-center items-center border-t border-zinc-600'>
       <img src="/assets/netflix.png" alt="" className='w-40 h-32' />
       <p>Entertain your loved one's in home</p>
       <ul className=' w-1/2 flex justify-around'>
        <li>
          <Link to="/">
            About
          </Link>
        </li>
        <li>
          <Link to="/">
            Premium
          </Link>
        </li>
        <li>
          <Link to="/">
            Campaigns
          </Link>
        </li>
        <li>
          <Link to="/">
            Blog
          </Link>
        </li>
        <li>
          <Link to="/">
            Affiliate Program
          </Link>
        </li>
        <li>
          <Link to="/">
            FAQs
          </Link>
        </li>
        <li>
          <Link to="/">
            Contact
          </Link>
        </li>
       </ul>
       <p className='text-sm text-zinc-400'>© 2021-2022 Netflix™. All Rights Reserved</p>
    </footer>
  )
}

export default Footer
