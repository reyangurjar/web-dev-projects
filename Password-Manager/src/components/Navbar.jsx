import React from 'react'

const Navbar = () => {
  return (
    <nav className='bg-slate-800  text-white'>
        <div className="mycontainer flex items-center  justify-between ">

            <div className="logo font-bold text-2xl">
              <span className='text-green-500'>&lt;</span>
              <span>Pass</span>  
             <span className='text-green-500'>Op/&gt;</span> 
              </div>
            
        <ul>
             <li className='flex gap-4'>
                 <a className='hover:cursor-pointer hover-bold' href="/">About </a>
                  <img src="/icons/github.svg" alt="" />
             </li>
        </ul>
        </div>
    </nav>
  )
}

export default Navbar