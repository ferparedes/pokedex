import './PokemonDetail.scss';
import { useParams } from "react-router-dom";
import { useSelector } from 'react-redux';
import PokemonMainImage from '../PokemonMainImage/PokemonMainImage';
import PokemonTypes from '../PokemonTypes/PokemonTypes';

function PokemonDetail() {
    let { pokemonId } = useParams();
    const pokemon = useSelector(state => state.search.pokemons.find(pokemon => pokemon.id == pokemonId));

    return (
        <div id="PokemonDetail">
            <div className="gallery">
                <div className="wrap">
                    <PokemonMainImage image={pokemon.gallery?.main} loaded={pokemon?.dataLoaded} />
                    <div className="thumbs">
                        <img src={pokemon.gallery.default.front} />
                        <img src={pokemon.gallery.default.back} />
                    </div>
                </div>
            </div>

            <div className="detail">
                <div className="wrap">
                    <div className="name">{pokemon.name}</div>
                    <PokemonTypes types={pokemon.types ?? []} loaded={pokemon.dataLoaded} />
                    <div className="features">
                        <div className="feature">
                            <b>Pokedex Number</b>
                            <div>{pokemon.id}</div>
                        </div>
                        <div className="feature">
                            <b>Height</b>
                            <div>{pokemon.height}</div>
                        </div>
                        <div className="feature">
                            <b>Weight</b>
                            <div>{pokemon.weight}</div>
                        </div>
                        <div className="feature">
                            <b>Shiny</b>
                            <div className="thumbs">
                                <img src={pokemon.gallery.shiny.front} />
                                <img src={pokemon.gallery.shiny.back} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PokemonDetail;