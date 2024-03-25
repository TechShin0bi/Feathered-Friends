import React, { ReactNode } from 'react'

const ListRadioButtonContainer: React.FC<{ children: ReactNode , label:string }> = ({ children, label }) => {
    return (
        <div className="mb-4 text-black">
            <p>{label}</p>
            {children}
        </div>
    )
}

export default ListRadioButtonContainer