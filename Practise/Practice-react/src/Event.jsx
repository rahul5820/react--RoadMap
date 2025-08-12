


function Event() {

    let   ButtonChange= (e)=>{
      { e.target.textContent="hlw"};


    }
  return (
    
      <button className="Button-Style" onClick={(e)=>ButtonChange(e)}><h1>Click me </h1></button>
    
  )
}



export default Event;
