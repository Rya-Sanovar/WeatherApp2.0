import React from "react";
import Search from "./components/Search.js";
import Card1 from "./components/Card1.js";
import Card2 from "./components/Card2.js";

function App() {
  let D = null;

  let day1, day2, day3, day4;
  let icon1, icon2, icon3, icon4;
  let temp1, temp2, temp3, temp4;

  let weather = {
    apiKey: "762d7ae0fa04febf1d3f0e5ef97a8d4c",
    fetchByLoc: function (lat, lon) {
      fetch(
        "https://api.openweathermap.org/data/2.5/forecast?lat=" +
          lat +
          "&lon=" +
          lon +
          "&units=metric&appid=" +
          this.apiKey
      )
        .then((response) => response.json())
        .then((data) => {
          D = data;
          this.displayWeather(data, 1);
        })
        .catch((e) => console.log("Error with fetching data: " + e.message));
    },
    fetchWeather: function (city) {
      fetch(
        "https://api.openweathermap.org/data/2.5/forecast?q=" +
          city +
          "&units=metric&appid=" +
          this.apiKey
      )
        .then((response) => response.json())
        .then((data) => {
          D = data;
          this.displayWeather(data, 1);
        })
        .catch((e) => console.log("Error with fetching data: " + e.message));
    },
    displayWeather: function (data, DayNumber) {
      const cityname = data.city.name;
      const country = data.city.country;
      // DAY 1
      let date1 = data.list[0].dt_txt;
      icon1 = data.list[0].weather[0].icon;
      const description1 = data.list[0].weather[0].description;
      temp1 = data.list[0].main.temp;
      const humidity1 = data.list[0].main.humidity;
      const speed1 =
        Math.round(Number(data.list[0].wind.speed) * 3.6 * 100) / 100;
      const pop1 = data.list[0].pop;
      const main1 = data.list[0].weather[0].main;
      // DAY 2
      let date2 = data.list[7].dt_txt;
      icon2 = data.list[7].weather[0].icon;
      const description2 = data.list[7].weather[0].description;
      temp2 = data.list[7].main.temp;
      const humidity2 = data.list[7].main.humidity;
      const speed2 =
        Math.round(Number(data.list[7].wind.speed) * 3.6 * 100) / 100;
      const pop2 = data.list[7].pop;
      const main2 = data.list[7].weather[0].main;
      // DAY 3
      let date3 = data.list[15].dt_txt;
      icon3 = data.list[15].weather[0].icon;
      const description3 = data.list[15].weather[0].description;
      temp3 = data.list[15].main.temp;
      const humidity3 = data.list[15].main.humidity;
      const speed3 =
        Math.round(Number(data.list[15].wind.speed) * 3.6 * 100) / 100;
      const pop3 = data.list[15].pop;
      const main3 = data.list[15].weather[0].main;
      // DAY 4
      let date4 = data.list[22].dt_txt;
      icon4 = data.list[22].weather[0].icon;
      const description4 = data.list[22].weather[0].description;
      temp4 = data.list[22].main.temp;
      const humidity4 = data.list[22].main.humidity;
      const speed4 =
        Math.round(Number(data.list[22].wind.speed) * 3.6 * 100) / 100;
      const pop4 = data.list[22].pop;
      const main4 = data.list[22].weather[0].main;

      let months = [
        "",
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December"
      ];

      function dateList(date) {
        let myarr1 = date.split(" ");
        date = myarr1[0];
        let myArr2 = date.split("-");
        let year = myArr2[0];
        let month = months[Number(myArr2[1])];
        let d = myArr2[2];
        return [d, month, year];
      }

      let arr1 = dateList(date1);
      let d = new Date(`${arr1[0]} ${arr1[1]}, ${arr1[2]}`);

      let arr2 = dateList(date2);
      let dx = new Date(`${arr2[0]} ${arr2[1]}, ${arr2[2]}`);

      let arr3 = dateList(date3);
      let dy = new Date(`${arr3[0]} ${arr3[1]}, ${arr3[2]}`);

      let arr4 = dateList(date4);
      let dz = new Date(`${arr4[0]} ${arr4[1]}, ${arr4[2]}`);

      let weekday = [
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday"
      ];
      day1 = weekday[d.getDay()];
      day2 = weekday[dx.getDay()];
      day3 = weekday[dy.getDay()];
      day4 = weekday[dz.getDay()];

      let place = cityname + ", " + country;

      // return [place, day1, day2, day3, day4, arr1, arr2, arr3, arr4, icon1, icon2, icon3, icon4, desc1, desc2, desc3, desc4,
      //       temp1, temp2, temp3, temp4, pop1, pop2, pop3, pop4, hum1, hum2, hum3, hum4, speed1, speed2, speed3, speed4,
      //     main1, main2, main3, main4] =
      //     [place, day1, day2, day3, day4, arr1, arr2, arr3, arr4, icon1, icon2, icon3, icon4, description1, description2, description3, description4,
      //       temp1, temp2, temp3, temp4, pop1, pop2, pop3, pop4, humidity1, humidity2, humidity3, humidity4, speed1, speed2, speed3, speed4,
      //     main1, main2, main3, main4];

      //   function CardBackground(main) {

      //     let style = document.querySelector('.Card-1').style;
      //     if (main == 'Rain') {
      //         style.setProperty('--background', "url('https://source.unsplash.com/1600x900/?Rain')");
      //       } else if (main == 'Clouds') {
      //         style.setProperty('--background', "url('https://source.unsplash.com/1600x900/?Clouds')");
      //       } else if (main == 'Clear') {
      //         style.setProperty('--background', "url('https://source.unsplash.com/1600x900/?Sun')");
      //       } else {
      //         style.setProperty('--background', "url('https://source.unsplash.com/1600x900/?" + main +"')");
      //     }
      // }

      switch (DayNumber) {
        case 1:
          console.log("bruh is this even working");
          this.createTemplate(day1, arr1,place,icon1,description1,temp1, pop1, humidity1,speed1);
          //CardBackground(main1);
          break;
        case 2:
          this.createTemplate(day2,arr2,place,icon2,description2,temp2,pop2,humidity2,speed2);
          //CardBackground(main2);
          break;
        case 3:
          this.createTemplate(day3,arr3,place,icon3,description3,temp3,pop3,humidity3,speed3);
          //CardBackground(main3);
          break;
        case 4:
          this.createTemplate(day4,arr4,place,icon4,description4,temp4,pop4,humidity4,speed4);  
          //CardBackground(main4);
          break;
      }

      //document.body.style.backgroundImage = "url('https://source.unsplash.com/1600x900/?" + cityname +"')"
    },

    search: function (input) {
      this.fetchWeather(input);
    },

    changeDay: function (n) {
      this.displayWeather(D, n);
    },

    createTemplate: function (day, arr,place,icon,description,temp,pop,humidity,speed) {
      console.log("im here");
      return (
        <div className="App">
          <Search searching={this.search} />

          <div className="Card Loading">
            <Card1
              day={day}
              date={`${arr[0]} ${arr[1]} ${arr[2]}`}
              place={place}
              icon={"https://openweathermap.org/img/wn/" + icon + ".png"}
              desc={description}
              temp={Math.round(Number(temp)) + "°C"}
            />

            <Card2
              changeDay={this.changeDay}
              pop={pop + " %"}
              humidity={humidity + " %"}
              speed={speed + " km/h"}
              day1={day1.substr(0, 3)}
              icon1={"https://openweathermap.org/img/wn/" + icon1 + ".png"}
              temp1={Math.round(Number(temp1)) + "°C"}
              day2={day2.substr(0, 3)}
              icon2={"https://openweathermap.org/img/wn/" + icon2 + ".png"}
              temp2={Math.round(Number(temp2)) + "°C"}
              day3={day3.substr(0, 3)}
              icon3={"https://openweathermap.org/img/wn/" + icon3 + ".png"}
              temp3={Math.round(Number(temp3)) + "°C"}
              day4={day4.substr(0, 3)}
              icon4={"https://openweathermap.org/img/wn/" + icon4 + ".png"}
              temp4={Math.round(Number(temp4)) + "°C"}
            />
          </div>
        </div>
      );
    }
  };

  weather.fetchWeather("Paris");

  // navigator.geolocation.watchPosition(loc => {
  // let lat = loc.coords.latitude;
  // let lon = loc.coords.longitude;
  // weather.fetchByLoc(lat, lon);
  // }, weather.fetchWeather("Paris")); // by default show weather in Paris.*/
}

export default App;
