import { useState } from "react";

const InputValue = () => {
  const [inputvalue, setinputvalue] = useState("");
  const [foodList, setfoodList] = useState([]);

  function handleAddList() {
    if (inputvalue.trim() !== "") {
      setfoodList([...foodList, inputvalue]); 
      setinputvalue(""); 
    }
  }

  return (
    <>
      <input
        type="text"
        placeholder="Enter Your Value"
        value={inputvalue}
        onChange={(e) => setinputvalue(e.target.value)}
      />

      <button onClick={handleAddList}>ADD</button>

      <ul>
        {foodList.map((fooditem, index) => (
          <li key={index}>{fooditem}</li>
        ))}
      </ul>
    </>
  );
};

export default InputValue;
