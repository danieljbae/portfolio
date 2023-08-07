import React from "react";
import heroImage from "../assets/heroImage.png";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";

const Home = () => {
	return (
		<div
			name="home"
			className="h-screen w-full bg-gradient-to-b from-black via-black to-gray-800"
		>
			<div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-6 md:flex-row">
				<div className="flex flex-col justify-center h-full">
					<h2 className="text-4xl sm:text-7xl font-bold text-white">
						I'm a Software Engineer
					</h2>
					<p className="text-gray-500 py-4 max-w-md">
						Proficient in Python, SQL, and Bash, ready to drive innovation 
            and success in the software engineering and DevOps domains.
					</p>

					{/* Button linked to Portfolio, smooth scrolls down */}
					<div>
						{/* Group button and arrow icon, so animation occurs if we hover over Button and icon */}
						<button className="group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer">
							Portfolio
							<span className="group-hover:rotate-90 duration-300">
								<MdOutlineKeyboardArrowRight size={25} className="" />
							</span>
						</button>
					</div>
				</div>

				<div>
					<img
						src={heroImage}
						alt="my profile"
						className="rounded-2xl mx-auto w-2/3 md:w-full px-4"
					/>
				</div>
			</div>
		</div>
	);
};

export default Home;
