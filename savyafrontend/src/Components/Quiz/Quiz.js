// import React, {useState} from 'react'
// import axios from 'axios'
// import Pages from './Pages/Pages'

// function FetchQuestions(){

//     const [questions, setQuestions] = useState("")
//     const [results, setResults] = useState(0)
    
//     const fetchQuestions = async (category="",difficulty="") =>{
//         const {data} = await axios.get(`https://opentdb.com/api.php?amount=10${
//             category && `&category=${category}`}
//             ${difficulty && `&difficulty=${difficulty}`}
//             &type=multiple`)
//             console.log(data)
//     }
//     return (
//         <div>
//         <Pages fetchQuestions={fetchQuestions} />
//         </div>
//     )
// }

// export default FetchQuestions
// import axios from "axios"

// const fetchQuestions = async (category="",difficulty="") =>{
//     const {data} = await axios.get(`https://opentdb.com/api.php?
//     amount=10${category && `&category=${category}`}${difficulty && `&difficulty=${difficulty}`}&type=multiple`)
//         console.log(data)
// }

// export default fetchQuestions;
