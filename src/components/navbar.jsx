import React from "react";
import { Link } from 'react-router-dom';

function Navbar() {
    return (
        <nav className="backdrop-blur-3xl flex flex-row justify-between items-center fixed p-2 w-full">
            <p className="font-oleo text-2xl text-orange-600 ">
                Carlos Torquato
            </p>
            
            <div className="flex flex-row justify-between items-center gap-5 mx-20">
                <Link to='/'>
                    <p className="text-xl text-orange-600">Inicio</p>    
                </Link>
                <Link to='/about'>
                    <p className="text-xl text-orange-600">Sobre mim</p>    
                </Link>
            </div>
        </nav>
    );
};

export {
    Navbar
};