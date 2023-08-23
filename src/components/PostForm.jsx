import React from "react";
import { Form } from "react-router-dom";

const PostForm = () => {
    return (
        <Form
            method="post"
            className="w-1/3 grid grid-cols-1 mx-auto pt-14 gap-y-5 text-lg"
        >
            <div>
                <h1 className="font-bold text-xl">Create your post now.</h1>
            </div>
            <div className="grid gap-y-1">
                <label htmlFor="title">Title</label>
                <input
                    id="title"
                    type="text"
                    name="title"
                    className="outline outline-1 focus:outline-2 outline-slate-300 rounded-sm p-1"
                    autoFocus
                />
            </div>
            <div className="grid gap-y-1">
                <label htmlFor="image">Image</label>
                <input
                    type="url"
                    name="image"
                    id="image"
                    className="outline outline-1 focus:outline-2 outline-slate-300 rounded-sm p-1"
                />
            </div>
            <div className="grid gap-y-1">
                <label htmlFor="date">Choose Date</label>
                <input
                    type="date"
                    name="date"
                    id="date"
                    className="outline outline-1 focus:outline-2 outline-slate-300 rounded-sm p-1"
                />
            </div>
            <div className="grid gap-y-1">
                <label htmlFor="description">Description</label>
                <textarea
                    name="description"
                    id="description"
                    cols="30"
                    rows="7"
                    className="outline outline-1 focus:outline-2 outline-slate-300 rounded-sm p-1"
                ></textarea>
            </div>
            <div className="grid grid-cols-2">
                <button className="bg-black text-white col-start-2 py-2">
                    Submit
                </button>
            </div>
        </Form>
    );
};

export default PostForm;
