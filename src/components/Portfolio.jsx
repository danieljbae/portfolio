import React from 'react'
import genderRace from "../assets/portfolio/logo_genderrace.jpg"
import manimProjects from "../assets/portfolio/logo_manimprojects.jpg"
import projectGrouper from "../assets/portfolio/logo_projectgrouper.jpg"
import portfolioApp from "../assets/portfolio/logo_portfolio.jpg"
import screenTime from "../assets/portfolio/logo_youtubescreentime.jpg"


const Portfolio = () => {
    const portfolios = [
        {
            id: 1,
            src: portfolioApp,
            href: "https://github.com/danieljbae/portfolio_webapp"
        },
        {
            id: 2,
            src: screenTime,
            href: "https://github.com/danieljbae/YouTube_ScreenTime"
        },
        {
            id: 3,
            src: projectGrouper,
            href: "https://github.com/danieljbae/projectGrouper"
        },
        {
            id: 4,
            src: manimProjects,
            href: "https://github.com/danieljbae/manim-projects"
        },
        {
            id: 5,
            src: genderRace,
            href: "https://github.com/danieljbae/GenderRaceDisambiguation"
        },
    ];
    return (
        <div
            name="portfolio"
            className="bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen"
        >
            <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
                <div className="pb-8">
                    <p className="text-4xl font-bold inline border-b-4 border-gray-500">
                        Portfolio
                    </p>
                    <p className="py-6">Check out some of my work here!</p>
                </div>

                {/* Structure for Project Grid, dynamic row/col format */}
                <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
                    {/* Loop over array and Popukate grid */}
                    {portfolios.map(({ id, src, href }) => (
                        <div key={id} className="shadow-md shadow-gray-600 rounded-lg">
                            <img
                                src={src}
                                alt=""
                                className="rounded-md duration-200 hover:scale-105"
                            />
                            {/* Use anchor tags to make buttons clickable */}
                            <div className="flex items-center justify-center">
                                <a href={href} target="_blank" rel="noopener noreferrer" className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105 text-center">
                                    Code
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Portfolio