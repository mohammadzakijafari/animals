import { useState } from "react"


function getRandomAnimal () {
    const animalArray = ["bird", "dog", "cow", "cat", "horse", "gator"];
    return animalArray[Math.floor(Math.random() * animalArray.length)];
}

function App() {
    const [animals, setAnimals] = useState([]);
    
    const handleAddAnimalClick = () => {
        setAnimals([...animals, getRandomAnimal()]);
    }
    console.log(animals);
    return(
        <div className="">
            <button className="add_animal_btn" onClick={handleAddAnimalClick}> Add Animal </button>
            <div className="animal-list"> </div>
        </div>
    )
}

export default App;