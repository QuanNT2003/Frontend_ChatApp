import React, { useContext, useEffect, useState } from 'react';
import UserItem from '~/components/userItem';

function Home() {
    return (
        <div className="flex">
            <div className="w-[25%] border-[1px] p-2 bg-white h-[100vh]">
                <div className="font-bold text-[24px] p-1">Đoạn chat</div>
                <div className=" overflow-y-auto h-full max-h-[90vh]">
                    <UserItem />
                    <UserItem />
                    <UserItem />
                    <UserItem />
                    <UserItem />
                    <UserItem />
                    <UserItem />
                    <UserItem />
                    <UserItem />
                    <UserItem />
                    <UserItem />
                    <UserItem />
                    <UserItem />
                    <UserItem />
                </div>
            </div>
            <div className="w-[75%] border-[1px] p-2 bg-white h-[100vh]">
                234
            </div>
        </div>
    );
}

export default Home;
