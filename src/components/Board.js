import React from "react" 
import Square from "./Square"

export default function Board({squares, onClick}){
    return (
        <div className="border-4 border-orange-900 rounded-lg mt-32 mb-8 w-64 h-64 grid grid-rows-3 grid-cols-3 ">
            {squares.map((square, i) => (
                <Square value={square} key={i} onClick={()=> onClick(i)}/>
            ))}
        </div>

    )
}