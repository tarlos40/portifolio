import React from "react";

function Card(props) {
const { children, className } = props;    
    return (
        <>
        <div className={`bg-gray-700 border border-gray-600 rounded-lg shadow hover:bg-gray-800 ${className} p-6`}>
            {children}
        </div>              
        </>
    );
};

export {
    Card
};