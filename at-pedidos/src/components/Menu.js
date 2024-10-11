import * as Icon from 'react-bootstrap-icons';
import { Col, Row, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

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
    const botoes={
        backgroundColor: [props.cor],
        border: "none"
    }
    const sizeIconhover = {

    }


    return (
        <Row style={stl_menu}>
            <Col >
                <div style={centro}>
                    <div>
                        <button style={botoes}>
                            <Icon.CartFill style={sizeIcon} />
                        </button>
                    </div>

                    <div>
                        <button style={botoes}> 
                            <Icon.TagsFill style={sizeIcon} />
                        </button>
                    </div>

                    <div>
                        <button style={botoes}>
                            <Icon.ArchiveFill style={sizeIcon} />

                        </button>
                    </div>

                </div> {/* FIM DA DIV DE CENTRO  */}
            </Col>
        </Row>
    )

}