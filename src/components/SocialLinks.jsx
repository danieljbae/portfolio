import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BsFillPersonLinesFill } from "react-icons/bs";

const SocialLinks = () => {

    // Store Link Icons in an array
    const links = [
        {
            id: 1,
            child: (
                <>
                    LinkedIn <FaLinkedin size={30} />
                </>
            ),
            href: "https://www.linkedin.com/in/baedaniel/",
            style: "rounded-tr-md",
        },
        {
            id: 2,
            child: (
                <>
                    GitHub <FaGithub size={30} />
                </>
            ),
            href: "https://github.com/danieljbae",
        },
        {
            id: 3,
            child: (
                <>
                    Mail <HiOutlineMail size={30} />
                </>
            ),
            // mailto opens up user's email client
            href: "mailto:daniel_bae@outlook.com",
        },
        {
            id: 4,
            child: (
                <>
                    Resume <BsFillPersonLinesFill size={30} />
                </>
            ),
            href: "./Daniel_Bae_Resume.pdf",
            style: "rounded-br-md",
            download: true,
        },
    ];

    return (
        // Hide Link icons, unless large window size
        <div className="hidden lg:flex flex-col top-[35%] left-0 fixed">
            <ul>
                {/* Loop over array of links and apply classNames (animation) to each link */}
                {links.map(({ id, child, href, style, download }) => (
                    <li
                        key={id}
                        className={
                            "flex justify-between items-center w-40 h-14 px-4 ml-[-175px] hover:ml-[-10px] hover:rounded-md duration-300 bg-gray-500" +
                            " " + style
                        }
                    >
                        <a
                            href={href}
                            className="flex justify-between items-center w-full text-white"
                            download={download}
                            target="_blank"
                            rel="noreferrer"
                        >
                            {child}
                        </a>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default SocialLinks;
