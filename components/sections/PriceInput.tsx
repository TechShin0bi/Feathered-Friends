"use client"
import React, { useState } from 'react'

function PriceInput() {
    const [minPrice, setMinPrice] = useState('');
    const [maxPrice, setMaxPrice] = useState('');

    const handleClearFilters = () => {
        setMinPrice('');
        setMaxPrice('');
    };
    
    return (
        <div className="mb-4 w-full flex justify-between">
            <input
                type="number"
                placeholder="Min"
                className="w-1/2 px-2 py-1 border text-black border-gray-300 rounded"
                value={minPrice}
                onChange={(e) => setMinPrice(e.target.value)}
            />
            <input
                type="number"
                placeholder="Max"
                className="w-1/2 px-2 py-1 border text-black border-gray-300 rounded ml-2"
                value={maxPrice}
                onChange={(e) => setMaxPrice(e.target.value)}
            />
        </div>
    )
}

export default PriceInput