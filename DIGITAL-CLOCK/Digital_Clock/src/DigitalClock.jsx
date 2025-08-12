import { useState, useEffect } from "react";

function DigitalClock() {
  const [time, SetTime] = useState(new Date());  // useState () hook to store the current time in the component's state


  useEffect(()=>{    // useEffect for updating on each render 
    const intervalId = setInterval(()=>{
        SetTime(new Date())
    },1000)

    // console.log(new Date());

    return(()=>{
        clearInterval(intervalId)
    })
    

  },[])



  function formatTime(){     // main funcrion for  creating time
    let Hours=time.getHours();
    const Minutes=time.getMinutes();
    const Seconds=time.getSeconds();
    const Meridiem = Hours>12?"PM":"AM";


    Hours = Hours%12||12;

     return `${padZero(Hours)}:${padZero(Minutes)}:${padZero(Seconds)}:${padZero(Meridiem)}`


  }
  function padZero(Numbers){
    
   return(Numbers<10?"0":"")+  Numbers;

  }


  return (
    <>
      <div className=" Digital-Clock-Container">
        <div className="Digital-Clock">
          <span>{formatTime()}</span>
        </div>
      </div>
    </>
  );
}

export default DigitalClock;
