import React,{useContext} from 'react'
import {Button} from '@material-ui/core'
import { AuthContext } from '../../ContextProvider/AuthContextProvider'
import "./Result.css"

function Result(){
    const {score} = useContext(AuthContext);

    return (
        <div className="result">
            <h1 className="title">
                Final Score:{score}
            </h1>
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
