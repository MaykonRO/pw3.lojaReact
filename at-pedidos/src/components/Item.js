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
        <li style={item}>
            12# Pizzas Doces 
            <div>
                <button style={stl_item}><Icon.CheckSquare /></button> 
                <button style={stl_item}> <Icon.Trash  /> </button>
            </div>
        </li>
    )
}