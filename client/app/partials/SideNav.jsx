import React from 'react'
import BetaCard from '../components/Alerts/BetaCard'
import ProfileCircle from '../components/ProfileCircle/ProfileCircle'
import TopSidebar from '../components/Sidebar/TopSidebar'
import BottomSidebar from '../components/Sidebar/BottomSidebar'



const SideNav = () => {

  return (
    <> 
<aside id="cta-button-sidebar" className="fixed top-0 left-0 z-40 w-64 h-screen transition-transform -translate-x-full sm:translate-x-0 " aria-label="Sidebar">
   <div className="h-full px-3 py-4 overflow-y-auto bg-gray-50 dark:bg-gray-800">
     <ProfileCircle />
     <TopSidebar />
       <BetaCard />  
      <BottomSidebar />
      
   </div>
</aside>
</>

  )
}

export default SideNav