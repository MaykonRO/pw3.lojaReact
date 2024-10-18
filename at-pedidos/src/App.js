import './App.css';
import { React } from 'react-bootstrap';
import { Container, Row, Col, Button } from 'react-bootstrap';
import * as Icon from 'react-bootstrap-icons';
import 'bootstrap/dist/css/bootstrap.min.css';
// meus componentes
import Menu from './components/Menu';
import Busca from './components/Busca';
import Foter from './components/Foter';
import Lista from './components/Lista';
import Item from './components/Item';
import Home from './page/Home';


function App() {
  return (
    <Menu cor="black" corb="black" corTxt='white' />
  );
}

export default App;
