import React from 'react'
import { fname,lname } from '../../App';
const ComC = () => {
    return (
        <>
            <div style={{border:"2px solid black",backgroundColor:"green"}}>
            <h3>This is CompC</h3>
            <fname.Consumer>{(data)=>{
                return <lname.Consumer>{(d)=>{
                    return <h5>My name is {data} {d} <span style={{color:"yellow"}}>(this is coming using context API)</span></h5> 
                }}</lname.Consumer> 
            }}</fname.Consumer>
            </div>
        </>
    )
}
export default ComC;

