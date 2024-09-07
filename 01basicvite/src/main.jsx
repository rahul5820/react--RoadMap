import React from 'React'
import { createRoot } from 'react-dom/client'
// import App from './App.jsx'
import './index.css'


// function Dj(){
//    return(
//     <h1>HuiHui</h1>
//    )
// }

// function ReactElement(){
//   return( <a href='https://www.google.com'target='_blank'>Visit Google</a>)
 
// }

const variable="this is variable"

const Same = React.createElement(
  "a",
  {href:'https://google.com', target:'_blank'},
 'visit proudly' 
 ,
 variable,
)

createRoot(document.getElementById('root')).render(
  
  
   Same

)
