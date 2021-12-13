import React from 'react';
import logo from './../../logo.svg';

const divStyle = {
    color:'white'
};

class About extends React.Component {
    
    render() {
        return (
            <div className="Main-Content">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                    <p>
                        Edit <code>src/App.js</code> and save to reload.
                    </p>
                    <a
                        className="App-link"
                        href="https://reactjs.org"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Learn React
                    </a>
                </header>
            </div>
        )
    }
}



export default About;