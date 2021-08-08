import { Button } from '@material-ui/core'
import React, {useState,useContext} from 'react'
import { ErrorMessage } from '../Error/ErrorMessage'
import "./Questions.css"
import {useHistory} from "react-router-dom"
import Result from '../Result/Result'
import { AuthContext } from '../../ContextProvider/AuthContextProvider'

function Questions({
    currentQuestion,
    setCurrentQuestion,
    data,
    options,
    correct
}){
    const [selected,setSelected] = useState("")
    const [error,setError] = useState(false)
    const {score,setScore} = useContext(AuthContext);

   const handleSelect = (i) =>{
       if(selected === i && selected === correct){
            return "select"
       }
       else if(selected === i && selected !== correct){
           return "wrong"
       }
       else if(i === correct){
           return "select"
       }
   }
   const handleCheck = (i) =>{
       setSelected(i)
       if(i === correct) setScore(score + 1)
       setError(false)
   }

   const history = useHistory()
   const handleNext = () =>{
       if(currentQuestion > 8){
           history.push("/quiz/result")
       }
       else if(selected){
           setCurrentQuestion(currentQuestion+1)
            setSelected();
        }
        else{
            setError("Please select an option first")
        }
   }
   const handleQuit = () => {
    
   }
    return (
        <div className="question">
           <h1>Question {currentQuestion + 1}</h1>

        <div className="singleQuestion">
            <h2>{data[currentQuestion]?.question}</h2>
            
            <div className="options">
                {error && <ErrorMessage>{error}</ErrorMessage>}
                {
                     
                     options && options.map(i=>(
                        <button key={i} 
                        onClick={()=>handleCheck(i)}
                        className={`singleOption ${selected && handleSelect(i)}`}
                        disabled={selected}
                        >
                            {i}
                        </button>
                    ))
                }
            </div>
            <div className="controls">
                <Button
                    variant="contained"
                    color="secondary"
                    size="large"
                    style={{width:185}}
                    href="/quiz/pages"
                    onClick={handleQuit}
                >
                  Quit  
                </Button>
                <Button
                    variant="contained"
                    color="primary"
                    size="large"
                    style={{width:185}}
                    onClick={handleNext}
                >
                    Next Question
                </Button>
            </div>
            </div>
        </div>
    )
}

export default Questions
