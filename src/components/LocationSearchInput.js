// import PlacesAutocomplete from 'react-places-autocomplete';
// import { geocodeByAddress, getLatLng } from 'react-places-autocomplete';
// import React, { Component } from "react";

// export class LocationSearchInput extends Component{
//     constructor(props) {
//         super(props);
//         this.state = { address: '' };
//       }
     
//       handleChange = address => {
//         this.setState({ address });
//       };

//     render() {
//         return (
//         <div className="canvas">
//             <PlacesAutocomplete
//             value={this.state.address}
//             onChange={this.handleChange}
//             onSelect={this.handleSelect}
//             onKeyPress={e => {
//               if(e.key === 'Enter') {
//                     props.searching(this.state.address);
//                 }
//             }}
//             >
//         {({ getInputProps, suggestions, getSuggestionItemProps, loading }) => (
//           <div>
//             <input
//               {...getInputProps({
//                 placeholder: 'Search',
//                 className: 'location-search-input',
//               })}
//             />
//             <div className="autocomplete-dropdown-container">
//               {loading && <div>Loading...</div>}
//               {suggestions.map(suggestion => {
//                 const className = suggestion.active
//                   ? 'suggestion-item--active'
//                   : 'suggestion-item';
//                 // inline style for demonstration purpose
//                 const style = suggestion.active
//                   ? { backgroundColor: '#fafafa', cursor: 'pointer' }
//                   : { backgroundColor: '#ffffff', cursor: 'pointer' };
//                 return (
//                   <div className="input-suggestion"
//                     {...getSuggestionItemProps(suggestion, {
//                       style
//                     })}
//                   >
//                      <i class="material-icons">location_on</i> <span>{suggestion.description}</span>
//                   </div>
//                 );
//               })}
//             </div>
//           </div>
//         )}
//       </PlacesAutocomplete>
//     </div>
//         )
//     }
// }

// export default LocationSearchInput;
