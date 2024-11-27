import React from "react";
import { Link } from 'react-router-dom';


function HeaderHospital() {
    

   
   

   

    return (
        <div>
            <div className="d-flex justify-content-between pt-5">
                <h1 className="main-title">Hospital Info</h1>
                <div>
                    <Link  to='/dashboard/hospital/add-hospital'className=" btn btn-primary btn-add mb-2" >
                       Add Hosiptal +
                    </Link>
                </div>
            </div>

          
        </div>
    );
}

export default HeaderHospital;
