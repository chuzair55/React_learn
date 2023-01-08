import Axios from "axios";
import { useEffect, useState } from "react";


function ApiFetch() {
    /*fetch("https://catfact.ninja/fact")
    .then((res)=>res.json())
    .then((data)=>{console.log(data);
    });*/

    const [catfact, setCatFact]=useState("");

    const fetchData=()=>{
        Axios.get("https://catfact.ninja/fact")
        .then((res)=>{
        setCatFact(res.data.fact);
    })
        
    }
    useEffect(()=>{
        
    },[])

    
    return (
        <div className="ApiFetch">
            <button onClick={fetchData}>Generate cat Facts</button>
            <p>{catfact}</p>

        </div>
    )
    
}
export default ApiFetch;