import React from 'react';
import Avatar from '@mui/material/Avatar';
import avatar from '~/assets/images/no_avatar.jpg';
function UserItem({ item, onChange, roomId }) {
    return (
        <div
            className={
                roomId === item.userId
                    ? 'flex select-none cursor-pointer m-1 rounded bg-sky-200'
                    : 'flex hover:bg-slate-200 select-none cursor-pointer m-1 rounded'
            }
            onClick={() => onChange(item.userId)}
        >
            <div className="m-3">
                <Avatar
                    alt="Remy Sharp"
                    src={item?.avatar ? item?.avatar : avatar}
                    sx={{ width: 56, height: 56 }}
                />
            </div>
            <div className="flex flex-col justify-center">
                <div className="font-semibold">{item.userName}</div>
                <div>
                    {item.lastMessage?.text
                        ? item.lastMessage?.text
                        : 'Hình ảnh'}
                </div>
            </div>
        </div>
    );
}

export default UserItem;
