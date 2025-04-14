import React from 'react';
import MessageItem from '../MessageItem';

function MessageBox({ MessageList, userId }) {
    return (
        <div className="border-[1px] p-2 bg-white overflow-y-auto h-[90%] flex-col-reverse">
            {MessageList.map((item) => (
                <MessageItem
                    reverse={userId === item.senderId._id}
                    key={item._id}
                    item={item}
                />
            ))}
        </div>
    );
}

export default MessageBox;
