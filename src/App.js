import logo from './logo.svg';
import './App.css';
import Home from './pages/Home';
import Banner from './components/MenuH1';
import Header from './components/Header';
import MonMain from './components/MonMain';
import {BrowserRouter as Router, NavLink, Route} from "react-router-dom"
import About from './pages/About';

function App(){
  return(
    <div className="App">
      <Header />
      <MonMain />

      <div className="MonFooter"><h2>Voila mon footer !</h2></div>

    </div>


  )

}


// function App() {
//   return (
//     <div className="App">
//       <Banner />
//       <header className="App-header">
//         <Banner />
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

export default App;
