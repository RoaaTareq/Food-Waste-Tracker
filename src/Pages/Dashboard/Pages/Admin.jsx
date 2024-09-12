import React from 'react'
import Header from './partial/Header'
import TableInfo from './partial/Table'

function Admin (){
    return(
<section>
    <div className="container">
        <Header/>
        <TableInfo/>
    </div>
</section>
    )
}

export default Admin