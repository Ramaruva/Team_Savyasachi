import React, {useState} from 'react'
import { ErrorMessage } from '../Error/ErrorMessage'
import "./Questions.css"

function Questions({
    currentQuestion,
    setCurrentQuestion,
    data,
    options,
    correct,
    setScore,
    score,
    setQuestions
}){
    const [selected,setSelected] = useState()
    const [error,setError] = useState(false)
    return (
        <div>
           <h1>Question {currentQuestion + 1}</h1>

        <div className="singleQuestion">
            <h2>{data[currentQuestion]?.question}</h2>
            
            {/* <div className="options">
                {error && <ErrorMessage>{error}</ErrorMessage>}
                {
                    options && 
                    options.map(i=>(
                        <button key={i}>
                            {i}
                        </button>
                    ))
                }
            </div> */}
            </div>
        </div>
    )
}

export default Questions
