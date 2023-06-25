import React from "react";

function Filter({ filterOn, onTurnFilterOn }) {
    return (
        <div id="filter-div">
            <button id="good-dog-filter" onClick={() => onTurnFilterOn(!filterOn)}>Filter good dogs: {filterOn? 'ON' : 'OFF'}</button>
        </div>
    )
}

export default Filter