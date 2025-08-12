import {useState} from 'react'

function ArrayOfObj() {
  const[cars,setCar]=useState([]);
  const [carYear,setCarYear]=useState(new Date().getFullYear());
  const [carMake,setCarMake]=useState("");
  const [carModel,setCarModel]=useState("");
  const [carColor,setCarColor]=useState("");



  function  addCar(){

 const NewCar={
       year:carYear,
       make:carMake,
       model:carModel,
       color:carColor

 }
 setCar(c=>[...c,NewCar]);


setCarYear(new Date().getFullYear());
setCarMake("");
setCarModel("");
setCarColor('')


  }




function handleRemoveCar(index){
  setCar(cars.filter((_,i)=>i!==index))
}

  function handleCaryearChange(e){
    setCarYear(e.target.value);
  };
  function handleCarMakeChange(e){
    setCarMake(e.target.value);}

function handleCarModelChange(e){
    setCarModel(e.target.value);
}
function handleCarColorChange(e){
 setCarColor(e.target.value)
}
  return (
    <div className='car-detail'>
    <h1>car Details</h1>
    <ul>{cars.map((car,index)=><li key={index} onClick={()=>handleRemoveCar(index)}>{ `${car.year}  ${car.make}  ${car.model}  ${car.color}`}</li>)}</ul>
     <input type='number'  value={carYear} onChange={handleCaryearChange} placeholder='enter car year'/>
     <input type='text' value={carMake} onChange={handleCarMakeChange} placeholder='enter car make'/>
     <input type='text' value={carModel} onChange={handleCarModelChange} placeholder='eneter car model'/>
     <input type='text' value={carColor} onChange={handleCarColorChange} placeholder='eneter car color'/>
     
   <button onClick={addCar}>Add Car</button>
    </div>
  )
}

export default ArrayOfObj;
