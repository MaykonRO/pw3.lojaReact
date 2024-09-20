import logo from './logo.svg';
import './App.css';
import { React } from 'react-bootstrap';
import { Container, Row, Col, Button } from 'react-bootstrap';
// import { Icon } from './Icon';
import * as Icon from 'react-bootstrap-icons';
import Menu from './components/Menu';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <Container>
      <Menu cor='black' corTxt='white' />
    </Container>
    
  );
}

export default App;
