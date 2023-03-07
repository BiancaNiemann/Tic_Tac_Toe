import React, {useState} from "react" 
import { calculateWinner } from "../helper"
import Board from "./Board"

const styles = {
    width: '200px',
    margin: '20px auto',
    fontFamily: 'Arial'
}

export default function Game(){
    const [history, setHistory] = useState([Array(9).fill(null)])
    const [stepNumber, setStepNumber] = useState(0)
    const [xIsNext, setXIsNext] = useState(true)
    const winner = calculateWinner(history[stepNumber])

/*console.log(history)
console.log(stepNumber)
console.log(xIsNext)
console.log(winner)*/


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
                <li key={move}>
                    <button onClick={() => jumpTo(move)}>{destination}</button>
                </li>
            )
        })
    }

    return (
        <>
            <Board squares={history[stepNumber]} onClick={handleClick} />
            <div style={styles}>
                <p>{winner ? "Winner:" + winner : "Next Player: " + (xIsNext ? 'X' : 'O')}</p>
                {renderMoves()}
            </div>
        </>

    )
}