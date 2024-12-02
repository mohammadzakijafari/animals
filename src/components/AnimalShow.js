import './AnimalShow.css'
import bird from '../svg/bird.svg';
import dog from '../svg/dog.svg';
import cow from '../svg/cow.svg';
import cat from '../svg/cat.svg';
import horse from '../svg/horse.svg';
import gator from '../svg/gator.svg';
import heart from '../svg/heart.svg';

import { useState } from 'react';


const svgImg = {
    bird,
    dog,
    cow,
    cat,
    horse,
    gator,
}

function AnimalShow({ type }) {
    // State variable for zoom click
    const [clicks, setClicks] = useState(0);

    // handling zoom clicks
    const handleHeartZoomClick = () => {
        setClicks(clicks + 1);
    }
    return(
        <div className="animal-show" onClick = { handleHeartZoomClick }>
            <img alt="animal" src = {svgImg[type]} className='animal' />
            <img alt='heart' src = {heart} style={{width: 10 + 10 * clicks}} className='heart' />
        </div>
    )
}

export default AnimalShow;