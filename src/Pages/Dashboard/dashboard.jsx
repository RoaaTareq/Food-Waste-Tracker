import React from'react'
import SidebarDashboard from './Layout/Sidebar'
import Admin from './Pages/Admin'
import Category from './Category/Category'

function Home() {
    return(
        <>
        <SidebarDashboard/>
        <section class="home-section">
  <div className="container">
    {/* <Admin/> */}
    <Category/>
  </div>
  </section>
        </>
    )
}

export default Home