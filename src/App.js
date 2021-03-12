import {useState, useEffect} from 'react';
import axios from 'axios';
import './App.css';
import PokemonList from './components/PokemonList';

function App() {
  
  // Axios fetch call
  const url = 'https://pokeapi.co/api/v2/pokemon?limit=151';
  const [pokemons, setPokemons] = useState([]);

  useEffect(() => {
    axios.get(url)
    .then(response => {
      setPokemons(response.data.results)
      console.log(response.data.results)
    });
  }, []);

  return (
    <div className="App">
      <PokemonList pokemons={pokemons} />
    </div>
  );
}

export default App;