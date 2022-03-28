import React, { useState} from "react"

import './Toggling.css'
export default function Toggling() {
    let [toggleFlag, setToggleFlag] = useState(true)
    
    return (
        <div>
            {toggleFlag && 
                <div className="box"></div>
            }
            
            <button onClick={()=>setToggleFlag(!toggleFlag)}>
                show/hide
            </button>
        </div>
    )
}

