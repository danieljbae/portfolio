import React from "react";

const About = () => {
    return (
        <div
            name="about"
            className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white"
        >
            <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
                <div className="pb-8">
                    <p className="text-4xl font-bold inline border-b-4 border-gray-500">
                        About
                    </p>
                </div>
                <p className="text-xl mt-10">
                    Passionate software engineer with 2+ years of experience in the software industry. Dedicated focus in Backend engineering and
                    Data engineering. Proficient in constructing efficient backend solutions and developing data pipelines that generate meaningful insights.
                </p>
                <br />
                <p className="text-xl">
                    Let's connect and explore the captivating world of technology together!
                </p>
            </div>
        </div>
    );
};

export default About;
