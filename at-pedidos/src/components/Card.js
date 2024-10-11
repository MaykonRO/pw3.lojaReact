import { Row, Col, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Card(props){
    return(
        <Row>
            <Col>
                <div>
                    {/* foto */}
                    <h2 /* coloque o nome da comida */ > pizza 3 quijos </h2>
                    <h2 /* valor */ > 65,90</h2>
                    <small>mussarela, catuprity, parmesão...</small>
                    {/*  */}
                </div>
            </Col>
        </Row>
    )
}