import { useState } from "react"
import AnimalShow from "./components/AnimalShow";
import './App.css'

// function returns a random element from animal array
function getRandomAnimal () {
    // array of animals
    const animalArray = ["bird", "dog", "cow", "cat", "horse", "gator"];
    // returns a random number from array elements
    return animalArray[Math.floor(Math.random() * animalArray.length)];
}

function App() {
    // animals state
    const [animals, setAnimals] = useState([]);
    
    // adds the random animal element to animals state array
    const handleAddAnimalClick = () => {
        // adding process to array
        setAnimals([...animals, getRandomAnimal()]);
    }
    
    const renderAnimals = animals.map((animal, index) => {
        return <AnimalShow type = { animal } key = { index } />
    });
    return(
        <div className="app">
            <h1 className="title"> Click Here to Add Your Animal to the List </h1>
            <button className="add-animal-btn" onClick={handleAddAnimalClick}> Add Animal </button>
            <div className="animal-list"> { renderAnimals } </div>
        </div>
    )
}

export default App