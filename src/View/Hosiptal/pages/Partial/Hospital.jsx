import React from 'react'
import Header from './Header'
import TableHospitalInfo from './Table'


function Hosiptal (){
    return(
        <section>
            <div className="container">
                <Header/>
                <TableHospitalInfo/>
            </div>
        </section>
    )
}

export default Hosiptal