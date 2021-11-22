import React,{useState,useEffect} from 'react'
import './Style.css'
export default function Button() {
      //use Effect Hook
      useEffect(() => {
        document.title=`you have clicked ${count} times`;
        fetch("https://jsonplaceholder.typicode.com/todos/1").then((response)=>{
            console.log(response);
            return response.json();
        }).then((jsResponse)=>{
            console.log(jsResponse);
            let data=JSON.stringify(jsResponse);
            console.log(data);
            document.getElementById("demo").innerHTML=data;
        }).catch((error)=>{
            alert("request rejected");
        })
        }
    ,);
    //use State hooks
    const [count, setcount] = useState(0);
    const [bg, setbg] = useState({
        backgroundColor:"black",
    });
    const [btnTxt, setBtnTxt] = useState("click here")
    function bgChange(){
        setbg({backgroundColor:"red"});
        setBtnTxt("clicked");
        setcount(count+1);
        
    }
    function bgDefault(){
        setbg({backgroundColor:"black"});
        setBtnTxt("click here");
    }
  
    return (
        <div style={bg}>
            <h1>{count}</h1>
            <button onClick={bgChange} onDoubleClick={bgDefault}>{btnTxt}</button>
            <p id="demo"></p>
        </div>
    )
}
