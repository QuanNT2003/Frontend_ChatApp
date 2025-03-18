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
                <Avatar alt="Remy Sharp" src={avatar} />
            </div>
            <div className="text-wrap bg-slate-300 p-2 rounded-md w-[60%]">
                Chào các bạn sinh viên đã đăng ký vào lớp BCH058.P21 và
                BCH058.P22! Các bạn sẽ học tại trường Đại học KHXH&NV - ĐHQG.HCM
                tại cơ sở Thủ Đức (cổng đi đối diện cổng A trường ĐH CNTT).
                Thông tin đầy đủ và chi tiết được Phòng Đào tạo của trường Đại
                học KHXH&NV gửi như sau
            </div>
        </div>
    );
}

export default MessageItem;
