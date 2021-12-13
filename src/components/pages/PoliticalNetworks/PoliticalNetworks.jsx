import React from 'react';
import './../../../App.css';
import './PoliticalNetworks.css';

const divStyle = {
    color:'white'
};

class PoliticalNetworks extends React.Component {
    
    render() {
        return (
            <div className='Main-Content'>
                <div className='Political-content'>
                    <h2>Polticial Network Page</h2>
                    <main>
                        <p>This section contains interactive networks about US representatives</p>
                    </main>
                </div>
            </div>
        )
    }
}



export default PoliticalNetworks;