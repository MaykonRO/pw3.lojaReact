import { Col, Row, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Categoria(props) {
    return (
        <Row>
            <Col>
                <div> <label>Categoria</label> </div>
                    <div>
                        <select>
                            <option id="" name="" value="">Selecione</option>
                        </select>
                    </div>
                    <div>
                        <form>
                            <div class="form-group">
                                <label for=""></label>
                                <input type="text" class="form-control" name="" id="" placeholder="Pesquisar" />
                            </div>
                        </form>

                    </div> {/* fim do form */} 


            </Col>
        </Row>
    )

}