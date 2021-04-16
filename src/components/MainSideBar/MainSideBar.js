import React, { useState } from 'react';
import './MainSideBar.scss';

import imgLogo from '../../assets/logo.png';
import imgAvatar from '../../assets/avatar.png';
import imgMenu from '../../assets/icons/Menu.svg';

function MainSideBar() {
    const [openMenu, setOpenMenu] = useState(false);

    const toggleMenu = () => {
        setOpenMenu(openMenu ? false : true);
    };

    return (
        <div id="MainSidebar">
            <div className="wrap">
                <div className="menu-toggle" onClick={toggleMenu}>
                    <img src={imgMenu} />
                </div>

                <div className="logo">
                    <img src={imgLogo} />
                </div>
                <div className="user-wrap">
                    <div className={`user ${openMenu ? "active" : ""}`}>
                        <div className="avatar">
                            <img src={imgAvatar} />
                        </div>
                        <div className="name">
                            ASHK123
                </div>
                        <div className="level">
                            Level 1
                </div>
                        <div className="message">
                            "Work hard on your test"
                </div>
                    </div>
                </div>
            </div>
            {/* <Link to="/">Pokedex</Link>
            <Link to="/pokemon/1">Pokemon</Link> */}
        </div>
    );
}

export default MainSideBar;