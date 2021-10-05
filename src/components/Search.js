import React, { useState } from "react";
require('dotenv').config();

// import MapboxAutocomplete from 'react-mapbox-autocomplete';

function Search(props) {
    const token = process.env.REACT_APP_MAPBOX_API_TOKEN;
    let [search, setSearch] = useState("");
    let [suggestion1, setSuggestion1] = useState("");
    let [suggestion2, setSuggestion2] = useState("");
    let [suggestion3, setSuggestion3] = useState("");
    let [suggestion4, setSuggestion4] = useState("");
    let [suggestion5, setSuggestion5] = useState("");

    return(
        <div className="Search">
            <div className="outer-wrap">
            <div className="input-wrapper">
              <input type="text" className="Searchbar" placeholder="Search" 
                onChange={e => {
                    setSearch(e.target.value);
                    if (e.target.value === ""){
                        let autoWrapper = document.querySelector(".auto-wrapper")
                        autoWrapper.classList.add("hidden");
                    }
                    fetch("https://api.mapbox.com/geocoding/v5/mapbox.places/"+e.target.value+
                    ".json?autocomplete=true&access_token="+token)
                    .then((response) => response.json())
                    .then((data) => {
                        setSuggestion1(data.features[0].place_name);
                        setSuggestion2(data.features[1].place_name);
                        setSuggestion3(data.features[2].place_name);
                        setSuggestion4(data.features[3].place_name);
                        setSuggestion5(data.features[4].place_name);

                        let autoWrapper = document.querySelector(".auto-wrapper")
                        autoWrapper.classList.remove("hidden");
                    //setSuggestion1(data.features[0].text);
                    })
                    .catch((e) => console.log("Error with autocomplete:"+ e.message))
                }} 
                onKeyPress={e => {
                    if (e.key === 'Enter') { //e.keyCode === 13
                        let autoWrapper = document.querySelector(".auto-wrapper")
                        autoWrapper.classList.add("hidden");
                        props.searching(search);
                    }
                }} />
                <div className="auto-wrapper hidden">
                {/* <MapboxAutocomplete publicKey='pk.eyJ1IjoiZWx5bWFzLW1hZ3VzIiwiYSI6ImNrdTl5aWViNTBibXgyb2xtbXgzdGVwNDUifQ.8TZFi8w6Z524c9Shn-DxRg'
                    inputClass='form-control search'
                    onChange={(e) => setSearch(e.target.value)}
                    onKeyPress={e => {
                        if (e.key === 'Enter') { //e.keyCode === 13
                            props.searching(search);
                        }
                    }}    
                    onSuggestionSelect={(result, lat, ln, text) => {
                        setSearch(result);
                        props.searching(search);
                    }}
                    resetSearch={false}/> */}

                    <div className="Autocomplete hide" onClick={() => {
                        let autoWrapper = document.querySelector(".auto-wrapper")
                        autoWrapper.classList.add("hidden");
                        setSearch(suggestion1);
                        props.searching(search);
                    }}>{suggestion1}</div>
                    <div className="Autocomplete hide" onClick={() => {
                        let autoWrapper = document.querySelector(".auto-wrapper")
                        autoWrapper.classList.add("hidden");
                        setSearch(suggestion2);
                        props.searching(search);
                    }}>{suggestion2}</div>
                    <div className="Autocomplete hide" onClick={() => {
                        let autoWrapper = document.querySelector(".auto-wrapper")
                        autoWrapper.classList.add("hidden");
                        setSearch(suggestion3);
                        props.searching(search);
                    }}>{suggestion3}</div>
                    <div className="Autocomplete hide" onClick={() => {
                        let autoWrapper = document.querySelector(".auto-wrapper")
                        autoWrapper.classList.add("hidden");
                        setSearch(suggestion4);
                        props.searching(search);
                    }}>{suggestion4}</div>
                    <div className="Autocomplete hide" onClick={() => {
                        let autoWrapper = document.querySelector(".auto-wrapper")
                        autoWrapper.classList.add("hidden");
                        setSearch(suggestion5);
                        props.searching(search);
                    }}>{suggestion5}</div>
                </div>
            </div>
            </div>
            <button className="search-btn"><i className="fas fa-search-location" onClick={() => {
                let autoWrapper = document.querySelector(".auto-wrapper")
                autoWrapper.classList.add("hidden");
                props.searching(search);
                }}></i></button>
        </div>
    );
}

export default Search;