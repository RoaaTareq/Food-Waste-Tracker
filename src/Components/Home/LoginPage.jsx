import React from "react";
import '../../App.css'
import '../../assets/styles/components/login.css'

const LoginPage = () => {
   
    return (
       <section className="login-page ">
       
       <div className="main">  	
	
			<div className="signup">
				<form>
					
					<input type="text" name="txt" placeholder="User name" required=""/>
					<input type="email" name="email" placeholder="Email" required=""/>
					<input type="password" name="pswd" placeholder="Password" required=""/>
					<button className="btnlogin">Sign up</button>
				</form>
			</div>

			
	</div>
       </section> 
    );
};

export default LoginPage;
