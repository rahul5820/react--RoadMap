

import { useNavigate } from "react-router-dom";

const Home = () => {
  const reachTo= useNavigate();
  return (

    <div className="home-container">
      <h1>📵 Break Free from Mobile Addiction</h1>
      <p>
        Are you constantly checking your phone?  
        Spending hours scrolling reels and missing real-life moments?  
           Its time to take a step back.
      </p>

      <img
        src="https://cdn.pixabay.com/photo/2017/01/27/18/50/male-2013929_1280.jpg"
        alt="Break Phone Addiction"
        className="hero-image"
      />

      <h2>✨ Start Your Detox Journey Today</h2>
      <ul>
        <li>🚶‍♂️ Spend more time offline with family & nature</li>
        <li>📖 Read books, not reels</li>
        <li>🧘‍♀️ Practice mindfulness</li>
        <li>📱 Use your phone, don’t let it use you</li>
      </ul>

      
      <button onClick={()=>reachTo('order-summary')}>click to Join</button>
    </div>
  );
};

export default Home;
