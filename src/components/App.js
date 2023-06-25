import React, {useState, useEffect} from "react";
import Filter from "./Filter";
import DogBar from "./DogBar";
import DogDetails from "./DogDetails";

function App() {
  const [dogs, setDogs] = useState([])
  const [currentDog, setCurrentDog] = useState(null)
  const [filterOn, setFilterOn] = useState(false)

  useEffect(() => {
    fetch('http://localhost:3001/pups')
    .then(r => r.json())
    .then(data => setDogs(data))
  }, [])

  function handleChangeGoodness() {
    fetch(`http://localhost:3001/pups/${currentDog.id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ isGoodDog: !currentDog.isGoodDog })
    })
    .then(r => r.json())
    .then(data => {
      const updatedDogs = dogs.map(dog => {
        if (dog.id === data.id) {
          return data
        } else {
          return dog
        }
      })
      setDogs(updatedDogs)
      setCurrentDog(data)
    })
  }

  const dogsToDisplay = dogs.filter(dog => {
    if (filterOn) {
      return dog.isGoodDog
    } else {
      return true
    }
  })

  return (
    <div className="App">
      <Filter filterOn={filterOn} onTurnFilterOn={setFilterOn} />
      <DogBar dogs={dogsToDisplay} onClickDog={setCurrentDog} />
      <DogDetails dog={currentDog} onChangeGoodness={handleChangeGoodness} />
    </div>
  );
}

export default App;
