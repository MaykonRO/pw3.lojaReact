import { React } from 'react-bootstrap';
import { Row, Col, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

import Menu from '../components/Menu';
import Busca from '../components/Busca';
import Foter from '../components/Foter';
import Lista from '../components/Lista';
import Item from '../components/Item';

export default function Home(){
    return(
        <Row>
            <Col>
                <Foter cor='black' corTxt='white'/>
            </Col>
        </Row>
    )
}