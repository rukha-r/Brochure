import React, { useState } from "react";
import { FaSadTear } from 'react-icons/fa';
import data from "./data";
import './App.scss';
import TourInfo from "./components/TourInfo";

function App() {
  const [data_info, setData] = useState(data);
  const remove = (id) => {
  	const new_data = [...data_info.filter(tour => tour.id != id)];
  	setData(new_data);
  }
  const refresh = () => {
  	setData(data);
  }
  return (
    <div>
    <div className='header'>
    <h2>Our Tours</h2>
      <hr/>
    </div>
    <div className='empty_page'>
    {data_info.length ? '' : <div>Nothing left to show<br/><br/><FaSadTear className='face'/><br/><br/><button className='refresh-button' onClick={refresh}>Refresh</button></div>}
    </div>
      {data_info.map((tour) => (
        <TourInfo
          destination={tour.destination}
          img={tour.image}
          duration={tour.duration}
          price={tour.price}
          information={tour.information}
          id={tour.id}
          key={tour.id}
          remove={remove}
        />
      ))}
    </div>
  );
}

export default App;
