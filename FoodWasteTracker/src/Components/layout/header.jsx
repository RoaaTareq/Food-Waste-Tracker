import React from "react";
import "../../assets/styles/components/header.css";
import '../../App.css'

const Header = () => {
    return (
        <header className="main-header">
            <div className="container">
                <div className="d-flex justify-content-between align-items-center">
                    <div>
                        <h1 className="main-title">Food Waste Tracker</h1>
                    </div>
                    <ul class="Main-list ">
                        <li>Home</li>
                        <li>About</li>
                        <li>Career</li>
                        <li>Contact</li>
                    </ul>
                    <div>
                        <button className="btn-login">login</button>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;
