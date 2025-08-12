
import {useState} from 'react'

function Employstatus() {

    const [name, setName] = useState('guest');
    const [age ,setAge]=useState(0);
    const [isEmployed,setEmployStatus]=useState(true)


  return (
    <div>
      
      <p1>{`My Name is ${name} and  I am ${age} years old  ${isEmployed?"yes I am employed":"no I am not employed"} `}</p1>
      <br/>
      <button onClick={()=>setName("rahul")}> Change Name</button>

      <button onClick={()=>setAge(age=>age+2)}>set age</button>

      <button onClick={()=>setEmployStatus(!isEmployed)} >Change Employ Status</button> 

    </div>
  )
}

export default Employstatus
