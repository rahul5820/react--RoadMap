import { useState } from "react";

// import viteLogo from '/vite.svg'
import "./App.css";

function App() {
  const [Colour, SetColour] = useState("cyan");

  return (
    <div className="w-full h-screen" style={{ backgroundColor: Colour }}>
      <div className="font-bold text-4xl content-center">
      
        Background Changer
      </div>
      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
        <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-xl">
          <button
            onClick={() => SetColour("Blue")}
            className="px-4 outline-none py-1 rounded-full shadow-lg text-white"
            style={{ backgroundColor: "blue" }}
          >
            Blue
          </button>
          <button
            onClick={() => SetColour("yellow")}
            className="px-4 outline-none py-1 rounded-full shadow-lg text-black"
            style={{ backgroundColor: "yellow" }}
          >
            Yellow
          </button>
          <button
            onClick={() => SetColour("Green")}
            className="px-4 outline-none py-1 rounded-full shadow-lg text-white"
            style={{ backgroundColor: "green" }}
          >
            Green
          </button>
          <button
            onClick={() => SetColour("Red")}
            className="px-4 outline-none py-1 rounded-full shadow-lg text-white"
            style={{ backgroundColor: "red" }}
          >
            Red
          </button>
          <button
            onClick={() => SetColour("Pink")}
            className="px-4 outline-none py-1 rounded-full shadow-lg text-black"
            style={{ backgroundColor: "pink" }}
          >
            Pink
          </button>
          <button
            onClick={() => SetColour("Purple")}
            className="px-4 outline-none py-1 rounded-full shadow-lg text-black"
            style={{ backgroundColor: "purple" }}
          >
            Purple
          </button>
          <button
            onClick={() => SetColour("Black")}
            className="px-4 outline-none py-1 rounded-full shadow-lg text-white"
            style={{ backgroundColor: "Black" }}
          >
            Black
          </button>
          <button
            onClick={() => SetColour("White")}
            className="px-4 outline-none py-1 rounded-full shadow-lg textt-black"
            style={{ backgroundColor: "white" }}
          >
            White
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
