import React from 'react'
import { NavLink } from 'react-router-dom'
import './header.less'

class Header extends React.Component {
  render() {
    return (
        <header>
            <nav>
                <NavLink  exact to='/'>My PTE</NavLink>
                <NavLink  to='/mycourse'>个人中心</NavLink>
            </nav>
        </header>
    )
  }
}

export default Header;
