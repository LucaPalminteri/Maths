import React, {useState} from "react";

export default function Maths(props) {

    const [input,setInput] = useState('')
    const [num,setNum] = useState(Math.floor(Math.random()*99))
    const [res,setRes] = useState(Math.floor(Math.random()*(100-num))+num)
    const [message,setMesagge] = useState()

    function handleInput(event) {
        setInput(event.target.value)
    }

    function handleKeyPress(target) {
        if(target.charCode === 13) {
            toggle(target)
        }
    }

    function toggle(event) {
        if(num + parseInt(input) == res) {
            setMesagge('correct')
        }
        else  {
            setMesagge('incorrect')
        }
        setTimeout(()=>{
            setInput('')
            setNum(Math.floor(Math.random()*99))
            setRes(Math.floor(Math.random()*(100-num))+num)
            setMesagge()
        },1000)
    }


    return (
        <div >
            <div className="operation">
                {num} + <input 
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