import React from 'react';
import "../styles/MonMain.css";
import {BrowserRouter as NavLink} from 'react-router-dom';

const MonMain = () => {
    return (
        <div className="MonBody">
            <div className="MenuVert"> 
                <ul>
                    <li><NavLink to="/">Accueil</NavLink></li>
                    <li><NavLink to="/About">Inscription</NavLink></li>
                    <li><NavLink to="/About">Connexion</NavLink></li>
                    <li><NavLink to="/Home">Liens externes</NavLink></li>
                </ul>
            </div>
        <div className="MonContenu">
          <p>lipsumlorem
              içi le contenu de mon Body lipsumlorem  lipsum................................................            .............................................................            .............................................................            .............................................................
            .lipsumlorem
              içi le contenu de mon Body lipsumlorem  lipsum................................................            .............................................................            .............................................................            .............................................................
            .............................................................
            .............................................................
          </p>
        </div>
      </div>
    );
};

export default MonMain;