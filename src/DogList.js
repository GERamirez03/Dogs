import React from 'react';

function DogList({ dogs }) {
    // render array of dogs: show names, pictures
    return (
        <div className="DogList">
            {dogs.map(dog => (
                <div>
                    <p>{dog.name}, Age {dog.age}</p>
                    <img src={dog.src} alt={dog.name}/>
                </div>
            ))}
        </div>
    )
}

export default DogList;