import { Col, Row, Button, Table, Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect, useState } from 'react';
import Item from '../components/Item';
import Busca from '../components/Busca';
import Foter from '../components/Foter';
import BotaoHover from '../components/BotaoHoverTags';
import * as Icon from 'react-bootstrap-icons';

export default function Compras(){
    let [lista, setLista] = useState([]);

    let carregar = async () => {
        let resposta = await fetch('http://api.profrodolfo.com.br/ajax.php?acao=&list');
        let dados = await resposta.json();
        setLista(dados);
    }
    useEffect(() => {
        carregar();
    }, []);

    return(
        <Container>
            <Busca placeH='pesquisar...' />
            <Row className="mt-3 mb-3" >
                <Col xs={{span:10}}>
                    <Table responsive className='mb-3'>
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Nome</th>
                            <th>Opções</th>
                        </tr>
                    </thead>
                    <tbody className='src'>
                        {lista.map((item, index) => (
                            <Item key={index} item={item} />
                        ))}
                    </tbody>

                </Table>

                <Foter cor="black" corTxt="white" />

                </Col>
                
            </Row>
        </Container>
    );
}