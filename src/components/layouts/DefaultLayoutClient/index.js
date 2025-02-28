import React from 'react';
import Header from './Header';
import Footer from './Footer';
function defaultLayoutClient({ children }) {
    return (
        <div className=" bg-[#e9ecef] bg-no-repeat bg-cover bg-fixed">
            <Header />
            <div className="lg:w-[75%] w-[100%] mx-auto my-0 min-h-[700px]">
                {children}
            </div>
            <Footer />
            {/* <ChatPlugin /> */}
        </div>
    );
}

export default defaultLayoutClient;
