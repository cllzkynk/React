import React from "react";
import {Button} from "react-bootstrap"



const Country = ({ index, data,onRemoveCountry }) => {
  const { flags, name, population, capital ,ccn3 } = data;
  return (
    <tr>
      <td>{index + 1}</td>
      <td>
        <img src={flags.png} className="img-fluid" width="100" />
      </td>
      <td>{name.common}</td>
      <td>{population}</td>
      <td>{capital}</td>
      <td><Button variant ="danger" onClick={()=>onRemoveCountry(ccn3)}>Sil</Button> </td>
    </tr>
  );
};
export default Country;
