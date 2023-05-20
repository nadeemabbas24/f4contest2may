import React from 'react';
import './Row.css';

export default function Row(props) {
  let perChange = (props.obj.price_change_24h).toFixed(2);
  let perColor = perChange < 0? "red" : "green";
  return (
    <tr key = {props.obj.id}>
        <td><img src={props.obj.image} alt="crpto image"/></td>
        <td style={{textAlign:"left"}}>{props.obj.name}</td>
        <td>{(props.obj.symbol).toUpperCase()}</td>
        <td>${props.obj.current_price}</td>
        <td>{props.obj.total_volume}</td>
        <td style={{color:perColor}}>{perChange}%</td>
        <td>Mkt Cap: ${props.obj.market_cap}</td>
    </tr>
  )
}
