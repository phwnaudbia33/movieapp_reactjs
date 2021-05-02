import React from 'react';
import {Link} from 'react-router-dom';

function Navigation(){
    return (
        <div class = 'navContainer'>
            <Link class = 'navButton' to = '/'>Home</Link>
            <Link class = 'navButton' to= '/about'>About</Link>
        </div>
    );
}

export default Navigation;