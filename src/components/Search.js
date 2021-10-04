import React, { useState } from "react";


function Search(props) {
    let [search, setSearch] = useState("");
    //let [suggestion, setSuggestion] = useState("");
    return(
        <div className="Search">
            <div className="input-wrapper">
                <input type="text" className="Searchbar" placeholder="Search" 
                onChange={e => {
                    setSearch(e.target.value);
                    // fetch("https://api.mapbox.com/geocoding/v5/mapbox.places/"+e.target.value+
                    // ".json?autocomplete=true&access_token=pk.eyJ1IjoiZWx5bWFzLW1hZ3VzIiwiYSI6ImNrdTl5aWViNTBibXgyb2xtbXgzdGVwNDUifQ.8TZFi8w6Z524c9Shn-DxRg"
                    // )
                    // .then((response) => response.json())
                    // .then((data) => {
                    // setSuggestion(data.features[0].text);
                    // })
                    // .catch((e) => console.log("Error with autocomplete:"+ e.message))
                }} 
                onKeyPress={e => {
                    if (e.key === 'Enter') { //e.keyCode === 13
                        props.searching(search);
                    }
                }} />
                {/* <div className="Autocomplete">{suggestion}</div> */}
            </div>
            <button><i className="fas fa-search-location" onClick={() => {props.searching(search)}}></i></button>
        </div>
    );
}

export default Search;