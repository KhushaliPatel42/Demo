import React,{useState,useEffect} from 'react';
import axios from 'axios';
export default function Post() {
  useEffect(() => {
   
  })
    const [input, setInput] = useState({
      email:"",
      pwd:""
    })
   
    function onChangeHandle(e){
      setInput({[e.target.name]:e.target.value});
    }
    
    function onSubmitHandle(ev){
      ev.preventDefault();
        console.log(input);
        axios.post('https://jsonplaceholder.typicode.com/todos',input).then((response)=>{
          console.log(response);
        }).catch((e)=>{
          console.log(e);
        })
    }
    
    return (
       <>
        <form onSubmit={onSubmitHandle} >
  <div className="mb-3">
    <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
    <input type="text"  onChange={onChangeHandle} name='email' className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
  </div>
  <div className="mb-3">
    <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
    <input type="text"  onChange={onChangeHandle} className="form-control" name='pwd'  id="exampleInputPassword1" />
  </div>
  <button type="submit" className="btn btn-primary" >Submit</button>
</form>
       </>
    )
}
