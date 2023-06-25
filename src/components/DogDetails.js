import React from "react";

function DogDetails({ dog, onChangeGoodness }) {
    return (
        <div id="dog-summary-container">
            <h1>DOGGO:</h1>
            {dog ?
                <div id="dog-info">
                    <img src={dog.image} alt={dog.name}/>
                    <h2>{dog.name}</h2>
                    <button onClick={onChangeGoodness}>{dog.isGoodDog ? 'Good Dog!' : 'Bad Dog!'}</button>
                </div>
                : null
            }
        </div>
    )
}

export default DogDetails