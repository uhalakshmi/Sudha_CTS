import React from 'react'
import { BrowserRouter, Routes, Route} from 'react-router-dom'
import Elephent from './Elephent'
import Header from './Header'
import Horse from './Horse'
import Tiger from './Tiger'

export default function AnimalsApp() {
    return (
        <BrowserRouter>
            <Header></Header>
            <Routes>
                <Route path="/" element={<Elephent />}></Route>
                <Route path="/tiger" element={<Tiger />}></Route>
                <Route path="/horse" element={ <Horse/>}></Route>
            </Routes>
        </BrowserRouter>
    )
}