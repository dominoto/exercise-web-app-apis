import React from "react";

const SearchBox = ({ searchfield, searchChange }) => {
    return (
        <div className="pa2">
            <input
            className="pa3 ba b--yellow bg-moon-gray w-50"
                type='search'
                placeholder="search by name or gender"
                onChange={searchChange}
            />
        </div>
    );
}

export default SearchBox;