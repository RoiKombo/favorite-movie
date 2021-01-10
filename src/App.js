import React, {useState, useEffect} from 'react';
import 'primereact/resources/themes/saga-orange/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
import './App.css';
import useLocalStorage from './customHooks/localStorageHook'
import MovieList from './components/MovieList'



function App() {
  const [filmData, setFilmData] = useState({ results: []})
  
  useEffect(() => {
      async function fetchData() {
      const res = await fetch('swapi.json');
      res.json()//change late on!!!
         .then(res => setFilmData(res));
    }
      fetchData();
      // console.log('useEffect', filmData)
      
  }, []);
  
  return (
         <div>
            <MovieList movies={filmData.results}/>
         </div>
     
  )
}

export default App;
