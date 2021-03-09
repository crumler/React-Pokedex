import {useState, useEffect} from 'react';
import axios from 'axios';
import './App.css';
import Dropdown from 'react-bootstrap/Dropdown';



function App() {

  // const [pokemons, setPokemons] = useState([
  //   { id: 1, name: 'Bulbasaur' },
  //   { id: 2, name: 'Charmander' },
  //   { id: 3, name: 'Squirtle' }
  // ]);
  
  // Axios fetch call
  const url = 'https://pokeapi.co/api/v2/pokemon';
  const [pokemons, setPokemons] = useState('');

  useEffect(() => {
    axios.get(url)
    .then(response => {
      setPokemons(response.data)
      console.log(response, pokemons)
    });
  }, []);

  return (
    <div className="App">
      <Dropdown>
        <Dropdown.Toggle variant="success" id="dropdown-basic">
          Dropdown Button
        </Dropdown.Toggle>

        <Dropdown.Menu>
          <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
          <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
          <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>

      {/* <Dropdown>
        <Dropdown.Toggle variant="danger" id="dropdown-basic">
          Pok&egrave;mon
        </Dropdown.Toggle>

        <Dropdown.Menu>
          const listPokemon = pokemons.map((pokemon, i) => {
          <Dropdown.Item href="#/action-1" key={"poke_" + [i]}>{pokemons.name}</Dropdown.Item>
})
        </Dropdown.Menu>
      </Dropdown> */}
    </div>
  );
}

export default App;