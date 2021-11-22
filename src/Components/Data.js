import axios from 'axios';
import React,{useState,useEffect} from 'react'
export default function Data() {
    const [option, setoption] = useState(0);
    const [Name, setName] = useState();
    const [moves, setmoves] = useState()
    useEffect(() => {
       
        async function Data(){

            const response= await axios.get(`https://pokeapi.co/api/v2/pokemon/${option}`);
            // console.log(response.data.name);
            setName(response.data.name);
            setmoves(response.data.moves.length);
            
        }   
        Data();
       
    })
return (
        <>
            <h1>you have select {option} value</h1>
            <h1>my name is <span style={{color:"blue"}}>{Name}</span></h1>
            <h1>i have <span style={{color:"blue"}}>{moves}</span> moves</h1>
          <select value={option} onChange={(e)=>{
              setoption(e.target.value);
          }}>
              <option value="1">1</option>
              <option value="25">25</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
          </select>
        </>
    )
}
