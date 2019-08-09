import React from 'react';

const Square = (props) => 
<div style={{
  backgroundColor: props.color,
  gridColumn: `${props.position.col}/${(props.position.col+1)}`,
  gridRow: `${props.position.row}/${(props.position.row+1)}`,
  fontSize: '160%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center'
}}>
</div>

export default (props) => props.boxes.map(box=>
  <Square 
    color={box.color} 
    position={box.position}
  />) 