import { Input } from 'antd';
import PokemonCard from "./PokemonCard";
import { useState } from 'react';

const PokemonList = ({ pokemons }) => {
  const [searchText, setSearchText] = useState('');
  
  const handleSearch = (value) => {
    const lowercasedSearchText = value.toLowerCase();
    setSearchText(lowercasedSearchText);
  };

  const filteredPokemons = pokemons.filter((pokemon) =>
    pokemon.name.toLowerCase().includes(searchText)
  );

  return (
    <>
      <Input.Search
        className='size'
        placeholder='Buscar Pokémon...'
        style={{ marginBottom: 10 }}
        onChange={(e) => handleSearch(e.target.value)}
        value={searchText}
      />
      <div className="PokemonList">
        {filteredPokemons.map((pokemon) => (
          <PokemonCard
            name={pokemon.name}
            key={pokemon.name}
            image={pokemon.sprites.other["official-artwork"].front_default}
            abilities={pokemon.abilities}
            id={pokemon.id}
            favorite={pokemon.favorite}
            types={pokemon.types}
          />
        ))}
      </div>
    </>
  );
};

PokemonList.defaultProps = {
  pokemons: Array(10).fill(''),
};

export default PokemonList;
