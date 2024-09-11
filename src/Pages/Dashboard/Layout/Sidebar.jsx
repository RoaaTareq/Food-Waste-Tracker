import React, { useEffect } from 'react';

function SidebarDashboard() {
  useEffect(() => {
    const sidebar = document.querySelector(".sidebar");
    const closeBtn = document.querySelector("#btn");
   

    const handleMenuToggle = () => {
      sidebar.classList.toggle("open");
      menuBtnChange();
    };

    const menuBtnChange = () => {
      if (sidebar.classList.contains("open")) {
        closeBtn.classList.replace("bx-menu", "bx-menu-alt-right");
      } else {
        closeBtn.classList.replace("bx-menu-alt-right", "bx-menu");
      }
    };

    closeBtn.addEventListener("click", handleMenuToggle);
   

    // Clean up event listeners when the component unmounts
    return () => {
      closeBtn.removeEventListener("click", handleMenuToggle);
      
    };
  }, []);

  return (
    <div className="sidebar">
      <div className="logo-details">
        <i className="bx bxl-codepen icon"></i>
        <div className="logo_name">Dashboard </div>
        <i className="bx bx-menu" id="btn"></i>
      </div>
      <ul className="nav-list">
        
        <li>
          <a href="#">
            <i className="bx bx-grid-alt"></i>
            <span className="links_name">Home</span>
          </a>
          <span className="tooltip">Dashboard</span>
        </li>
        <li>
          <a href="#">
            <i className="bx bx-user"></i>
            <span className="links_name">Users</span>
          </a>
          <span className="tooltip">User</span>
        </li>
        <li>
          <a href="#">
            <i className="bx bx-chat"></i>
            <span className="links_name">Messages</span>
          </a>
          <span className="tooltip">Messages</span>
        </li>
        <li>
          <a href="#">
            <i className="bx bx-pie-chart-alt-2"></i>
            <span className="links_name">Analytics</span>
          </a>
          <span className="tooltip">Analytics</span>
        </li>
        <li>
          <a href="#">
            <i className="bx bx-folder"></i>
            <span className="links_name">File Manager</span>
          </a>
          <span className="tooltip">Files</span>
        </li>
        <li>
          <a href="#">
            <i className="bx bx-cart-alt"></i>
            <span className="links_name">Order</span>
          </a>
          <span className="tooltip">Order</span>
        </li>
        <li>
          <a href="#">
            <i className="bx bx-heart"></i>
            <span className="links_name">Saved</span>
          </a>
          <span className="tooltip">Saved</span>
        </li>
        <li>
          <a href="#">
            <i className="bx bx-cog"></i>
            <span className="links_name">Setting</span>
          </a>
          <span className="tooltip">Setting</span>
        </li>
        <li className="profile">
          <div className="profile-details">
            <i className="bx bx-export"></i>
            <div className="name_job">
              <div className="name">Logout</div>
            </div>
          </div>
          <i className="bx bx-log-out" id="log_out"></i>
        </li>
      </ul>
    </div>
  );
}

export default SidebarDashboard;
