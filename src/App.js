import { useEffect } from "react";
import { useState } from "react";
import Search from "./components/Search.js";
import Card1 from "./components/Card1.js";
import Card2 from "./components/Card2.js";
require("firebase/firestore");

export default function App(props) {

  let [day1, setDay1] = useState("");
  let [day2, setDay2] = useState("");
  let [day3, setDay3] = useState("");
  let [day4, setDay4] = useState("");
  let [a1, seta1] = useState("");
  let [place, setPlace] = useState("");
  let [icon1, setIcon1] = useState("");
  let [icon2, setIcon2] = useState("");
  let [icon3, setIcon3] = useState("");
  let [icon4, setIcon4] = useState("");
  let [desc1, setDesc1] = useState("");
  let [temp1, setTemp1] = useState("");
  let [temp2, setTemp2] = useState("");
  let [temp3, setTemp3] = useState("");
  let [temp4, setTemp4] = useState("");
  let [hum1, setHum1] = useState("");
  let [speed1, setSpeed1] = useState("");
  let [pop1, setPop1] = useState("");
  let [city, setCity] = useState("paris");
  let [lat,setLat] = useState("");
  let [lon,setLon] = useState("");

  const apiKey = "df90cc57d556d7bad5a5659446b1dd68";
  const mapboxkey = "pk.eyJ1IjoiZWx5bWFzLW1hZ3VzIiwiYSI6ImNrdTl5aWViNTBibXgyb2xtbXgzdGVwNDUifQ.8TZFi8w6Z524c9Shn-DxRg";
  const url = "https://api.openweathermap.org/data/2.5/forecast?q="+city+"&units=metric&appid="+apiKey;

  let [loading, setLoading] = useState(true);

  navigator.geolocation.watchPosition(loc => {
    setLat(loc.coords.latitude);
    setLon(loc.coords.longitude);
    console.log("this is");
    console.log(lon, lat);
    reverseGeocode(lat, lon);
  });

  function reverseGeocode(lat, lon) {
    fetch(`https://api.mapbox.com/geocoding/v5/mapbox.places/${lon},${lat}.json?access_token=${mapboxkey}`)
    .then((response) => response.json())
    .then((data) => {
      setCity(data.features[0].context[0].text);
      props.db.collection("location-history").doc(`${city}`).set({
        current_location: `${city}`
      })
      .then(() => {
        console.log("Document successfully written!");
      })
      .catch((error) => {
        console.error("Error writing document: ", error);
      });   
    })
    .catch((e) => console.log("Error with reverse geocoding: " + e.message));
  }

  useEffect(() => { 
    fetch(url)
    .then(response => response.json())
    .then((data) => {
      parseWeather(data);
      console.log("out of parse now");
      setLoading(false);
    })
    .catch((e) => console.log("Error with fetching data: " + e.message));
  }, [city]);

  function parseWeather(data) {
    console.log(data);
    const cityname = data.city.name;
    const country = data.city.country;
     setPlace(cityname + ", " + country);
    // DAY 1
    let date1 = data.list[0].dt_txt;
     setIcon1(data.list[0].weather[0].icon);
     setDesc1(data.list[0].weather[0].description);
     setTemp1(Math.round(Number(data.list[0].main.temp)));
     setHum1(data.list[0].main.humidity);
     setSpeed1(Math.round(Number(data.list[0].wind.speed) * 3.6 * 100) / 100);
     setPop1(data.list[0].pop);
    // DAY 2
    let date2 = data.list[7].dt_txt;
     setIcon2(data.list[7].weather[0].icon);
     setTemp2(Math.round(Number(data.list[7].main.temp)));
    // DAY 3
    let date3 = data.list[15].dt_txt;
     setIcon3(data.list[15].weather[0].icon);
     setTemp3(Math.round(Number(data.list[15].main.temp)));
    // DAY 4
    let date4 = data.list[22].dt_txt;
     setIcon4(data.list[22].weather[0].icon);
     setTemp4(Math.round(Number(data.list[22].main.temp)));

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
    let d = new Date(`${arr1[0]} ${arr1[1]}, ${arr1[2]}`);
    seta1(`${arr1[0]} ${arr1[1]}, ${arr1[2]}`);

    const arr2 = dateList(date2);
    let dx = new Date(`${arr2[0]} ${arr2[1]}, ${arr2[2]}`);

    const arr3 = dateList(date3);
    let dy = new Date(`${arr3[0]} ${arr3[1]}, ${arr3[2]}`);

    const arr4 = dateList(date4);
    let dz = new Date(`${arr4[0]} ${arr4[1]}, ${arr4[2]}`);

    const weekday = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
     setDay1((weekday[d.getDay()]).substr(0,3));
     setDay2((weekday[dx.getDay()]).substr(0,3));
     setDay3((weekday[dy.getDay()]).substr(0,3));
     setDay4((weekday[dz.getDay()]).substr(0,3));
  }

  function search(city) {
    setCity(city);   
    props.db.collection("search-history").add({
      city_searched: `${city}`
    })
    .then((docRef) => {
      console.log("Document written with ID: ", docRef.id);
    })
    .catch((error) => {
      console.error("Error adding document: ", error);
    }); 
    
    // db.collection("search-history").add({
    //   city_name : city
    // });
  }
  
  if(loading === false) { //if data has been successfully fetched.
    let template1 = (
      <div className="App">
        <Search searching={search} />

        <div className="Card">
          <Card1 day={day1} date={a1} place={place} 
          icon={"https://openweathermap.org/img/wn/" + icon1 + ".png"} desc={desc1} temp={temp1 + "°C"}
        />

          <Card2 pop={pop1 + " %"} humidity={hum1 + " %"} speed={speed1 + " km/h"}
            day1={day1} icon1={"https://openweathermap.org/img/wn/" + icon1 + ".png"} temp1={temp1 + "°C"}
            day2={day2} icon2={"https://openweathermap.org/img/wn/" + icon2 + ".png"} temp2={temp2 + "°C"}
            day3={day3} icon3={"https://openweathermap.org/img/wn/" + icon3 + ".png"} temp3={temp3 + "°C"}
            day4={day4} icon4={"https://openweathermap.org/img/wn/" + icon4 + ".png"} temp4={temp4 + "°C"}
          />
        </div>
      </div>
    );

    return template1;
  }
  else {
    return (
      <div className="Loading">LOADING...</div>
    );
  }
    
}