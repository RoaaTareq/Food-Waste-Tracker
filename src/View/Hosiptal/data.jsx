import React from 'react'
import CardData from './analysisData/Card'
import TableTopItem from './analysisData/TableTopItem'
import ChartItem from './analysisData/ChartTable'
function Data(){
  return(
<section>
  <div className="container">
    <div className="d-flex pt-3">
      <h1 className='main-title'>Data analysis-Hospital</h1>
    </div>
    <CardData/>
    <TableTopItem/>
    <ChartItem/>
  </div>
</section>




  )
}

export default Data 