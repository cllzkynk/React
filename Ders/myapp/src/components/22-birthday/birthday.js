import React ,{useEffect, useState} from 'react'
import Person from './person'
import data from '../../assets/data/persons.json'
import { Button } from 'react-bootstrap';

const Birthday = () => {

  const [people,setPeople]=useState(data);
    
 

  return (
    <div className="p-3">
      <h1>Bugun Doganlar</h1>
      <p>Bugun dogan {people.length} kisi bulundu</p>
{people.map((item) => <Person name={item.name} age={item.age}  image={item.image} key={item.id}/>)}

 <Button variant="danger"  onClick={()=>setPeople([])}>Temizle</Button>
    </div>
  )
}
export default Birthday