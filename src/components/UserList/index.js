import React from 'react';
import UserItem from '../UserItem';

function UserList({ list }) {
    return (
        <div className="border-[1px] p-2 bg-white h-full">
            <div className="font-bold text-[24px] p-1 h-[5%]">Đoạn chat</div>
            <div className="overflow-y-auto h-[95%]">
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
    );
}

export default UserList;
