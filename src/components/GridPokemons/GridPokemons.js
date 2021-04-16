import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import CardPokemon from '../CardPokemon/CardPokemon';
import './GridPokemons.scss';
import { ACTIONS } from '../../redux/actions';
import { NavLink, Link } from "react-router-dom";

function GridPokemons() {
    const pokemons = useSelector(state => state.search.filteredPokemons);
    const dispatch = useDispatch();

    Object.assign(pokemons).forEach(pokemon => {

        if (pokemon.loading || pokemon.dataLoaded) {
            return;
        }

        pokemon.loading = true;

        fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon.id}/`)
            .then(res => res.json())
            .then(
                (result) => {
                    const galleryResult = result.sprites;
                    const typesResult = result.types;

                    pokemon.dataLoaded = true;
                    pokemon.loading = false;
                    pokemon.weight = result.weight;
                    pokemon.height = result.height;
                    pokemon.gallery = {
                        main: galleryResult.other['official-artwork'].front_default ?? galleryResult.front_default,
                        default: {
                            back: galleryResult.back_default,
                            front: galleryResult.front_default
                        },
                        shiny: {
                            back: galleryResult.back_shiny,
                            front: galleryResult.front_shiny
                        }
                    };

                    pokemon.types = Object.values(typesResult).map(typeRow => typeRow.type.name);

                    dispatch({ type: ACTIONS.UPDATE_POKEMON, pokemon: 1 });
                }
            );


    });

    return (
        <div className="GridPokemons">
            {pokemons.map(pokemon => (
                <CardPokemon pokemon={pokemon} key={pokemon.id} />
            ))}
            {pokemons.length == 0 ? 'No matches found' : ''}
        </div>
    );
}

export default GridPokemons;