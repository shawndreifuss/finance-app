import React from 'react'

const Header = () => {
  return (
    <>
     <header className="sticky top-0 bg-white dark:bg-[#182235] border-b border-slate-200 dark:border-slate-700 z-30">
      <div className="px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 -mb-px">
          {/* Header: Left side */}
          <div className="flex"></div>
          </div>
          </div>
          </header>

     <div className="p-4 sm:ml-64">
    <div className="flex items-center justify-center h-48 mb-4 rounded bg-gray-50 dark:bg-gray-800">
             <p className="text-2xl text-gray-400 dark:text-gray-500">
                <svg className="w-3 h-3.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
                   <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 1v16M1 9h16"/>
                </svg>
             </p>
          </div>
    </div> 
    
    </>
  )
}

export default Header