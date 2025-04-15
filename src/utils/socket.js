import { io } from 'socket.io-client';

const URL = 'http://localhost:3001/'; // hoặc domain của backend bạn
const socket = io(URL, {
    autoConnect: false, // để mình tự điều khiển khi nào connect
});

const connectSocket = (userId) => {
    if (!socket.connected) {
        socket.connect();
        socket.emit('join', userId);
    } else {
        console.log('Đã connect');
    }
};

const disconnectSocket = () => {
    if (socket.connected) {
        socket.disconnect();
    } else {
        console.log('đã disconnect');
    }
};

const sendMessageSocket = (messageData) => {
    socket.emit('sendMessage', messageData);
};

export { socket, connectSocket, disconnectSocket, sendMessageSocket };
