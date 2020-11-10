import React from 'react'
import { NavLink } from 'react-router-dom'
import './header.less'

const Header = () => {
    return (
        <header>
            <nav>
                <NavLink  exact to='/'>My PTE</NavLink>
                <NavLink  to='/personal'>Personal</NavLink>
            </nav>
        </header>
    )
}

export default Header
