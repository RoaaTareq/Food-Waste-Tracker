import React from "react";
import { Link } from 'react-router-dom';

import CreateCategory from "../Models/CreateCategory";

function HeaderCategory() { 


  
   

  

    

    return (
        <div>
            <div className="d-flex justify-content-between pt-5">
                <h1 className="main-title">Category Info</h1>
                <div>
                    <Link to="/dashboard/category/add-category" className="btn btn-primary btn-add mb-2 " >
                        Add Category +
                    </Link>
                </div>
            </div>

            
        </div>
    );
}

export default HeaderCategory;
