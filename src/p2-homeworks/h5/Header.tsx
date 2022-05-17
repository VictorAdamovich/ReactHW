import React from 'react'
import {NavLink} from 'react-router-dom';
import c from './Header.module.css';

function Header() {
    return (
        <div className={c.HeaderNavi}>
            <NavLink className={c.HeaderNavi_item} to='/pre-junior'>pre-junior</NavLink>
            <NavLink className={c.HeaderNavi_item} to='/junior'>junior</NavLink>
            <NavLink className={c.HeaderNavi_item} to='/junior+'>junior+</NavLink>
            <span className={c.box}> </span>
        </div>
    )
}

export default Header
