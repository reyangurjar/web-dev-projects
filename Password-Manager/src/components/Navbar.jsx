import React from 'react'

const Navbar = () => {
  return (
    <nav className='bg-slate-800  text-white'>
        <div className="md:mycontainer  flex items-center  justify-between ">

            <div className="logo font-bold text-2xl">
              <span className='text-green-500'>&lt;</span>
              <span>Pass</span>  
             <span className='text-green-500'>Op/&gt;</span> 
              </div>
            
        <ul>
             <li className='flex gap-6 items-center justify-center'>
                 <a className='hover:cursor-pointer hover-bold' href="/">About </a>
                  <img className='invert w-8 cursor-pointer' src="/icons/github.svg" alt="" />
             </li>
        </ul>
        </div>
    </nav>
  )
}

export default Navbar