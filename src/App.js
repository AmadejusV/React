import Main from "./components/main/Main.js"
import './App.css';
import { Container } from 'react-bootstrap';
import Header from "./components/header/Header.js";
import Footer from "./components/footer/Footer.js";
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import About from "../src/components/about/About.js";
import DomenuList from "./components/domenuList/DomenuList.js";


function App() {
  return (
    <Router>
    <div className="App">
      <Container fluid>
      <Header/>
      <Switch>
            <Route exact path="/" component={Main}/>
            <Route exact path="/domenulist/" component={DomenuList}/>
            <Route exact path="/about/" component={About}/>
      </Switch>
      <Footer/>
      </Container>
    </div>
    </Router>
  );
}

export default App;
