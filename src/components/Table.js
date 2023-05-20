import React from 'react'
import Row from './Row'
import './Table.css'

export default function Table(props) {
  return (
    <div>
        <table>
          <tr>
            <th>Crypto</th>
            <th>Crypto Name</th>
            <th>Crypto Symbol</th>
            <th>Current Price</th>
            <th>Total Volume</th>
            <th>Percent Change</th>
            <th>Market Capital</th>           
          </tr>
        {   props.data.map((item)=>(
             <Row obj={item}></Row>
             ))
        }           
        </table>

    </div>
  )
}
