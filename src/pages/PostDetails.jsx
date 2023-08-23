import React from "react";
import {
    Link,
    redirect,
    useLoaderData,
    useParams,
    useSubmit,
} from "react-router-dom";
import { ArrowLeftIcon, CalendarDaysIcon } from "@heroicons/react/24/solid";

const PostDetails = () => {
    const data = useLoaderData();
    const postData = data.post;
    const params = useParams();
    const submit = useSubmit();

    const postDeleteHandler = () => {
        const confirmStatus = window.confirm(
            "Are you sure want to delete this post?"
        );
        if (confirmStatus) {
            submit(null, { method: "DELETE" });
            return redirect("/");
        }
    };

    return (
        <section className=" w-3/5 mx-auto flex flex-col justify-center py-5 gap-y-2">
            <div className="flex justify-between items-start py-3">
                <h1 className="text-2xl font-bold">{postData.title}</h1>
                <Link to={"/"} className="">
                    <ArrowLeftIcon className="w-8" />
                </Link>
            </div>
            <p className="text-slate-500 flex gap-x-1 items-center py-2">
                <CalendarDaysIcon className="w-6" />
                {postData.date}
            </p>
            <img src={postData.image} alt={postData.title} />
            <p className=" text-justify py-2 text-slate-600">
                {postData.description}
            </p>
            <div className="flex justify-end gap-x-3">
                <Link
                    to={`/edit/${params.id}`}
                    className=" px-4 py-2 text-white bg-black"
                >
                    Edit
                </Link>
                <button
                    className=" px-4 py-2 text-white bg-black"
                    onClick={postDeleteHandler}
                >
                    Delete
                </button>
            </div>
        </section>
    );
};

export default PostDetails;

export const loader = async ({ params }) => {
    const response = await fetch(`http://localhost:8080/posts/${params.id}`);
    const data = await response.json();
    if (!response.ok) {
        throw new Error("");
    } else {
        return data;
    }
};

export const action = async ({ params }) => {
    const response = await fetch(`http://localhost:8080/pots/${params.id}`, {
        method: "DELETE",
    });

    if (!response.ok) {
        throw Error("");
    }
    return redirect("/");
};
