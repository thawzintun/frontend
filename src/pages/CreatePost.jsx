import React from "react";
import PostForm from "../components/PostForm";
import uuid from "react-uuid";
import { redirect } from "react-router-dom";

const CreatePost = () => {
    return <PostForm />;
};

export default CreatePost;

export const action = async ({ request }) => {
    const data = await request.formData();
    const postData = {
        id: uuid(),
        title: data.get("title"),
        date: data.get("date"),
        image: data.get("image"),
        description: data.get("description"),
    };
    const response = await fetch("http://localhost:8080/posts", {
        method: "post",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(postData),
    });

    if (!response.ok) {
        throw new Error("");
    }

    return redirect("/");
};
