import { React } from 'react-bootstrap';
import { Row, Col, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import * as Icon from 'react-bootstrap-icons';

export default function Foter(props){
    const cores_foter = {
        
        backgroundColor: [props.cor],
        color: [props.corTxt],
        
    }, aln_footer = {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-around"
    }, btn = {
        padding: "5px",
        width: "40px",
        height: "40px"
    }
    return(
        <Row>
            <Col style={cores_foter}>
                <footer style={aln_footer}>
                    <div class="form-group">
                      <label for="" 
                       font-size="small">Nome da Categoria</label>
                      <input type="text" class="form-control" name="" id="" aria-describedby="helpId" placeholder="Digite o nome da sua Categoria"/>
                    </div>
                        <Icon.ArrowRightSquareFill style={btn} />

                </footer>
            </Col>
        </Row>
    )
}