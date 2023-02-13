import React, { useState, useEffect } from "react";
import axios from "axios";

const api = axios.create({ baseURL: "http://localhost:3000" });

export default function Blog() {
    const [posts, setPosts] = useState([]);

    const maxLength = 20;
    useEffect(() => {
        api
            .get("/posts")
            .then((response) => {
                const { data, success, error } = response.data;
                if (error) {
                    console.error(error);
                    return;
                }

                if (success) {
                    setPosts(data);
                }
            })
            .catch(console.error);
    }, []);

    return (
        <div style={{ flexGrow: 1 }}>
            {posts.map((post) => {
                const isTrunc = post.content.length > maxLength;
                const content = post.content.slice(0, maxLength);
                return (
                    <div key={posts.title}>
                        <img src={post.image} />
                        <h3>{post.title}</h3>
                        <p>{content + (isTrunc ? "..." : "")}</p>
                    </div>
                );
            })}
        </div>
    );
}
