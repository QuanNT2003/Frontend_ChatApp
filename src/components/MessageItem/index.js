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
            <div className="flex-col w-[60%]">
                {item.text && (
                    <div className="text-wrap bg-slate-300 p-2 rounded-md w-[100%]">
                        {item?.text}
                    </div>
                )}
                {item.images && (
                    <div
                        className={
                            reverse === true ? 'flex flex-row-reverse' : 'flex'
                        }
                    >
                        {item.images.map((file, index) => (
                            <div
                                key={index}
                                className="group w-[100px] h-[100px] rounded-[3px] m-[5px] relative select-none"
                            >
                                <img
                                    className="w-[inherit] h-[inherit] rounded-[3px]"
                                    src={file.url}
                                    alt=""
                                />
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
}

export default MessageItem;
