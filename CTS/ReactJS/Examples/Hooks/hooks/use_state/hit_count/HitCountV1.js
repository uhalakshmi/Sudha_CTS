import React, { useState } from 'react'

export default function HitCount() {
    let [count, setCount] = useState(0)
    // let count = 0;
    function hitCount(){
        count++;
        console.log("count: ", count);
        setCount(count)
    }
    return (
        <div>
            <h3>{count}</h3>
            <button onClick={hitCount}>HitMe</button>
        </div>
    )
}


