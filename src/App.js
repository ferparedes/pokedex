import './App.scss';
import store from './redux/store';
import { Provider } from 'react-redux';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import MainSideBar from './components/MainSideBar/MainSideBar';
import Pokedex from './components/Pokedex/Pokedex';
import PokemonDetail from './components/PokemonDetail/PokemonDetail'
import SearchBarPokemons from './components/SearchBarPokemons/SearchBarPokemons';
import HeaderBack from './components/HeaderBack/HeaderBack';

const apiPokedex = 'https://pokeapi.co/api/v2/pokemon/';

function App() {  
  return (
    <Provider store={store}>
      <div id="app">
        <Router>
          <MainSideBar />
          <div id="MainContainer">            
            <div className="header">
              <HeaderBack />              
              <SearchBarPokemons />
            </div>
            <Switch>
              <Route path="/pokemon/:pokemonId">
                <PokemonDetail />
              </Route>
              <Route path="/">
                <Pokedex />
              </Route>
            </Switch>
          </div>
        </Router>
      </div>
    </Provider>
  );
}

export default App;
