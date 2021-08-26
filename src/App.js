import { HashRouter, BrowserRouter, Route, Switch } from 'react-router-dom';
import { Container, Navbar, Nav, Col, Row } from 'react-bootstrap';


import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'font-awesome/css/font-awesome.min.css';

import HomeComponent from './components/HomeComponent';
import NavBar from './components/NavBar';
import One from './components/One';

function App() {
  return (
    <HashRouter>
    <Container>
      <NavBar />
      <Switch>
        <Route path="/" exact component= { (props) => ( <HomeComponent  /> )} />
        <Route path="/one" component={(props) => ( <One /> )} />             
      </Switch>
    </Container>
    </HashRouter>

  );
}

export default App;
