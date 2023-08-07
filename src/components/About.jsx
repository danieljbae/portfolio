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
                    Recent computer science graduate and technology industry professional with 2+ years of experience,
                    transitioning into a Software Engineer or DevOps Engineer role.
                </p>
                <br />
                <p className="text-xl">
                    Skilled in automating software deployments, administering cloud environments, and scoping complex projects.
                    Proficient in Python, SQL, and Bash, ready to drive innovation and success in the software engineering and DevOps domains.
                </p>
            </div>
        </div>
    );
};

export default About;
