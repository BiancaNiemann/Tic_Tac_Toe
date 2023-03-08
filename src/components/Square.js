import React from "react" 

export default function Square({value, onClick}){
    return (
        <button className="border-2 text-4xl font-bold focus:outline-none border-orange-600 cursor-pointer bg-orange-200 text-orange-900"  onClick={onClick}>{value}</button>
    )
}