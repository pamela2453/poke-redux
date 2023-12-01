import './App.css';
import { useEffect } from 'react';
import { Col, Spin } from 'antd';
import PokemonList from './components/PokemonList';
import logo from './statics/logo (1).svg'
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import { fetchPokemonsWithDetails } from './slices/dataSlice';

function App() {
  const pokemons = useSelector((state) => state.data.pokemons,
   shallowEqual);

  const loading = useSelector((state) => state.ui.loading);
  
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchPokemonsWithDetails());
  }, []);


  return (
    <div className="App">
      <Col span={4} offset={10}>
        <img src={logo} alt="Pokedux" />
      </Col>
      {loading ? (
        <Col offset={1}>
          <Spin spinning size='large' />
        </Col>
      ) : (
        <PokemonList pokemons={pokemons} />
      )}

    </div>
  );
}



export default App;
