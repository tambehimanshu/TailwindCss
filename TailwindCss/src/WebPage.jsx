import React from 'react'

function WebPage() {
  return (
    <>
    <body className='bg-black text-black' >
        {/* navbar goes here */}
        <nav className='w-full h-14  bg-indigo-200  flex justify-between px-4 items-center md:px-4'>
            <div className='text-2xl text-indigo-700 font-bold '>
                CRICKET
            </div>
            <ul className='md:flex hidden font-semibold'> 
            <li className='mx-[10px] cursor-pointer'>Home</li>
            <li className='mx-[10px] cursor-pointer'>About</li>
            <li className='mx-[10px] cursor-pointer'>Contact</li>
            </ul> 
            <div className=' hidden md:block px-2 py-2 bg-indigo-700 text-white rounded mt-2 mb-2 font-bold cursor-pointer'>Login/Signup</div>
            <div className=' md:hidden'> 
            <a href="#" className='text-4xl' >&#8801;</a>
            </div>
        </nav>
        {/* navbar ends here */}

        <header></header>

    </body>
    </>
  )
}

export default WebPage