import { React } from 'react-bootstrap';
import { Row, Col, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import * as Icon from 'react-bootstrap-icons'


export default function Busca(props){
    const fundo_btn = {
        backgroundColor: "white",
        border: "none"

    }, inline = {
        display: "flex",
        flexDirection: "row"
    }

    return(
        <Row>
            <Col>
                <div class="form-group" style={inline}>
                  <input type="text"
                    class="form-control" name="" id="" aria-describedby="helpId" placeholder={props.placeH} />
                    <button style={fundo_btn}>
                        <Icon.X />
                    </button>

                    

                </div>
            </Col>
        </Row>
    )
}