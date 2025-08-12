import {useEffect} from 'react'
import { useNavigate } from 'react-router-dom';
function NoMatch() {
  const navigate = useNavigate();
   

  useEffect(()=>{

  const timer= setTimeout(()=>{
    navigate('/')
  },3000)
   
  return ()=>clearTimeout(timer)

  },[navigate])


  return (
    <div style={{display:"flex",justifyContent:"center",alignItems:"center" ,margin:"4px 5px"}}>
    <h1> No page Found</h1>

    <h1 style={{color:'blue',fonWeight:'bold'}}>Redirecting back in 3 second..</h1>
    </div>
  )
}

export default NoMatch;
