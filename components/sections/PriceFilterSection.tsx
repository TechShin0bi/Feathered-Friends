"use client"
import React, { ReactNode, useState } from 'react';

const FilterSection: React.FC<{children: ReactNode;}> = ({children}) => {
    

    return (
        <div className="w-full h-fit bg-white mx-2 p-4 border border-gray-300 rounded-lg flex flex-col justify-around my-5">
           {
            children
           }
        </div>
    );
};

export default FilterSection;
