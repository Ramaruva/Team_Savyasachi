import React, { useEffect,useState, useContext } from 'react'
import {useSelector} from "react-redux"
import {CircularProgress} from "@material-ui/core"
import "./Quiz.css"
import Questions from '../Questions/Questions'
import { AuthContext } from '../../ContextProvider/AuthContextProvider'


function QuizQuestions(){
    
    //const [questions,setQuestions] = useState([])
   // const [score,setScore] = useState(0)
    const [options,setOptions] = useState([])
    const [currentQuestion,setCurrentQuestion] = useState(0)
    const data = useSelector(state => state.quiz.data)

    console.log(data)
    const {score,setScore,name,setName} = useContext(AuthContext);

    const settingOptions =() =>{
      if(data.length > 0){
        let arr = data[currentQuestion]?.incorrect_answers.map((e)=>e)
        //console.log(arr)
        let correctAnswer = data[currentQuestion]?.correct_answer
        //console.log(correctAnswer)
        arr.push(correctAnswer)
        setOptions(
            handleShuffle(arr)
        );
        }
    }

    useEffect(() => {
      console.log(data)
      settingOptions()
      }, [currentQuestion, data]);
    
      const handleShuffle = (option) => {
        return option.sort(() => Math.random() - 0.5);
      };
      console.log(options)


    //console.log(options)

    return (
        <div className="quiz">
            <span className="subtitle">Welcome,{name}</span>
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
