import React from 'react'
import { useState } from 'react'
import Quiz from './components/Quiz'
import {decode} from 'html-entities';
import './App.css'
import Home from './components/Home';
import { Route,Routes,Outlet } from 'react-router-dom';
import QuizComponent from './QuizComponent';

export default function App() {

  // const [question,setQuestion] = React.useState([]);
  // const[score,setScore] = React.useState([0,0,0,0,0])
  // const [submit,setSubmit] = React.useState(false)
  // const [elements,setElements] = React.useState([]);



  // React.useEffect(() =>{
  //   fetch("https://opentdb.com/api.php?amount=5&difficulty=medium")
  //   .then(e => e.json())
  //   .then((res) =>{
  //     var elements = []
  //     if(res.results.length>0 ){
  //       for(let i=0;i<res.results.length;i++){
  //          const elem = {
  //              question:decode(res.results[i].question),
  //              options:shuffle([...res.results[i].incorrect_answers,res.results[i].correct_answer]),
  //              correctAns:res.results[i].correct_answer,
  //              id:i
  //            }
  //       elements.push(elem)
  
  //       }
  //     setQuestion(elements)
  //     }}
  //   )

  // },[])

  // function shuffle(array) {
  //   let currentIndex = array.length,  randomIndex;
  //   while (currentIndex > 0) {
  //     randomIndex = Math.floor(Math.random() * currentIndex);
  //     currentIndex--;
  //     [array[currentIndex], array[randomIndex]] = [
  //       array[randomIndex], array[currentIndex]];
  //   }
  
  //   return array;
  // }

// function generateElements(){
// // console.log(question.results.length)
//  if(question.results.length>0 ){
//   for(let i=0;i<question.results.length;i++){
//     const elem = {
//       question: question.results[i].question,
//       options:shuffle([...question.results[i].incorrect_answers,question.results[i].correct_answer]),
//       correctAns:question.results[i].correct_answer,
//       id:i
//     }
//   elements.push(elem)
   
//   }
//     // console.log(elements)
// }
// }
// console.log(question.results )

// function handleSubmit(){
// setSubmit(true)
// }

// function playAgain(){
//   window.location.reload();
// }


// generateElements()

  return (
    <main>
      <Routes>
        <Route path='/' element={<Home/>}>
        </Route> 
          <Route path='quiz' element={<QuizComponent/>}/>
      </Routes>
      
    </main>
  )
}



// {elements.map((elem)=>{
//   <Quiz question={elem.question} options={elem.options} correctAns={elem.correctAns}/>
// })}

{/* <div>{JSON.stringify(question)}</div>
{question.map((elem) => 
 <Quiz question={elem.question}  options={elem.options} submit={submit} setSubmit={setSubmit} correctAns={elem.correctAns}  
 setScore={setScore} score={score} id={elem.id} />
)}
<div className='btnContainer '>
<button onClick={handleSubmit} className='btn btn-primary'>Submit</button>
<button onClick={playAgain} className='playAgain btn btn-primary'>Play Again</button>
<div className='result'>your score is { score.reduce(function(a,b){ return +a + +b; })}</div>
</div> */}