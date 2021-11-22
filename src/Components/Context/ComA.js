import React from 'react'
import ComB from './ComB';
 const ComA = () => {
    return (
        <>
        <div style={{border:"2px solid black",backgroundColor:"orange"}}>
            <h1>This is Child CompA</h1>
        <ComB />
        </div>
        </>
    )
}
export default ComA;