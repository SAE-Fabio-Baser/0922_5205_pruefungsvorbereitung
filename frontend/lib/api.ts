import request from "./request";
import { Api } from "../types";

export const posts = {
    getAll: () => request<Api.Post[]>("/posts"),
    getById: (id: string) => request<Api.Post>(`/posts/${id}`),
    createPost: (title: string) =>
        request("/posts/create", { method: "post", data: { title } }),
};

export const users = {
    getAll: () => request("/users"),
};

export default {
    posts,
    users,
};
