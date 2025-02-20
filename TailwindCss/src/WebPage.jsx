import React from 'react'

function WebPage() {
  return (
    <>
    
    <body className='bg-black text-black' >
        {/* navbar goes here */}
        <nav className=' fixed top-0 left-0 w-full h-14  bg-indigo-200  flex justify-between px-4 items-center md:px-4'>
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
        
        {/* image section start here */}
        <div className='w-full'>
        <header className='w-full h-auto'>
          <img className='w-full hidden h-screen object-cover md:block' src="https://images.firstpost.com/wp-content/uploads/2013/06/2Champions_Trophy_Indiawin_Reuters.jpg" alt="" />
          <img className='w-full md:hidden' 
          src="https://th.bing.com/th/id/OIP.OCW5ZGg9HvdfEgGLEs8jqgHaFk?rs=1&pid=ImgDetMain" alt="" />
        </header>
        </div>
          {/* image section done here */}

          {/* our Students Section  */}
          
    </body>
    </>
  )
}

export default WebPage