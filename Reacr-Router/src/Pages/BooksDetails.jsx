import { useParams } from "react-router-dom"

const BooksDetails = () => {
    const params=useParams();
    const bookId=params.bookId;

  return (
    <h1> Details of the book {bookId} </h1>
  )
}












export default BooksDetails