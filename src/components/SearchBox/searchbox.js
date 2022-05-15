import React from "react";

const SearchBox = ({searchfield, searchChange}) => {
    return(
        <div className="pa2">
            <label>
                <input 
                    className="pa3 ba b--green bg-light-green br3 ml2"
                    type={'search'} 
                    placeholder={'search robo'}
                    onChange={searchChange}>
                </input>
            </label>
        </div>
    )
};
export default SearchBox;