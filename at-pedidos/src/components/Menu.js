import * as Icon from 'react-bootstrap-icons';
import { Col, Container, Row } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState, useRef } from 'react';
import Button from 'react-bootstrap/Button';
import Overlay from 'react-bootstrap/Overlay';
import Compras from '../page/Compras';
import Produtos from '../page/Produtos';
import Home from '../page/Home';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import BotaoHoverTags from './BotaoHoverTags';
import BotaoHoverCart from './BotaoHoverCart';
import BotaoHoverArchive from './BotaoHoverArchive';


export default function Menu(props) {
    const stl_menu = {
        backgroundColor: [props.cor],

    },
        centro = {
            display: "flex",
            justifyContent: "space-around"

        }, sizeIcon = {
            color: [props.corTxt],
            width: "35px",
            height: "35px"
        }
    const botoes = {
        backgroundColor: [props.corb],
        border: "none"
    }
    const sizeIconhover = {

    };
    const [show, setShow] = useState(false);
    const target = useRef(null);

   

        return (
            <Router>
                <Container style={stl_menu}>
                    <div style={centro}>
                        <div>
                            <Link to="/">
                                <button style={botoes}>
                                   <BotaoHoverCart/> 
                                </button>

                            </Link>
                        </div>

                        <div>
                            <Link to="/compras">
                                <button style={botoes}>
                                    <BotaoHoverTags />
                                </button>

                            </Link>
                        </div>

                        <div>
                            <Link to="/produtos">
                                <button style={botoes}>
                                    
                                    <BotaoHoverArchive/>
                                </button>

                            </Link>
                        </div>

                    </div> {/* FIM DA DIV DE CENTRO  */}

                </Container>



                <Routes>
                    <Route path='/' element={< Home />}>s</Route>
                    <Route path='Compras' element={< Compras />}>s</Route>
                    <Route path='Produtos' element={< Produtos />}>s</Route>
                </Routes>

            </Router>


        )

    }