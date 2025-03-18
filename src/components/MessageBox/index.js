import React from 'react';
import MessageItem from '../MessageItem';

function MessageBox({ MessageList }) {
    return (
        <div className="border-[1px] p-2 bg-white overflow-y-auto h-[90%] flex-col-reverse">
            <MessageItem reverse={true} />
            <MessageItem reverse={false} />
            <MessageItem reverse={true} />
            <MessageItem reverse={false} />
            <MessageItem reverse={false} />
            <MessageItem reverse={true} />
            <MessageItem reverse={false} />
            <MessageItem reverse={true} />
            <MessageItem reverse={false} />
            <MessageItem reverse={false} />
            <MessageItem reverse={true} />
            <MessageItem reverse={false} />
            <MessageItem reverse={true} />
            <MessageItem reverse={false} />
            <MessageItem reverse={false} />
        </div>
    );
}

export default MessageBox;
