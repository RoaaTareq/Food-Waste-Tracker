import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

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

    return () => {
      closeBtn.removeEventListener("click", handleMenuToggle);
    };
  }, []);

  return (
    <div className="sidebar">
      <div className="logo-details">
        <i className="bx bxl-codepen icon"></i>
        <div className="logo_name">Dashboard</div>
        <i className="bx bx-menu" id="btn"></i>
      </div>
      <ul className="nav-list">
        {/* <li>
          <Link to="/dashboard">
            <i className="bx bx-grid-alt"></i>
            <span className="links_name">Admin</span>
          </Link>
          <span className="tooltip">Admin</span>
        </li> */}
        <li>
          <Link to="data">
            <i className="bx bx-user"></i>
            <span className="links_name">Data</span>
          </Link>
          <span className="tooltip">Data</span>
        </li>
        <li>
          <Link to="employee">
          <i className="bx bx-grid-alt"></i>
            <span className="links_name">Food item</span>
          </Link>
          <span className="tooltip">Food item</span>
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
