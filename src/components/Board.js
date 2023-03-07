import React from "react" 
import Square from "./Square"

const style = {
    border: '4px solid darkblue',
    borderRadius: '10px',
    width: '250px',
    height: '250px',
    margin: '50px auto',
    display: 'grid',
    gridTemplate: 'repeat(3, 1fr) / repeat(3, 1fr)'
}

export default function Board({squares, onClick}){
    return (
        <div style={style}>
            {squares.map((square, i) => (
                <Square value={square} key={i} onClick={()=> onClick(i)}/>
            ))}
        </div>

    )
}