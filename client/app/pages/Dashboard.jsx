import React from 'react'

import WelcomeBanner from '../partials/WelcomeBanner'

const Dashboard = () => {
  return (
    <>
    <div className="h-screen bg-gray-100">
    <div className="p-10 pt-10 sm:ml-64 mr-3  ">   
    <WelcomeBanner/>
    </div>
    </div>
     </>
  )
}

export default Dashboard