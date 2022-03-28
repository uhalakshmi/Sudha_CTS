import React, { useState } from 'react'

export default function HitCount() {
    let [count, setCount] = useState(0)
    return (
        <div>
            <h3>{count}</h3>
            <button onClick={()=>setCount(count+1)}>HitMe</button>
        </div>
    )
}


