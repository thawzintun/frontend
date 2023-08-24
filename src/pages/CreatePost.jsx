import React from "react";
import PostForm from "../components/PostForm";
import uuid from "react-uuid";
import { redirect } from "react-router-dom";

const CreatePost = () => {
    return (
        <PostForm
            formName="Create your post now."
            btnText="Submit"
            method="post"
        />
    );
};

export default CreatePost;
