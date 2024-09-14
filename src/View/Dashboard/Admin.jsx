import React from 'react'
import Header from '../Dashboard/Partial/HeaderAdmin'
import Table from '../Dashboard/Partial/TableAdmin'

function Admin(){
    return(
      <section>
        <div className="container">
            <Header/>
            <Table/>
        </div>
      </section>
    )
}
export default Admin