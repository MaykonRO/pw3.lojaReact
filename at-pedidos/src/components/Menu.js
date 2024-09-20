import * as Icon from 'react-bootstrap-icons';
import { Col, Row, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Menu(props) {
    const stl_menu = {
        backgroundColor: [props.cor],
        color: [props.corTxt]
    }

    return (
        <Row style={stl_menu}>
            <Col>
                <Icon.Cart />
                <Icon.TagsFill />
                <Icon.ArchiveFill />
            </Col>
        </Row>
    )

}