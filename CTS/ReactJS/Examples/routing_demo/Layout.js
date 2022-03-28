import React from 'react'
import {BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './Home'
import NavBar from './NavBar'
import AboutUs from './AboutUs';
import Operations from './Operations';
import Services from './Services';
import Blogs from './Blogs';
import ContactUs from './ContactUs'

export default function Layout() {
    return (
        <BrowserRouter>
            <NavBar></NavBar>
            <Routes>
                <Route path="/" element={<Home />}></Route>
                <Route path="/aboutus" element={<AboutUs />}></Route>
                <Route path="/operations" element={<Operations />}></Route>
                <Route path="/services" element={<Services />}></Route>
                <Route path="/blogs" element={<Blogs />}></Route>
                <Route path="/contactus" element={ <ContactUs/>}></Route>
            </Routes>
        </BrowserRouter>
    )
}