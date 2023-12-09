import React from 'react'

import WelcomeBanner from '../partials/WelcomeBanner'
import DashboardItem1 from '../partials/DashboardItem1'

const Dashboard = () => {
  return (
    <>
    <div className=" bg-gray-100">
    <div className="p-10 pt-10 sm:ml-64   ">   
    <WelcomeBanner/>
    </div>
    <div className="flex border-solid h-screen flex-col ml-64 bg-gray-100">
<div className=" ">
  <div className=" row bg-white h-min w-5/12 ml-9 ">
  
  <DashboardItem1/>
  
  
  </div>
  <div className="item">hello</div>
  <div className="item">hello</div>
</div>
    </div>
    </div>
     </>
  )
}

export default Dashboard