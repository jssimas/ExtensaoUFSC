import NavBar from "./components/NavBar";
import Home from './components/Home';
import Form from "./components/Form";
import NotFound from "./components/NotFound";
import Person from './components/Person';

import {  BrowserRouter as Router, Route, Switch } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Router>
        <NavBar/> 
        <Switch>
          <Route exact path="/">
            <Home/>
          </Route>
          <Route path="/cadastro">
              <Form/>
          </Route>
          <Route path="/person/:id">
              <Person/>
          </Route>
          <Route path = "*">
            <NotFound/>
          </Route>
        </Switch>
      </Router>

    </div>
  );
}

export default App;
