import React, {Suspense, lazy} from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import NavBar from './NavBar'


const Home = lazy(() => import("./Home"))
const AboutUs = lazy(() => import("./AboutUs"))
const Operations = lazy(() => import("./Operations"))
const Services = lazy(() => import("./Services"))
const Blogs = lazy(() => import("./Blogs"))
const ContactUs = lazy(() => import("./ContactUs"))

// import Home from './Home'

// import AboutUs from './AboutUs';
// import Operations from './Operations';
// import Services from './Services';
// import Blogs from './Blogs';
// import ContactUs from './ContactUs'

export default function LazyLayout() {
    return (
        <BrowserRouter>
            <NavBar></NavBar>
            <Suspense fallback="">
                <Routes>
                    {/* <Suspense></Suspense> */}
                    
                        <Route path="/" element={<Home />}></Route>
                        <Route path="/aboutus" element={<AboutUs />}></Route>
                        <Route path="/operations" element={<Operations />}></Route>
                        <Route path="/services" element={<Services />}></Route>
                        <Route path="/blogs" element={<Blogs />}></Route>
                        <Route path="/contactus" element={ <ContactUs/>}></Route>
                    
                </Routes>
            </Suspense>
        </BrowserRouter>
    )
}