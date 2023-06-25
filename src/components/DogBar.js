import React from "react";

function DogBar({ dogs, onClickDog }) {
    return (     
        <div id="dog-bar">
            {dogs.map(dog => {
                return <span key={dog.id} onClick={() => onClickDog(dog)}>{dog.name}</span>
            })}
        </div>
    )
}

export default DogBar