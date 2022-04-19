import React, {useState, useEffect} from "react";
import Add from './components/Add'
import Subtract from './components/Subtract'
import Multiply from './components/Multiply'
import Divide from './components/Divide'

export default function Maths() {

    const [games,setGames] = useState(0)
    const [wins,setWins] = useState(0)
    //const [random,setRandom] = useState(Math.floor(Math.random()*4))
    const [random,setRandom] = useState(0)

    return (
        <div className="container">
            <div className="points">
                <span>Points: {wins}/{games} - </span>
                <span>{games === 0 ? 0 : wins/games}%</span>
            </div>
           {random == 0 ? <Add/> : 
           random == 1 ? <Subtract/> :
           random == 2 ? <Multiply/> :
           random == 3 ? <Divide/> : random}
        </div>
    )
}