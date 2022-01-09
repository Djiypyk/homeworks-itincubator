import React from 'react'
import {NavLink} from 'react-router-dom'
import s from './Header.module.css'
import {PATH} from './Navigation'


function Header() {
    return (
        <div className={s.dropdown}>
            <button className={s.dropBtn}>View All HomeWorks</button>
            <div className={s.dropdown_content}>
                <NavLink to={PATH.PRE_JUNIOR}
                         className={({isActive}) => isActive ? (s.active_link + ' ' + s.link) : s.link}
                >Pre Junior</NavLink>
                <NavLink to={PATH.JUNIOR}
                         className={({isActive}) => isActive ? (s.active_link + ' ' + s.link) : s.link}
                >Junior</NavLink>
                <NavLink to={PATH.JUNIOR_PLUS}
                         className={({isActive}) => isActive ? (s.active_link + ' ' + s.link) : s.link}
                >Junior+</NavLink>
            </div>
        </div>
    )
}

export default Header
