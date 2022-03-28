import React, {useState} from "react"
import './Box.css'

export default function UseRefDemoFun() {
    let [myColor, setMyColor] = useState('darkgreen');
    return (
        <div>
            <div className="box" style={{backgroundColor: myColor}}></div>
            
            <div className="text-center mt-4">
                <button onClick={()=>setMyColor('red') } className="btn btn-danger btn-lg">Red</button>
                <button onClick={ ()=>setMyColor('green')} className="btn btn-success btn-lg">Green</button>
                <button onClick={ ()=>setMyColor('blue')} className="btn btn-primary btn-lg">Blue</button>
            </div>
        </div>
    )    
}