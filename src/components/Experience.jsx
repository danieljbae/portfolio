import React from "react";

import html from "../assets/html.png";
import css from "../assets/css.png";
import javascript from "../assets/javascript.png";
import reactImage from "../assets/react.png";
import tailwind from "../assets/tailwind.png";
import aws from "../assets/logo_aws.png";
import python from "../assets/logo_python.png";
import sql from "../assets/logo_sql.png";
import bash from "../assets/logo_bash.png";
import docker from "../assets/logo_docker.png";
import jenkins from "../assets/logo_jenkins.png";
import kubernetes from "../assets/logo_kubernetes.png";


const Experience = () => {
    const techs = [
        {
            id: 1,
            src: python,
            title: "python",
            style: "shadow-blue-500",
        },
        {
            id: 2,
            src: javascript,
            title: "javascript",
            style: "shadow-yellow-500",
        },
        {
            id: 3,
            src: reactImage,
            title: "react",
            style: "shadow-blue-500",
        },
        {
            id: 4,
            src: html,
            title: "HTML",
            style: "shadow-orange-500",
        },
        {
            id: 5,
            src: css,
            title: "CSS",
            style: "shadow-blue-500",
        },
        {
            id: 6,
            src: sql,
            title: "sql",
            style: "shadow-blue-300",
        },
        {
            id: 7,
            src: aws,
            title: "aws",
            style: "shadow-yellow-300",
        },
        {
            id: 8,
            src: tailwind,
            title: "Tailwind",
            style: "shadow-sky-400",
        },
        {
            id: 9,
            src: bash,
            title: "bash",
            style: "shadow-green-400",
        },
        {
            id: 10,
            src: docker,
            title: "GitHub",
            style: "shadow-blue-400",
        },
        {
            id: 11,
            src: kubernetes,
            title: "kubernetes",
            style: "shadow-blue-600",
        },
        {
            id: 12,
            src: jenkins,
            title: "jenkins",
            style: "shadow-red-400",
        },

    ];

    return (
        <div
            name="experience"
            className="bg-gradient-to-b from-gray-800 to-black w-full"
        >
            <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white ">
                <div>
                    <p className="text-4xl font-bold border-b-4 border-gray-500 p-2 inline">
                        Experience
                    </p>
                    <p className="py-6">These are the technologies I've worked with</p>
                </div>
                {/* Structure for Experience Logos Grid */}
                <div className="w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0">
                    {techs.map(({ id, src, title, style }) => (
                        <div
                            key={id}
                            className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style}`}
                        >
                            <img src={src} alt="" className="w-20 mx-auto" />
                            <p className="mt-4">{title}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Experience;