import { Outlet } from "react-router-dom"

function Books() {
  return (
    <div>
      <h1>Book 1</h1>
      <h1> Book 2</h1>
      <h1> Book 3</h1>
      <Outlet/>
    </div>
  )
}

export default Books
