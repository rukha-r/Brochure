import React, { useState } from "react";
import "../App.scss";

function TourInfo({ id, img, destination, price, duration, information, remove }) {
  const [show, setShow] = useState(false);
  const toggleInfo = () => {
    setShow(!show);
  }
  return (
    <div className="card">
      <div className="main-wrapper">
        <img
          className="image"
          src={img}
          alt="tour_picture"         
        />
        <p className="destination">Best of {destination}<br/><hr/><small className="duration">{duration}</small></p>
        <p className="price"><b>{price}</b></p>
        <div className="information">{show ? information : `${information.substring(0,200)}. . . . `} <b onClick={toggleInfo} className='read_more' title='Read more about this topic...'>{show ? ' read less' : ' read more'}</b>
        <div className="button-holder">
        <button className='button' onClick={() => remove(id)}>Not Interested</button>
        </div>
        </div>
      </div>
    </div>
  );
}

export default TourInfo;
