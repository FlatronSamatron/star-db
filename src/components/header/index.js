import React from 'react'
import {Link,NavLink} from 'react-router-dom'

import './header.css'

export default () => {

    return(
    <div className="header d-flex">
        <h3>
            <Link to="/">
            Dota-HeroDB
            </Link>
        </h3>
        <ul className="d-flex nav">
            <li>
            <NavLink to="/heroes/" activeClassName="active">All Heroes</NavLink>
            </li>
            <li>
            <NavLink to="/agiheroes/" activeClassName="active">Agility Heroes</NavLink>
            </li>
            <li>
            <NavLink to="/strheroes/" activeClassName="active">Strength Heroes</NavLink>
            </li>
            <li>
            <NavLink to="/intheroes/" activeClassName="active">Intelligent Heroes</NavLink>
            </li>
        </ul>
    </div>
    )
}