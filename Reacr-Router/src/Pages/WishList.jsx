

const WishList = () => {
    const Product=["prdct1","prdct1","prdct3","prdct44"]
  return (
  <ul>
    {Product.map((data)=>{
        return <li key={data}>{data}</li>
    })}
  </ul>
  )
}

export default WishList