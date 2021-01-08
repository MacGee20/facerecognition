import React from 'react';
import Tilt from 'react-tilt';
import tree from './tree.jpg';
import './Logo.css';

const Logo = () => {

    return ( 
        <div>
            <Tilt className="Tilt"  options={{ max : 50 }} style={{ height: 250, width: 250}} >
                <div 
                    className="Tilt-inner"> <img style= {{height: 200, width: 200}} alt ='tree' src ={tree} />
                </div>
            </Tilt>
        </div>
    );
}

export default Logo ;