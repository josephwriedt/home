import React from 'react';
import {Link} from 'react-router-dom';
import NavigationItems from './NavItems.js'

// import CSS for li tag
import './NavBar.css';

class NavBar extends React.Component {
    render() {
        return (
            <div className='NavBar'>
                <nav>
                    <ul className='NavItems'>
                        { NavigationItems.map((item, index) => {
                            return(
                                <li>
                                    <Link className='NavItem' to={item.url}>{item.name}</Link>
                                </li>
                            )
                        })}
                    </ul>
                </nav>
            </div>
        );
        
    }
}



export default NavBar;