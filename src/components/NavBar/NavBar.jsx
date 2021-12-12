import React from 'react';
import {Link} from 'react-router-dom';

// import CSS for li tag
import './NavBar.css';

class NavBar extends React.Component {
    
    NavItems = [
        {
            name: 'Home',
            url: '/'
        },
        {
            name: 'About',
            url: '/about'
        },
        {
            name: 'Politicial Networks',
            url : '/political-networks'
        },
        {
            name : 'Neural Networks',
            url: '/neural-networks',
        }
    ]


    
    render() {
        return (
        <div className ='Navigation'>
            <nav>
                <ul className="NavItems">
                    { this.NavItems.map((item, index) => {
                        return(
                            <li className='NavItem' key={index}>
                                <a className='NavUrl' href={item.url}>{item.name}</a>
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