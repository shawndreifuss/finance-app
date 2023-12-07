import React from 'react'
import Dashboard from './pages/Dashboard'
import SideNav from './partials/SideNav'
import Header from './partials/Header'

export default function Home() {
  return (
    <>
    <SideNav />
    <Header />
  <Dashboard />
  </>
  )
}
