import React from "react";

function Card2(props) {
    return(
        <div className="Card-2">
              <table cellPadding="4">
                <tbody>
                  <tr>
                      <td>PRECIPITATION</td>
                      <td>{props.pop}</td>
                  </tr>
                  <tr>
                      <td>HUMIDITY</td>
                      <td>{props.humidity}</td>
                  </tr>
                  <tr>
                      <td>WIND</td>
                      <td>{props.speed}</td>
                  </tr>
                </tbody>
              </table>

              <div className="Weekdays">
                  <div className="Days One" /*onClick={props.changeDay(1)}*/>
                      <img src={props.icon1} alt="" className="icon" />
                      <p id="d1">{props.day1}</p>
                      <p id="t1">{props.temp1}</p>
                  </div>
                  <div className="Days Two" /*onClick={props.changeDay(2)}*/>
                      <img src={props.icon2} alt="" className="icon" />
                      <p id="d2">{props.day2}</p>
                      <p id="t2">{props.temp2}</p>
                  </div>
                  <div className="Days Three" /*onClick={props.changeDay(3)}*/>
                      <img src={props.icon3} alt="" className="icon" />
                      <p id="d3">{props.day3}</p>
                      <p id="t3">{props.temp3}</p>
                  </div>
                  <div className="Days Four" /*onClick={props.changeDay(4)}*/>
                      <img src={props.icon4} alt="" className="icon" />
                      <p id="d4">{props.day4}</p>
                      <p id="t4">{props.temp4}</p>
                  </div>
            </div>
        </div>
    );
}

export default Card2;