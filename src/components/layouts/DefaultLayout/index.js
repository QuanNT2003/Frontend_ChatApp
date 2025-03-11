import React from 'react';

function defaultLayoutClient({ children }) {
    return (
        <div className=" bg-[#e9ecef] bg-no-repeat bg-cover bg-fixed">
            {children}
        </div>
    );
}

export default defaultLayoutClient;
