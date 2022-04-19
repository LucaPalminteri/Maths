import React, {useState, useContext} from "react";
import { MathContext } from "./MathContext";

export default function Maths(props) {

    const {addGames,addWin,changeOption} = useContext(MathContext)

    const [input,setInput] = useState('')
    const [num,setNum] = useState(Math.floor(Math.random()*100))
    const [res,setRes] = useState(Math.floor(Math.random()*(num)))
    const [message,setMesagge] = useState()

    res>num ? setRes(Math.floor(Math.random()*(num))) : res;

    function handleInput(event) {
        setInput(event.target.value)
    }

    function handleKeyPress(target) {
        if(target.charCode === 13) {
            toggle(target)
        }
    }

    function toggle(event) {
        addGames()
        if(num - parseInt(input) == res) {
            setMesagge('correct')
            addWin();
        }
        else  {
            setMesagge('incorrect')
        }
        setTimeout(()=>{
            setInput('')
            setNum(Math.floor(Math.random()*99))
            setRes(Math.floor(Math.random()*(100-num))+num)
            setMesagge()
            changeOption()
        },1000)
    }


    return (
        <div >
            <div className="operation">
                {num} - <input 
                    autoFocus
                    onKeyPress={handleKeyPress}
                    name="input"
                    value={input}
                    onChange={handleInput} 
                    className="input" 
                    type='number' 
                    min='0' 
                    max='100'/> = {res}
            </div>
            <button onClick={toggle}>
                Cheeck
            </button>
            {message === 'correct' ? <h4 className="message c">Correct</h4> : message === 'incorrect' ? <h4 className="message i">Incorrect</h4> : message}
        </div>
    )
}