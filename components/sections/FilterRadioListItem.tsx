import React from 'react'

const FilterRadioListItem: React.FC<{ label: string }> = ({ label }) => {
    return (
        <div className="w-full ">
            <label className="inline-flex items-center mt-2 text-black">
                <input type="radio" className="form-radio" name="priceRange" value="under10k" />
                <span className="ml-2 ">{label}</span>
            </label>
        </div>
    )
}

export default FilterRadioListItem