import React, {useState} from 'react';
import Item from '../components/Item'

export default function MovieList(data) {
    // const [filmData, setFilmData] = useState(data)
    console.log(Object.values(data))
    
    
    return (
        <div>
            {Object.values(data).map((movie, i) => (
                <Item title={movie.title} key={i} />
                ))}
        </div>
    )
}
