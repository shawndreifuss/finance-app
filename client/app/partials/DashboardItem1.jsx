import React from 'react'
import Chart from 'chart.js/auto';
import Script from 'next/script';




const DashboardItem1 = () => {





  return (
    <>
   <Script 
    src="https://unpkg.com/tailwindcss-jit-cdn" data-test="script"
  />
    <div className="flex dashboardItem1 z-60 flex-col col-span-full xl:col-span-6 bg-white shadow-lg rounded-sm border border-gray-200">
    <header className="px-5 py-4 border-b border-gray-100 flex items-center">
        <h2 className="font-semibold text-gray-800">Analytics</h2>
    </header>
    <div className="px-5 py-1">
                <div className="flex flex-wrap">
                  
                    <div className="flex items-center py-2">
                        <div className="mr-5">
                            <div className="flex items-center">
                                <div className="text-3xl font-bold text-gray-800 mr-2">24.7K</div>
                                <div className="text-sm font-medium text-green-500">+49%</div>
                            </div>
                            <div className="text-sm text-gray-500">Unique Visitors</div>
                        </div>
                        <div className="hidden md:block w-px h-8 bg-gray-200 mr-5" aria-hidden="true"></div>
                    </div>
                    <div className="flex items-center py-2">
                        <div className="mr-5">
                            <div className="flex items-center">
                                <div className="text-3xl font-bold text-gray-800 mr-2">56.9K</div>
                                <div className="text-sm font-medium text-green-500">+7%</div>
                            </div>
                            <div className="text-sm text-gray-500">Total Pageviews</div>
                        </div>
                        <div className="hidden md:block w-px h-8 bg-gray-200 mr-5" aria-hidden="true"></div>
                    </div>
                    <div className="flex items-center py-2">
                        <div className="mr-5">
                            <div className="flex items-center">
                                <div className="text-3xl font-bold text-gray-800 mr-2">54%</div>
                                <div className="text-sm font-medium text-yellow-500">-7%</div>
                            </div>
                            <div className="text-sm text-gray-500">Bounce Rate</div>
                        </div>
                        <div className="hidden md:block w-px h-8 bg-gray-200 mr-5" aria-hidden="true"></div>
                    </div>
                    <div className="flex items-center">
                        <div>
                            <div className="flex items-center">
                                <div className="text-3xl font-bold text-gray-800 mr-2">2m</div>
                                <div className="text-sm font-medium text-yellow-500">+7%</div>
                            </div>
                            <div className="text-sm text-gray-500">Visit Duration</div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex-grow">
                <canvas id="analytics-card-01" width="800" height="300"></canvas>
            </div>
        </div>
    
                  
                  
                    </>
  )
}

export default DashboardItem1