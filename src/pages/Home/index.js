import React, { useContext, useEffect, useState } from 'react';
import Header from '~/components/Header';
import MessageBox from '~/components/MessageBox';
import UserList from '~/components/UserList';
import TextField from '@mui/material/TextField';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faComment } from '@fortawesome/free-solid-svg-icons';
function Home() {
    return (
        <div className="h-[100vh] overflow-hidden">
            <Header />
            <div className="flex h-[92%]">
                <div className="w-[25%]">
                    <UserList />
                </div>

                <div className="w-[75%]">
                    <MessageBox />
                    <div className="bg-white h-[10%] flex items-center p-2">
                        <TextField
                            className="w-[95%] bg-slate-100"
                            id="outlined-basic"
                            label="Nhập tin nhắn"
                            variant="outlined"
                        />
                        <div className="w-[5%] flex justify-center items-center cursor-pointer select-none">
                            <FontAwesomeIcon
                                icon={faComment}
                                className="h-[25px] hover:bg-slate-200 rounded-full p-4"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;
