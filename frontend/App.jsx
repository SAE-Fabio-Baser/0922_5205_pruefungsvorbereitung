import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Sidebar from "./Sidebar";
import Home from "./Home";
import Blog from "./Blog";

function App() {
    return (
        <div>
            <div>Ich bin eine Navbar</div>
            <div style={{ display: "flex", flexDirection: "row" }}>
                <Router>
                    <Sidebar />
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/blog" element={<Blog />} />
                    </Routes>
                </Router>
            </div>
        </div>
    );
}

export default App;
