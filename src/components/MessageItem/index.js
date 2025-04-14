import React from 'react';
import Avatar from '@mui/material/Avatar';
import avatar from '~/assets/images/no_avatar.jpg';
function MessageItem({ item, reverse }) {
    return (
        <div
            className={
                reverse === true ? 'flex my-4 flex-row-reverse' : 'flex my-4'
            }
        >
            <div className="flex justify-center mx-2">
                <Avatar
                    alt="Remy Sharp"
                    src={
                        item.senderId?.images[0]
                            ? item.senderId?.images[0].url
                            : avatar
                    }
                />
            </div>
            <div className="text-wrap bg-slate-300 p-2 rounded-md w-[60%]">
                {item?.text}
            </div>
        </div>
    );
}

export default MessageItem;
