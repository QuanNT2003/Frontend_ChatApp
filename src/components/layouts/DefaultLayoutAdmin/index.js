import React from 'react';
import SideBar from './SideBar';
import Header from './Header';

function defaultLayoutAdmin({ children, title, back }) {
    return (
        <div className="flex h-screen bg-[#e9ecef] select-none">
            <div className="hidden bg-white sm:block w-[15%] min-w-[25vh] transition-all">
                <SideBar />
            </div>
            <div className="flex flex-[1] flex-col w-[100%] h-[100vh] bg-[#e9ecef]">
                <Header back={back} title={title} />
                <div className="flex-[1] bg-[#e9ecef]">{children}</div>
            </div>
        </div>
    );
}

export default defaultLayoutAdmin;
