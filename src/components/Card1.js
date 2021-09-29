import React from "react";

function Card1(props) {


    return(
        <div className="Card-1">
              <div className="part1">
                  <h2 className="Day">{props.day}</h2>
                  <div className="Date">{props.date}</div>
                  <div className="Location">
                      <i className="fas fa-map-marker-alt"></i>
                      <span className="City">{props.place}</span>
                  </div>
              </div>
              <div className="part2">
                  <img src={props.icon} alt="" className="icon" height="90px" width="90px" />
                  <h1 className="Temp">{props.temp}</h1>
                  <div className="Description">{props.desc}</div>
              </div>
        </div>
    );
}

export default Card1;