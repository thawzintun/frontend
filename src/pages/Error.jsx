import { ExclamationTriangleIcon } from "@heroicons/react/24/solid";
import React from "react";
import { Link, useNavigate } from "react-router-dom";

const Error = () => {
    const navigate = useNavigate();
    return (
        <section className="grid grid-flow-col justify-center items-center h-screen">
            <div className="flex flex-col justify-center items-center">
                <ExclamationTriangleIcon className="w-20" />
                <p>404 Error!</p>
                <p>Something went wrong</p>
                <Link
                    reloadDocument
                    className="bg-black text-white px-4 py-2 mt-3"
                >
                    Go Back
                </Link>
            </div>
        </section>
    );
};

export default Error;
