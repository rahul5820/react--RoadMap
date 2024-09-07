import "./App.css";
import Card from "./Card";
import CardBottom from "./CardBottom";

function App() {
  let username = {
    str: "rahul",
    age: 22,
  };
  let newarray = [34, 34, 22, 34];
  return (
    <>
      <h1 className="bg-green-400 text-zinc-950 p-4 rounded-xl">Day 7</h1>
      <Card
        name="Rahul"
        course="MCA"
        myobj={username}
        myArray={newarray}
        BtnText="Buy"
      />
      {/* <Card  name="Nina"BtnText="sell" /> */}
      <div className="flex flex-row margin-left: 1px">
        <CardBottom
          BtnText="Visit Me"
          ImgSrc={
            "https://images.pexels.com/photos/2047905/pexels-photo-2047905.jpeg?auto=compress&cs=tinysrgb&w=600"
          }
          Text="MacBook"
        />
        <CardBottom
          BtnText="Add "
          ImgSrc={
            "https://images.pexels.com/photos/170811/pexels-photo-170811.jpeg?auto=compress&cs=tinysrgb&w=600"
          }
          Text="Car"
        />
        <CardBottom
          BtnText="Add"
          ImgSrc={
            "https://images.pexels.com/photos/1342529/pexels-photo-1342529.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          }
          Text="Bottle"
        />
        <CardBottom
          BtnText="Visit Me"
          ImgSrc={
            "https://images.pexels.com/photos/15939921/pexels-photo-15939921/free-photo-of-leather-black-jordan-13-shoes.jpeg?auto=compress&cs=tinysrgb&w=600"
          }
          Text="Jordan"
        />
      </div>
    </>
  );
}

export default App;
