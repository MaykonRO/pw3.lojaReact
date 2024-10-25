import React, { useState } from 'react';
import * as Icon from 'react-bootstrap-icons';

export default function BotaoHoverCart(props) {
  const [isHovered, setIsHovered] = useState(false);

  const estiloBase = {
    padding: '10px 20px',
    backgroundColor: 'black',
    color: 'white',
    border: 'none',
    cursor: 'pointer',
    width: '35px',
    height: '35px'
  };

  const estiloHover = {
    backgroundColor: 'darkblue'
  };

  return (
    <button
    type='button'
    style={isHovered ? {...estiloBase, ...estiloHover} : estiloBase}
    onMouseEnter={() => setIsHovered(true)}
    onMouseLeave={() => setIsHovered(false)}

    
    >

    <Icon.CartFill/>
  </button>
      

  );
}
