import React, {useState, useEffect} from 'react';
import 'primereact/resources/themes/saga-blue/theme.css';
import 'primereact/resources/primereact.min.css';
import './App.css';
import useLocalStorage from './customHooks/localStorageHook'
import MovieList from './components/MovieList'

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

  return (
    
     <div>
        <MovieList movies={filmData.results}/>
     </div>
     
  )
}

export default App;
