import React, { useState } from "react";


function Search(props) {
    const [search, setSearch] = useState("");
    return(
        <div className="Search">
            <input type="text" className="Searchbar" placeholder="Search" 
            onChange={e => setSearch(e.target.value)} 
            onKeyPress={e => {
                if (e.key === 'Enter') { //e.keyCode === 13
                    props.searching(search);
                }
            }} />
            <button><i className="fas fa-search-location" onClick={() => {props.searching(search)}}></i></button>
        </div>
    );
}

export default Search;