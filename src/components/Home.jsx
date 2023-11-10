import { Outlet,Link } from "react-router-dom";
import React from "react";
import '../App.css'

export default function Home(){
    // const[demo,setDemo] = React.useState(false)

    // function handleClick(){
    //     setDemo(!demo);
    // }


    return(
        <div>
            <Outlet/>
            <div className="homeComponent ">
                 <h1>Welcome to Quizzical App</h1>
                 <Link className="playBtn" to={'/quiz'}>
                 <button>play</button>
                 </Link>
                 {/* <button onClick={handleClick}>demo</button> */}
                 {/* {demo?<h2>hello demo</h2>:null} */}
            </div>
        </div>
    )
}