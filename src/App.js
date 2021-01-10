import React, {useState, useEffect} from 'react';
import useLocalStorage from './customHooks/localStorageHook';
import MovieList from './components/MovieList';
import Favorites from './components/Favorites';
import Styled from 'styled-components';
import 'primereact/resources/themes/saga-orange/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
import './App.css';

const TableHead = Styled.h1`
    display: flex;
    justify-content: center;
    background-color: #ffc108;
    border-radius: 5px 5px 5px 5px;
    color:#495057;
    padding: 5px
`

function App() {
  const [filmData, setFilmData] = useLocalStorage('swapi',{ results: [], favorites: []})
  const [callNumber, setCallNumber] = useState(1);
  useEffect(() => {
      async function fetchData() {
      const res = await fetch('swapi.json');
      res.json()
         .then(res => setFilmData({ results: res.results, favorites: []}));  
    }
      filmData.results.length === 0 && fetchData();
      
  }, [callNumber]);
  
  return (
         <div>
            <TableHead>STAR WARS SAGA MOVIE PICKER</TableHead>
            {filmData ? 
            <MovieList movies={filmData.results} favorites={filmData.favorites} setFilmData={setFilmData} /> : <div>no data to display</div>}
            <Favorites favorites={filmData.favorites} />
         </div>
  )
}

export default App;
