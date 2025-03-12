import React from 'react';

function defaultLayoutClient({ children }) {
    return (
        <div className=" bg-[#e9ecef] bg-no-repeat bg-cover bg-fixed min-h-[100vh]">
            {children}
        </div>
    );
}

export default defaultLayoutClient;
