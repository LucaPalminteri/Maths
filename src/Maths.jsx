import React, {useState, useEffect} from "react";
import Add from './Add'

export default function Maths() {

    const [input,setInput] = useState(0)
    const [num,setNum] = useState(Math.floor(Math.random()*99))
    const [res,setRes] = useState(Math.floor(Math.random()*(100-num))+num)
    const [games,setGames] = useState(0)
    const [wins,setWins] = useState(0)

    useEffect(()=>{

    },[])

    function handleInput(event) {
        setInput(event.target.value)
    }

    function toggle() {
        if(num + parseInt(input) == res) {
            console.log("Ok");
        }
        else  {
            console.log("Not Ok");
        }
        setTimeout(()=>{
            console.log("2s")
            setNum(Math.floor(Math.random()*99))
            setRes(Math.floor(Math.random()*(100-num))+num)
        },2000)
    }


    return (
        <div className="container">
            <div className="points">
                <span>Points: {wins}/{games} - </span>
                <span>{games === 0 ? 0 : wins/games}%</span>
            </div>
           <Add wins={wins}/>
        </div>
    )
}