// import React from 'react'
// import App from "./App"



function Card({myArray,name}) {
   
  console.log(myArray)
     
  return(

  
    <div>
      
    
    <figure className="bg-slate-100 rounded-xl p-3 dark:bg-slate-800 ">
    <img className="w-24 h-24 rounded-full mx-auto" src="https://images.pexels.com/photos/27738895/pexels-photo-27738895/free-photo-of-yilki-atlari.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" width="384" height="512" />
    <div className="pt-6 text-center space-y-4">
      <blockquote>
        <p className="text-lg font-medium">
        “Tailwind CSS is the only framework that I've seen scale
          on large teams. It’s easy to customize, adapts to any design,
          and the build size is tiny.”
        </p>
      </blockquote>
      <figcaption className="font-medium">
        <div className="text-sky-500 dark:text-sky-400">
          
        </div>
        <div className="text-slate-700 dark:text-slate-500">
         {name}
        </div>
      </figcaption>
    </div>
  </figure>
 
  
    
  
  
    </div>
  )
}


export default Card
