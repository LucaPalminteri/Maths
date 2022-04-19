import React, {useState} from "react";

export default function Maths(props) {

    const [input,setInput] = useState('')
    const [res,setRes] = useState(Math.floor(Math.random()*(10)))
    const [num,setNum] = useState(Math.floor(Math.random()*10 + 1)* res)
    const [message,setMesagge] = useState()


    res === 0 ? setRes(prev => prev + 1): res
    res>num ? setRes(Math.floor(Math.random()*(10))) : res

    function handleInput(event) {
        setInput(event.target.value)
    }

    function handleKeyPress(target) {
        if(target.charCode === 13) {
            toggle(target)
        }
    }

    function toggle(event) {
        if(num / parseInt(input) == res) {
            setMesagge('correct')
        }
        else  {
            setMesagge('incorrect')
        }
        setTimeout(()=>{
            let randomNumber = Math.floor(Math.random()*(10))
            setInput('')
            setRes(randomNumber + 1)
            setNum((randomNumber + 1)* res)
            setMesagge()
        },1500)
    }


    return (
        <div >
            <div className="operation">
                {num} / <input 
                    onKeyPress={handleKeyPress}
                    name="input"
                    value={input}
                    onChange={handleInput} 
                    className="input" 
                    type='number' 
                    min='1' 
                    max='100'/> = {res}
            </div>
            <button onClick={toggle}>
                Cheeck
            </button>
            {message === 'correct' ? <h4 className="message c">Correct</h4> : message === 'incorrect' ? <h4 className="message i">Incorrect</h4> : message}
        </div>
    )
}