import React from "react";
import { useQuery } from "react-query";
import api from "./lib/api";

export default function Blog() {
    const { data: posts } = useQuery(["allPosts"], api.posts.getAll);

    const maxLength = 20;

    return (
        <div style={{ flexGrow: 1 }}>
            {posts?.map((post) => {
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
