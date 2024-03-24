import React from "react";
import '../../App.css'
import '../../assets/styles/components/login.css'

const LoginPage = () => {
   
    return (
       <section className="login-page ">
            <form action="" className="login-form">
             <div><label htmlFor="">Username :</label> <input type="text" className="name-input" /></div>
             <div><label htmlFor=""> Password :</label> <input type="text" className="password-input" /></div>
             <button className="login-btn">Login</button>

            </form>
       </section> 
    );
};

export default LoginPage;
