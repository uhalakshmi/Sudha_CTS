import React from 'react'
import { useNavigate} from 'react-router-dom'

export default function NavButton() {
    const navigate = useNavigate();
    return (
        <h3><button onClick={() => navigate("/")}>Elephent</button>
            <button onClick={() => navigate("/horse/51/Arabian")}>Horse</button> </h3>
    )
}