import React from 'react'
import Header from '../Dashboard/Partial/HeaderHoispital'
import Table from '../Dashboard/Partial/TableHoipital'

function Hoispital(){
    return(
      <section>
        <div className="container">
            <Header/>
            <Table/>
        </div>
      </section>
    )
}
export default Hoispital