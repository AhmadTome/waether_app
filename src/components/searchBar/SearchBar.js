import React, {useState} from 'react';
import './searchBar.css';

const SearchBar = ({handleSearch}) => {
    const [location, setLocation] = useState('');


    const handleChange = (event) => {
        const value = event.target.value;
        setLocation(value);
    };

    return (
        <div className="search-bar">

            <div className="d-block">
                <input
                    type="text"
                    value={location}
                    onChange={handleChange}
                    placeholder="Enter location..."
                />
                <button onClick={() => handleSearch(location)}>Search</button>
            </div>


        </div>
    );
};

export default SearchBar;
