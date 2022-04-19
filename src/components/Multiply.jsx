import React, {useState, useContext} from "react";
import { MathContext } from "./MathContext";

export default function Maths(props) {

    const {addGames,addWin,changeOption} = useContext(MathContext)

    const [input,setInput] = useState('')
    const [num,setNum] = useState(Math.floor(Math.random()*11))
    const [res,setRes] = useState(Math.floor(Math.random()*(11))*num)
    const [message,setMesagge] = useState()

    num === 0 ? setNum(Math.floor(Math.random()*11)) : num
    res<num ? setRes(Math.floor(Math.random()*(11))*num) : res


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
        if(num * parseInt(input) == res) {
            setMesagge('correct')
            addWin();
        }
        else  {
            setMesagge('incorrect')
        }
        setTimeout(()=>{
            let randomNumber = Math.floor(Math.random()*11)
            setInput('')
            setNum(randomNumber)
            setRes(randomNumber*num)
            setMesagge()
            changeOption()
        },1500)
    }


    return (
        <div >
            <div className="operation">
                {num} x <input 
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