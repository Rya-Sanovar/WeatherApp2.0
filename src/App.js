import { useEffect } from "react";
import { useState } from "react";
import Search from "./components/Search.js";
import Card1 from "./components/Card1.js";
import Card2 from "./components/Card2.js";


export default function App() {

  let [city, setCity] = useState("Paris");
  let [dayNumber, setDayNumber] = useState(1);

  const apiKey = "762d7ae0fa04febf1d3f0e5ef97a8d4c";

  const url = "https://api.openweathermap.org/data/2.5/forecast?q="+city+"&units=metric&appid="+apiKey;

  let day1, day2, day3, day4;
  let a1, a2, a3, a4;
  let place;
  let icon1, icon2, icon3, icon4;
  let desc1, desc2, desc3, desc4;
  let temp1, temp2, temp3, temp4;
  let hum1, hum2, hum3, hum4;
  let speed1, speed2, speed3, speed4;
  let pop1, pop2, pop3, pop4;
  let main1, main2, main3, main4;

  function parseWeather(data) {
    console.log("inside");
    const cityname = data.city.name;
    const country = data.city.country;
     place = cityname + ", " + country;
    // DAY 1
    let date1 = data.list[0].dt_txt;
     icon1 = data.list[0].weather[0].icon;
     desc1 = data.list[0].weather[0].description;
     temp1 = data.list[0].main.temp;
     hum1 = data.list[0].main.humidity;
     speed1 = Math.round(Number(data.list[0].wind.speed) * 3.6 * 100) / 100;
     pop1 = data.list[0].pop;
     main1 = data.list[0].weather[0].main;
    // DAY 2
    let date2 = data.list[7].dt_txt;
     icon2 = data.list[7].weather[0].icon;
     desc2 = data.list[7].weather[0].description;
     temp2 = data.list[7].main.temp;
     hum2 = data.list[7].main.humidity;
     speed2 = Math.round(Number(data.list[7].wind.speed) * 3.6 * 100) / 100;
     pop2 = data.list[7].pop;
     main2 = data.list[7].weather[0].main;
    // DAY 3
    let date3 = data.list[15].dt_txt;
     icon3 = data.list[15].weather[0].icon;
     desc3 = data.list[15].weather[0].description;
     temp3 = data.list[15].main.temp;
     hum3 = data.list[15].main.humidity;
     speed3 = Math.round(Number(data.list[15].wind.speed) * 3.6 * 100) / 100;
     pop3 = data.list[15].pop;
     main3 = data.list[15].weather[0].main;
    // DAY 4
    let date4 = data.list[22].dt_txt;
     icon4 = data.list[22].weather[0].icon;
     desc4 = data.list[22].weather[0].description;
     temp4 = data.list[22].main.temp;
     hum4 = data.list[22].main.humidity;
     speed4 = Math.round(Number(data.list[22].wind.speed) * 3.6 * 100) / 100;
     pop4 = data.list[22].pop;
     main4 = data.list[22].weather[0].main;

    const months = ["","January","February","March","April","May","June", "July","August","September","October","November","December"];

    function dateList(date) {
      let myarr1 = date.split(" ");
      date = myarr1[0];
      let myArr2 = date.split("-");
      let year = myArr2[0];
      let month = months[Number(myArr2[1])];
      let d = myArr2[2];
      return [d, month, year];
    }

    const arr1 = dateList(date1);
     a1 = `${arr1[0]} ${arr1[1]}, ${arr1[2]}`;
    let d = new Date(a1);

    const arr2 = dateList(date2);
     a2 = `${arr2[0]} ${arr2[1]}, ${arr2[2]}`;
    let dx = new Date(a2);

    const arr3 = dateList(date3);
     a3 = `${arr3[0]} ${arr3[1]}, ${arr3[2]}`;
    let dy = new Date(a3);

    const arr4 = dateList(date4);
     a4 = `${arr4[0]} ${arr4[1]}, ${arr4[2]}`;
    let dz = new Date(a4);

    const weekday = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
     day1 = weekday[d.getDay()];
     day2 = weekday[dx.getDay()];
     day3 = weekday[dy.getDay()];
     day4 = weekday[dz.getDay()];
     console.log(day1);
  }

  function search(city) {
    setCity(city);
  }

  function changeDay(number) {
    setDayNumber(number);
  }
  
  let template1 = (
    <div className="App">
      <Search searching={search} />

      <div className="Card Loading">
        <Card1 day={day1} date={a1} place={place} 
        icon={"https://openweathermap.org/img/wn/" + icon1 + ".png"} desc={desc1} temp={Math.round(Number(temp1)) + "°C"}
      />

        <Card2 changeDay={changeDay} pop={pop1 + " %"} humidity={hum1 + " %"} speed={speed1 + " km/h"}
          day1={day1.substr(0, 3)} icon1={"https://openweathermap.org/img/wn/" + icon1 + ".png"} temp1={Math.round(Number(temp1)) + "°C"}
          day2={day2.substr(0, 3)} icon2={"https://openweathermap.org/img/wn/" + icon2 + ".png"} temp2={Math.round(Number(temp2)) + "°C"}
          day3={day3.substr(0, 3)} icon3={"https://openweathermap.org/img/wn/" + icon3 + ".png"} temp3={Math.round(Number(temp3)) + "°C"}
          day4={day4.substr(0, 3)} icon4={"https://openweathermap.org/img/wn/" + icon4 + ".png"} temp4={Math.round(Number(temp4)) + "°C"}
        />
      </div>
    </div>
  );

  let template2 = (
    <div className="App">
      <Search searching={search} />

      <div className="Card Loading">
        <Card1 day={day2} date={a2} place={place} 
        icon={"https://openweathermap.org/img/wn/" + icon2 + ".png"} desc={desc2} temp={Math.round(Number(temp2)) + "°C"}
      />

        <Card2 changeDay={changeDay} pop={pop2 + " %"} humidity={hum2 + " %"} speed={speed2 + " km/h"}
          day1={day1.substr(0, 3)} icon1={"https://openweathermap.org/img/wn/" + icon1 + ".png"} temp1={Math.round(Number(temp1)) + "°C"}
          day2={day2.substr(0, 3)} icon2={"https://openweathermap.org/img/wn/" + icon2 + ".png"} temp2={Math.round(Number(temp2)) + "°C"}
          day3={day3.substr(0, 3)} icon3={"https://openweathermap.org/img/wn/" + icon3 + ".png"} temp3={Math.round(Number(temp3)) + "°C"}
          day4={day4.substr(0, 3)} icon4={"https://openweathermap.org/img/wn/" + icon4 + ".png"} temp4={Math.round(Number(temp4)) + "°C"}
        />
      </div>
    </div>
  );

  let template3 = (
    <div className="App">
      <Search searching={search} />

      <div className="Card Loading">
        <Card1 day={day3} date={a3} place={place} 
        icon={"https://openweathermap.org/img/wn/" + icon3 + ".png"} desc={desc3} temp={Math.round(Number(temp3)) + "°C"}
      />

        <Card2 changeDay={changeDay} pop={pop3 + " %"} humidity={hum3 + " %"} speed={speed3 + " km/h"}
          day1={day1.substr(0, 3)} icon1={"https://openweathermap.org/img/wn/" + icon1 + ".png"} temp1={Math.round(Number(temp1)) + "°C"}
          day2={day2.substr(0, 3)} icon2={"https://openweathermap.org/img/wn/" + icon2 + ".png"} temp2={Math.round(Number(temp2)) + "°C"}
          day3={day3.substr(0, 3)} icon3={"https://openweathermap.org/img/wn/" + icon3 + ".png"} temp3={Math.round(Number(temp3)) + "°C"}
          day4={day4.substr(0, 3)} icon4={"https://openweathermap.org/img/wn/" + icon4 + ".png"} temp4={Math.round(Number(temp4)) + "°C"}
        />
      </div>
    </div>
  );

  let template4 = (
    <div className="App">
      <Search searching={search} />

      <div className="Card Loading">
        <Card1 day={day4} date={a4} place={place} 
        icon={"https://openweathermap.org/img/wn/" + icon4 + ".png"} desc={desc4} temp={Math.round(Number(temp4)) + "°C"}
      />

        <Card2 changeDay={changeDay} pop={pop4 + " %"} humidity={hum4 + " %"} speed={speed4 + " km/h"}
          day1={day1.substr(0, 3)} icon1={"https://openweathermap.org/img/wn/" + icon1 + ".png"} temp1={Math.round(Number(temp1)) + "°C"}
          day2={day2.substr(0, 3)} icon2={"https://openweathermap.org/img/wn/" + icon2 + ".png"} temp2={Math.round(Number(temp2)) + "°C"}
          day3={day3.substr(0, 3)} icon3={"https://openweathermap.org/img/wn/" + icon3 + ".png"} temp3={Math.round(Number(temp3)) + "°C"}
          day4={day4.substr(0, 3)} icon4={"https://openweathermap.org/img/wn/" + icon4 + ".png"} temp4={Math.round(Number(temp4)) + "°C"}
        />
      </div>
    </div>
  );

  useEffect(() => {
    fetch(url)
    .then(response => response.json())
    .then((data) => parseWeather(data))
    .catch((e) => console.log("Error with fetching data: " + e.message));

  }, [city]);

  switch(dayNumber) {
    case 1:
      return template1;
    case 2:
      return template2;
    case 3:
      return template3;
    case 4:
      return template4;
  }
  
}