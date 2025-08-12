

import {useState} from 'react';


function FuncName() {

    const [count, setCount] = useState(0);

// function Increament(){
//     setCount((count)=>count+1);
//     setCount((count)=>count+1);
  

// }
// function Decreament(){
//     setCount(count -1);
//     setCount(count -1);
//     setCount(count -1);

// }

  return (
    <div>
   <h1>Count:{count}</h1>
    <button onClick={()=>{setCount(count=>count+2)}}> Increase+</button>
    {/* <button onClick={Decreament}> - Decrease</button> */}
      
    </div>
  )
}

export default FuncName
