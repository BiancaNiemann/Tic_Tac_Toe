import React, {useState} from "react" 
import { calculateWinner } from "../helper"
import Board from "./Board"

export default function Game(){
    const [history, setHistory] = useState([Array(9).fill(null)])
    const [stepNumber, setStepNumber] = useState(0)
    const [xIsNext, setXIsNext] = useState(true)
    const winner = calculateWinner(history[stepNumber])

    function handleClick(i){
        const timeInHistory = history.slice(0, stepNumber + 1)
        const current = timeInHistory[stepNumber]
        const squares = [...current]
        if (winner || squares[i]) return;
        squares[i] = xIsNext ? 'X' : 'O'
        setHistory([...timeInHistory, squares])
        setStepNumber(timeInHistory.length)
        setXIsNext(!xIsNext)
    }

    function jumpTo(step) {
        setStepNumber(step)
        setXIsNext(step % 2 === 0)
    }

    function renderMoves(){
        return history.map((_step, move) => {
            const destination = move ? `Go to move#${move}` : `Go to start`
            return (
                <li key={move} className="list-none">
                    <button className="my-2 mx-8 bg-gray-800 text-white w-40 py-3 rounded" onClick={() => jumpTo(move)}>{destination}</button>
                </li>
            )
        })
    }

    function clearBoard(){
        setHistory([Array(9).fill(null)])
        setStepNumber(0)
        setXIsNext(true)
    }

    return (
        <div className="bg-blue-300 flex flex-col items-center h-screen">
            <h1 className="text-5xl mt-16 text-orange-600 font-extrabold border-orange-600 border-dotted border-b-8">Tic-Tac-Toe</h1>
            <Board squares={history[stepNumber]} onClick={handleClick} />
            <div>
                <p className="text-2xl text-orange-600 font-bold text-center mb-4">{winner ? "Winner:" + winner : "Next Player: " + (xIsNext ? 'X' : 'O')}</p>
                {stepNumber >= 1 && <ul className="grid grid-cols-2">{renderMoves()}</ul>}
            </div>
            <button className="mt-8 w-64 bg-orange-700 py-4 rounded text-gray-900 text-2xl uppercase font-bold" onClick={clearBoard}>Restart the game</button>
        </div>

    )
}