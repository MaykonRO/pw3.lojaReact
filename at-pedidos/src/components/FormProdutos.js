import { FormControl, React, FormData, FormSelect } from 'react-bootstrap';
import { Row, Col, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Form, FormLabel, FormGroup} from 'react-bootstrap';


export default function FormProdutos(props) {
    const cores_foter = {

        backgroundColor: [props.cor],
        color: [props.corTxt],

    }, aln_footer = {
    }, btn = {
        padding: "5px",
        width: "40px",
        height: "40px"
    }
    return (
        <footer style={aln_footer}>
            <div class="form-group">
                <Form id="cadastro" encType='multipart/form-data' >
                    <Row className='mt-3'>
                        <Col xs={{span: 4, offset:1}} >
                            <Form.Label></Form.Label>
                            <FormControl />
                        </Col>
                        <Col xs={{span: 4, offset:1}} >
                            <Form.Label></Form.Label>
                            <FormControl />
                        </Col>
                        <Col xs={{span: 4, offset:1}} >
                            <Button type='submit' className='mt-4' id='cadastrar'>Cadastrar</Button>
                        </Col>
                    </Row>
                    <Row className='mt-3'>
                        <Col xs={{span: 4, offset:1}} >
                            <Form.Label></Form.Label>
                            <FormControl />
                        </Col>
                        <Col xs={{span: 4, offset:1}} >
                            <Form.Label></Form.Label>
                            <FormControl />
                        </Col>
                        <Col xs={{span: 4, offset:1}} >
                            <Button type='submit' className='mt-4' id='cadastrar'>Cadastrar</Button>
                        </Col>
                    </Row>
                </Form>
            </div>

        </footer>
    )
}