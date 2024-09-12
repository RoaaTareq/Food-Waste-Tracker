import React from'react'
import SidebarDashboard from './Layout/Sidebar'
import Admin from './Pages/Admin'

function Home() {
    return(
        <>
        <SidebarDashboard/>
        <section class="home-section">
  <div className="container">
    <Admin/>
  </div>
  </section>
        </>
    )
}

export default Home