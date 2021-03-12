import Dropdown from 'react-bootstrap/Dropdown';

export default function PokemonList( {pokemons} ) {
    return (
        <div>
            <Dropdown>
                <Dropdown.Toggle variant="success" id="dropdown-basic">
                    List of Pok&egrave;mon
                </Dropdown.Toggle>

                <Dropdown.Menu>
                    {pokemons.map((pokemon => {
                        return <Dropdown.Item href="#" key={pokemon.name}>{pokemon.name[0].toUpperCase() + pokemon.name.substring(1)}</Dropdown.Item>
                    }))}
                </Dropdown.Menu>
            </Dropdown>
        </div>
    )
};