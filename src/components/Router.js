import {
    BrowserRouter,
    Routes,
    Route,
    Link
} from "react-router-dom";

import Home from "./Home";
import About from "./About";
import Contact from "./Contact";

export default function Router() {

    // link spacing
    const linkStyle= {
        padding: "5px"
    };

    // returns the BrowserRouter with links and routes for navigation
    return(
        <BrowserRouter>
            <Link to="/" style={linkStyle}>Home</Link>
            <Link to="/about" style={linkStyle}>About</Link>
            <Link to="/contact" style={linkStyle}>Contact</Link>
            
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/about" element={<About/>}/>
                <Route path="/contact" element={<Contact/>}/>
            </Routes>
        </BrowserRouter>
    );
}