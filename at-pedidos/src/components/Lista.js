import { React } from 'react-bootstrap';
import { Row, Col, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Item from './Item';

export default function Lista(props) {
    return (
        <Row>
            <Col>
                <ul>
                    <Item />
                    <Item />
                    <Item />
                    <Item />
                </ul>

            </Col>
        </Row>
    )
}