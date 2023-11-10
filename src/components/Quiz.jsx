    import React from "react";
    import './Quiz.css'
    import Check from '../assets/system-solid-31-check.gif'
    import Cross from '../assets/system-solid-29-cross.gif'

    export default function Quiz(props) {
        const [clicked, setClicked] = React.useState(false);
        const [opt,setOpt] = React.useState([])
        const [selAns,setSelAns] = React.useState();
        const [correct,setCorrect] = React.useState(false);

    

        function calcScore(elem,index,id){
        setClicked(index);
        const res=  elem===props.correctAns;

        let quizScore = props.score;
        quizScore[id]= res ? 1 : 0;
            console.log(res)
          props.setScore(quizScore)
           
        }
        
        function setColors(elem){
            return  elem===props.correctAns 
        }

        function disbleBtn(){
            // console.log(props.score[props.question])
            return  props.submit ? { cursor: 'not-allowed' } : { cursor: 'default' };
        }

    return (
        <div className="quizComponent p-2 ">
            <div className="wrapper overflow-x-clip">
            <div className="flex items-center justify-center">
                <h2 className="pt-3">{props.question}</h2>
                {props.submit ? (
                     props.score[props.id] === 1 ? <img className="h-6 mt-2 mx-5" src={Check} alt="" /> : 
                     <img className="h-6 mt-2 mx-5" src={Cross} alt="" />) : null}

            </div>
            <div className="divider"></div>              
            <div className="options ">
            {props.options.map((elem,index) => (
                <div className="indicator ">
                <button
                onClick={ ()=> !props.submit ? calcScore(elem,index,props.id) : null}
                className={`${clicked===index? ((!props.submit || elem === props.correctAns)?'bg-green max-w-full btn p-40': 'bg-red-600 max-w-full btn p-4' ) 
                : 'bn max-w-full mb-4 mx-4'} ${setColors(elem) && props.submit   ?'bg-green max-w-full btn p-40':'btn max-w-full mb-4 mx-4'}`}
                value={elem}
                id={props.id}
                style={disbleBtn()}
                >
                {elem}
                </button>
                {props.submit ? <span className={`indicator-item  indicator-top indicator-middle badge badge-primary`}>
                    {elem === props.correctAns ? 'Correct' : 'incorrect'}</span>:null}
               
                </div>
            ))}
            </div>
            {/* <hr className="my-2" /> */}
           </div>
        </div>
        );
    }

//     <div className="quizComponent p-2">
//     <h2>{props.question}</h2>
//     <div className="options">
//     {props.options.map((elem,index) => (
//         <button
//         onClick={ ()=> calcScore(elem,index,props.id)}
//         className={`${clicked===index? 'bg-green btn p-4' : 'btn my-4'} ${setColors(elem) ?'bg-green btn p-4':'bg-red-500 btn p-4'}`}
//         value={elem}
//         id={props.id}
//         disabled = {props.submit?true:false}
//         >
//         {elem}
//         </button>
//     ))}
//     </div>
//     <hr className="my-2" />
// </div>