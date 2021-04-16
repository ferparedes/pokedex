import './PokemonMainImage.scss';

function PokemonMainImage({ image, loaded }) {
    return (
        <div className="main-image">
            {loaded
                ? <img src={image} className="pokemon-image main" />
                : <div className="skeleton-loader"></div>
            }
        </div>
    )
}

export default PokemonMainImage;