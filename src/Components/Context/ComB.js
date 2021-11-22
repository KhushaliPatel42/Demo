import React,{useContext} from 'react'
import ComC from './ComC'
import { fname,lname } from '../../App'
const ComB = () => {
    const f = useContext(fname);
    const l = useContext(lname);
    return (
        <>
        <div style={{border:"2px solid black",backgroundColor:"white"}}>
           <h2>This is child CompB</h2> 
           <h2>my name is {f} {l} <span style={{color:"red"}}>(this is coming using usecontext)</span></h2> 
        <ComC />
        </div>
        {/* <fname.Consumer>{(n)=>{
            return <p>my name {n} rana</p>
        }}</fname.Consumer> */}
        </>
    )
}

export default ComB
