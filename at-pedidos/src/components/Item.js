import { React } from 'react-bootstrap';
import { Row, Col, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import * as Icon from 'react-bootstrap-icons';

export default function Item(props){
    const stl_item =  {
        backgroundColor: "White",
        border: "none",
        

    }, item ={
        display: "flex",
        flexDirection: "row",
        listStyleType: "none"
    }

    return(
        <tr>
            <td>{props.item.cd_categoria}#</td>
            <td>{props.item.nm_categoria}</td>
            <Button variant='danger'><Icon.Trash></Icon.Trash> </Button>
            <Button variant='warning'> <Icon.PencilSquare></Icon.PencilSquare> </Button>
        </tr>
    )
}