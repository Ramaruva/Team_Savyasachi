import React, {useState} from 'react'
import "./Pages.css"
import {TextField,MenuItem, Button} from "@material-ui/core"
import Categories from "../Data/Categories"
import {useHistory} from "react-router"
import {ErrorMessage} from "../Error/ErrorMessage"
import {fetchQuestions} from "../../../Redux/Quiz/action"
import {useDispatch} from "react-redux"


function Pages(){
    const [name,setName] = useState("")
    const [category,setCategory] = useState("")
    const [error,setError] = useState(false)
    const [difficulty,setDifficulty] = useState("")
    const history = useHistory()

    const dispatch = useDispatch()

    const handleSubmit = () =>{
        if(!category || !difficulty || !name){
            setError(true);
            return;
        }
        else{
            setError(false)

            dispatch(fetchQuestions(category,difficulty))
            history.push("/quiz/questions")
        }
    }
    return (
        <div className="content">
            <div className="settings">
                <span style={{fontSize:30}}>Quiz Settings</span>
            <div className="settings_select">
                {error && <ErrorMessage>Please Fill all the fields</ErrorMessage>}
                <TextField
                style={{marginBottom:25}}
                label="Enter Your Name" 
                variant="outlined"
                onChange={(e)=>setName(e.target.value)}
                />
                <TextField
                select
                label="Select Category"
                variant="outlined"
                value={category}
                onChange={(e)=>setCategory(e.target.value)}
                style={{marginBottom:30}}
                >
                    {
                        Categories.map((cat)=>(
                            <MenuItem key={cat.category} value={cat.value}>
                               {cat.category}     
                            </MenuItem>
                        ))
                    }
                </TextField>
                <TextField
                select
                label="Select Difficulty"
                value={difficulty}
                onChange={(e)=>setDifficulty(e.target.value)}
                variant="outlined"
                style={{marginBottom:30}}
                >
                    <MenuItem key="Easy" value="easy">
                        Easy
                    </MenuItem>
                    <MenuItem key="Medium" value="medium">
                        Medium
                    </MenuItem>
                    <MenuItem key="Hard" value="hard">
                        Hard
                    </MenuItem>
                </TextField>
                <Button variant="contained" size="large" color="primary" onClick={handleSubmit} >
                    Start Quiz
                </Button>
            </div>
            </div>
            <img src="/quiz.svg" className="banner" alt="quiz img" />
        </div>
    )
}

export default Pages
