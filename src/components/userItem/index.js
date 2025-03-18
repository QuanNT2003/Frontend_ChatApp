import React from 'react';
import Avatar from '@mui/material/Avatar';
import avatar from '~/assets/images/no_avatar.jpg';
function UserItem({}) {
    return (
        <div className="flex hover:bg-slate-200 select-none cursor-pointer m-1 rounded">
            <div className="m-3">
                <Avatar
                    alt="Remy Sharp"
                    src={avatar}
                    sx={{ width: 56, height: 56 }}
                />
            </div>
            <div className="flex flex-col justify-center">
                <div className="font-semibold">Ngô Trung Quân</div>
                <div>nói gì nói đi</div>
            </div>
        </div>
    );
}

export default UserItem;
