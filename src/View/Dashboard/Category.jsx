import React from 'react'
import Header from '../Dashboard/Partial/HeaderCategory'
import Table from '../Dashboard/Partial/TableCategory'

function Category(){
    return(
      <section>
        <div className="container">
            <Header/>
            <Table/>
        </div>
      </section>
    )
}
export default Category