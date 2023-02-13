import React from "react";
import { Link } from "react-router-dom";

export default function Sidebar(props) {
    return (
        <div style={{ width: "300px", display: "flex", flexDirection: "column" }}>
            <Link to="/" as="a">
                Home
            </Link>
            <Link to="/blog" as="a">
                Blog
            </Link>
        </div>
    );
}
