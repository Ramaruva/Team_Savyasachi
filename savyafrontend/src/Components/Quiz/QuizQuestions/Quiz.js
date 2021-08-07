import React, { useEffect,useState } from 'react'
import axios from 'axios'
import {useDispatch,useSelector} from "react-redux"
import {CircularProgress} from "@material-ui/core"
import "./Quiz.css"
import Questions from '../Questions/Questions'

function QuizQuestions(){
    
    const [questions,setQuestions] = useState([])
    const [score,setScore] = useState(0)
    const [options,setOptions] = useState([])
    const [currentQuestion,setCurrentQuestion] = useState(0)
    const {data} = useSelector(state => state.quiz)

    console.log(data)

    useEffect(() => {
      console.log(data)
      if(data){
        setOptions(
            handleShuffle([
              data[currentQuestion]?.incorrect_answers,
              data[currentQuestion]?.correct_answer,
            ])
        );
        }
      }, [currentQuestion, data]);
    
      const handleShuffle = (option) => {
       // console.log(option)
        return option.sort(() => Math.random() - 0.5);
      };
     // console.log(options)


    //console.log(options)

    return (
        <div className="quiz">
            <span className="subtitle">Welcome,{}</span>
            {
             data ?( 
             <>
             <div className="quizInfo">
               <span>{data[currentQuestion]?.category}</span>
              <span>Score: {score}</span>
             </div>

             <Questions 
              currentQuestion={currentQuestion}
              setCurrentQuestion={setCurrentQuestion}
              data={data}
              options={options}
              correct = {data[currentQuestion]?.correct_answer}
              score={score}
              setScore={setScore}
              setQuestions={setQuestions}
             />
             </> 
             ):(
             <CircularProgress 
             style={{margin:100}} 
             color="inherit" 
             size={150} 
             thickness={1} 
             />
             )}
        </div>
    )
}

export default QuizQuestions
