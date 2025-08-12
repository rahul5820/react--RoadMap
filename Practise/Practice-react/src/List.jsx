
function List(){

    const fruits = [
        {id:1, Name: "apple", calories: 95 },
        {id:2, Name: "banana", calories: 105 },
        {id:3, Name: "cherry", calories: 50 },
        {id:4, Name: "date", calories: 60 },
      {id:6, Name: "elderberry", calories: 30 },
      {id:7, Name: "fig", calories: 74 },
      {id:8, Name: "grape", calories: 67 },
     
    ];
    // fruits.sort((a,b)=>a.Name.localeCompare(b.Name))
    fruits.sort((a,b)=> b.calories -a.calories )

    const   filteredFruits = fruits.filter((fruit) => fruit.calories >60);

    const listItem=filteredFruits.map((fruits=><li key={fruits.id}>{fruits.Name}&nbsp;{fruits.calories} </li>))


    return <><ol>{listItem}</ol></>

}

export default List;