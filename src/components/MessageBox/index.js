import React, { useEffect, useRef } from 'react';
import MessageItem from '../MessageItem';

function MessageBox({ MessageList, userId }) {
    // Tạo ref cho container
    const messagesEndRef = useRef(null);

    // Hàm scroll xuống cuối
    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    };

    // Tự động scroll khi MessageList thay đổi
    useEffect(() => {
        scrollToBottom();
    }, [MessageList]);

    return (
        <div className="border-[1px] p-2 bg-white overflow-y-auto h-[90%] flex-col-reverse">
            {MessageList.map((item) => (
                <MessageItem
                    reverse={userId === item.senderId._id}
                    key={item._id}
                    item={item}
                />
            ))}
            {/* Thêm div này làm điểm tham chiếu để scroll */}
            <div ref={messagesEndRef} />
        </div>
    );
}

export default MessageBox;
