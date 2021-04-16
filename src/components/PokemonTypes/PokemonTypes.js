import './PokemonTypes.scss';

function PokemonTypes({ types, loaded }) {

    return (
        <div className="pokemon-types">
            {loaded && types.map((type, index) => (
                <div className={`pokemon-type ${type}`} key={index}>{type}</div>
            ))
            }
            {!loaded && <div className="skeleton-loader"></div>}
        </div>
    )
}

export default PokemonTypes;