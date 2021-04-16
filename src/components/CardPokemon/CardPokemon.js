import './CardPokemon.scss';
import PokemonTypes from '../PokemonTypes/PokemonTypes';
import PokemonMainImage from '../PokemonMainImage/PokemonMainImage';
import { NavLink, Link } from "react-router-dom";

function CardPokemon({ pokemon }) {
    const showId = (id) => {
        return id.padStart(3, '0');
    }
    const goToDetail = () => {
        window.history.pushState({}, "", `/pokemon/${pokemon.id}`)
        const navEvent = new PopStateEvent('popstate');
        window.dispatchEvent(navEvent);
    }

    return (
        <div className="card-pokemon">
            <div className="wrap" onClick={goToDetail}>
                <div className="name">{pokemon.name}</div>
                <div className="id">{showId(pokemon.id)}</div>
                <PokemonMainImage image={pokemon.gallery?.main} loaded={pokemon.dataLoaded} />
                <PokemonTypes types={pokemon.types ?? []} loaded={pokemon.dataLoaded} />
            </div>
        </div>
    )
}

export default CardPokemon;