import { useNavigate } from "react-router-dom"
import { useEffect } from "react"


function OrderSummary() {
  const navigate = useNavigate();

  useEffect(()=>{


     const timer= setTimeout(()=>{
    navigate('/')
    },3000)

    return ()=> clearTimeout(timer)

  },[navigate])
  return (
    <>
    <h1 style={{ color: "green", transition: "0.3s" }}>
  🎉 Challenge Joined Successfully!

</h1>
<p> redirecting Home in 3 Second...</p>

      <button onClick={()=>navigate(-1)}>Back To Home</button>
    </>
  )
}

export default OrderSummary
