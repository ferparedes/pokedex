import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { ACTIONS } from '../../redux/actions';
import './Pokedex.scss';
import GridPokemons from '../GridPokemons/GridPokemons';
import SearchBarPokemons from '../SearchBarPokemons/SearchBarPokemons';
import PokedexPaginator from '../PokedexPaginator/PokedexPaginator';

import imgReturn from '../../assets/icons/Back.svg';

const apiPokedex = 'https://pokeapi.co/api/v2/pokemon/';


function Pokedex() {
    const dispatch = useDispatch();

    const getPokemonIdByUrl = url => {
        url = url.replace(/\/$/, '');
        const segments = url.split('/');
        return segments[segments.length - 1];
    };

    useEffect(() => {
        fetch(`${apiPokedex}?limit=2000`)
            .then(res => res.json())
            .then(
                (result) => {
                    const pokemons = result.results.map(pokemon => {
                        return { id: getPokemonIdByUrl(pokemon.url), name: pokemon.name, shiny: [], height: null, weight: null, loading: false, dataLoaded: false };
                    });
                    dispatch({ type: ACTIONS.LOAD_POKEMONS, pokemons: pokemons })
                }
            );
    })

    return (
        <div id="Pokedex">            
            <PokedexPaginator />
            <GridPokemons />
        </div>
    );
}

export default Pokedex;

