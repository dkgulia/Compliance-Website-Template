// import { Link } from "react-router-dom";
import React from "react";

interface IconButtonProps {
    text: string;
    icon?: React.ReactNode;
    destination?: string;
}

export default function Button({ text, icon, destination = "" }: IconButtonProps) {
    return (
        <>
            <div>
                {/* <Link to={destination}> */}
                    <div className={`inline-flex items-center space-x-2 px-4 py-2 bg-gray-800 text-white text-sm rounded-lg hover:bg-gray-700 transition border border-gray-600 cursor-pointer`}>
                        { icon ?? <span>{icon}</span> }
                        <p>{text}{destination}</p>
                    </div>
                {/* </Link> */}
            </div>
        </>
    );
}