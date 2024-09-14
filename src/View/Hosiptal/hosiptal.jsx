import React from'react'
import SidebarDashboard from '../Dashboard/Layout/Sidebar'
import Hosiptal from './pages/Partial/Hospital'

function Home() {
    return(
        <>
        <SidebarDashboard/>
        <div className="container">
    <Hosiptal/>
  </div>
        </>
    )
}

export default Home