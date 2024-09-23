import React from 'react'

type ButtonProps = {
    buttonText: string;
    buttonLink: string;
}

const Button: React.FC<ButtonProps> = ({ buttonText, buttonLink }) => {
    return (
        <a href={buttonLink} target="_blank" className="rounded py-1 lg:py-2 px-2 lg:px-4 border
        bg-transparent border-sky-400 text-slate-50
         hover:text-slate-900 hover:font-semibold hover:bg-sky-400 lg:hover:px-6
        hover:px-3
         transition-all duration-300 text-xs md:text-sm lg:text-base">{buttonText}</a>
    )
};

export default Button
