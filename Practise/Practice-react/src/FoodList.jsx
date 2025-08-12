import { useState } from "react";

function FoodList() {
  const [Meal, setMeal] = useState([
    "Apple",
    "Banana",
    "Cherry",
    "Date",
    "Elderberry",
    "Fig",
    "Grape",
    "Honeydew",
    "Ice Cream",
    "Jackfruit",])

    function AddFoodItem(){
        let AddedItem=document.getElementById("food-added").value;
        document.getElementById("food-added").value="";
        setMeal(  Meal=>[...Meal, AddedItem]);

    }
    function handleRemove(index){
        setMeal(Meal.filter((_,i)=>i!==index))

    }

  return <div className="Food-list-Component">
    <h1>Meal Include:</h1>

    <ul>{Meal.map((food,index)=><li key ={index} onClick={()=>handleRemove(index)}>{food}</li>)}</ul>
    <input type='text' placeholder="Enter food item you want to add" id="food-added"></input>
    <button onClick={AddFoodItem}>ADD Food Item</button>

  </div>;
}

export default FoodList;
