import React,{useContext} from 'react'
import {Button} from '@material-ui/core'
import { AuthContext } from '../../ContextProvider/AuthContextProvider'
import "./Result.css"

function Result(){
    const {score,setScore} = useContext(AuthContext);

    return (
        <div className="result">
            <span className="title">
                Final Score:{score}</span>
            <Button
               variant="contained"
               color="secondary"
               size="large"
               style={{alignSelf: "center",marginTop:20}} 
                href="/quiz/pages"
            >
                GO To Quiz Page
            </Button>
        </div>
    )
}

export default Result
