import React from "react" 

const style = {
    background: 'lightblue',
    border: '2px solid darkblue',
    fontSize: '30px',
    fontWeight: '800',
    cursor: 'pointer',
    outline: 'none'
}

export default function Square({value, onClick}){
    return (
        <button style={style} onClick={onClick}>{value}</button>
    )
}