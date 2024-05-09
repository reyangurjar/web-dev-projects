import React from 'react'



const Navbar = () => {
    return (
        <>
        {/* Todo to add a mx-something after a wide monitor so that everything is centered should be on the container */}
            <nav class=" shadow-md shadow-neutral-300 text-whit flex items-center justify-between h-16 px-4 lg:px-12 ">
                <div className=''>
                    <a href="#" class="text-white text-xl font-bold">
                        <img className='w-32' src="/MB-Logo-New.png" alt="Mblogo"/>
                    </a>
                </div>
                <div  className=''>
                    <button className='border border-b-2 font-bold text-[#ff6445] hover:text-white hover:bg-[#ff6445]  border-[#ff6445] text-sm p-2 rounded-md'>
                      <span>
                          {/* Todo to add the ButtonArrow.svg in the public folder */}

                      </span>
                        Grab E-notes
                    </button>
                </div>
            </nav>
        </>
    )
}

export default Navbar
