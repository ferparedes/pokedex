import imgReturn from '../../assets/icons/Back.svg';
import './HeaderBack.scss';
import { useLocation } from 'react-router-dom';

function HeaderBack() {
    const location = useLocation();
    const goToPokemons = () => {
        window.history.pushState({}, "", `/`)
        const navEvent = new PopStateEvent('popstate');
        window.dispatchEvent(navEvent);
    }

    if (location.pathname == '/') {
        return '';
    } else {
        return (
            <div className="return" onClick={goToPokemons}>
                <img src={imgReturn} />
            </div>
        );
    }

}

export default HeaderBack;