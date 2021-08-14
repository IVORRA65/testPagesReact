import MonLogo from '../assets/vs2b1.png';
import React from 'react';
import  '../styles/Header.css';
import MenuH1 from './MenuH1';

const header = () => {
    var $titre= "Mon espace";
    $titre=$titre.toUpperCase();
    return(
        <div className="MonHeader">
            <div className="maBanniere">
                <img src={MonLogo} alt="Monlogo"/>
                <p>{$titre}</p>
            </div>
            <MenuH1 />               
        </div>

    );
};

export default header;