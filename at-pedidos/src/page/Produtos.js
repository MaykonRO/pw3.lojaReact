import FormProdutos from "../components/FormProdutos";
import { Container , Row, Col, Button } from 'react-bootstrap';

export default function Produtos() {
    return(
        <Container>
            <Row>
                <Col>
                    <h1>Produtos</h1>
                    <FormProdutos cor="black" corTxt="white" />
                </Col>
            </Row>
        </Container>
    );    
}