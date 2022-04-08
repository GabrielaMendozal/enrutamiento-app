
import './App.css';
import {BrowserRouter, Link, Route, Switch} from 'react-router-dom';
import Home from './Componentes/Home/Home';
import Numero from './Componentes/Numero/Numero';
import Palabra from './Componentes/Palabra/Palabra';
import Color from './Componentes/Color/Color'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <ul className='navegacion'>
          <li className='opcion'>
            <Link to="/home">  </Link>
          </li>
          <li className='opcion'>
            <Link to="/:variable">  </Link>
          </li>
          <li className='opcion'>
            <Link to="/:variable/:colorTexto/:colorFondo">  </Link>
          </li>
        </ul>

        <Switch>

          <Route exact path="/home" render={ (routeProps) => <Home {...routeProps} />} />
          
          <Route exact path="/:variable" render={ (routeProps) => 
          (isNaN(routeProps.match.params.variable)) ? <Palabra {...routeProps}/> :
          <Numero {...routeProps}/>}/>

          <Route exact path="/:variable/:colorTexto/:colorFondo" render={ (routeProps) => <Color {...routeProps} />} /> 

        </Switch>
                 
    </BrowserRouter>
    </div>
  );
}

export default App;
