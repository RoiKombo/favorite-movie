import React, {useState, useEffect} from 'react';
import './App.css';
import MovieList from '../src/components/MovieList'

function App() {
  const [filmData, setFilmData] = useState({ results: []})

  useEffect(() => {
      async function fetchData() {
      const res = await fetch("https://swapi.dev/api/films/");
      res.json()
         .then(res => setFilmData(res));
    }
      fetchData();
      
  }, []);
  // console.log(filmData.results)
  return (
    
     <div>
        <MovieList movies={filmData.results}/>
     </div>
     
  )
}

export default App;
