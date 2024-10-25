import React, { useState } from 'react';
import * as Icon from 'react-bootstrap-icons';

export default function BotaoHoverTags(props) {
  const [isHovered, setIsHovered] = useState(false);

  const estiloBase = {
    padding: '10px 20px',
    backgroundColor: 'black',
    color: 'white',
    border: 'none',
    cursor: 'pointer'
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

      <Icon.TagsFill/>
    </button>
      

  );
}
