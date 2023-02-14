import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";

import Sidebar from "./Sidebar";
import Home from "./Home";
import Blog from "./Blog";

const queryClient = new QueryClient();

function App() {
    return (
        <QueryClientProvider client={queryClient}>
            <Router>
                <div>Ich bin eine Navbar</div>
                <div style={{ display: "flex", flexDirection: "row" }}>
                    <Sidebar />
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/blog" element={<Blog />} />
                    </Routes>
                </div>
            </Router>
            <ReactQueryDevtools></ReactQueryDevtools>
        </QueryClientProvider>
    );
}

export default App;
