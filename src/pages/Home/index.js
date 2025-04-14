import React, { useContext, useEffect, useState } from 'react';
import Header from '~/components/Header';
import MessageBox from '~/components/MessageBox';
import UserList from '~/components/UserList';
import TextField from '@mui/material/TextField';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faComment } from '@fortawesome/free-solid-svg-icons';
import { ToastContext } from '~/components/ToastContext';
import { useNavigate } from 'react-router-dom';
import * as MessageServices from '~/apiServices/messageServices';
function Home() {
    const navigate = useNavigate();
    const toastContext = useContext(ToastContext);

    const [chatRoom, setChatRoom] = useState([]);
    const [message, setMessage] = useState([]);

    const [userId, setUserId] = useState('');
    const [roomId, setRoomId] = useState('');

    const [textField, setTextField] = useState('');
    useEffect(() => {
        const timer = setTimeout(() => {
            const fetchApi = async () => {
                if (window.localStorage.getItem('role') === 'user') {
                    setUserId(
                        JSON.parse(window.localStorage.getItem('user'))._id,
                    );
                    const fetchApi = async () => {
                        console.log(
                            JSON.parse(window.localStorage.getItem('user'))._id,
                        );

                        const result = await MessageServices.getMessageRoom(
                            JSON.parse(window.localStorage.getItem('user'))._id,
                        ).catch((error) => {
                            if (error?.response?.status === 404) {
                            } else {
                                toastContext.notify('error', 'Có lỗi xảy ra');
                            }
                        });

                        if (result) {
                            setChatRoom(result.data);
                            // console.log(result.data);
                            console.log(result);
                        }
                    };
                    fetchApi();
                } else {
                    navigate('/login');
                    toastContext.notify(
                        'error',
                        'Chỉ đăng nhập khi có tài khoản Admin',
                    );
                }
            };
            fetchApi();
        }, 500); // 3000 milliseconds = 3 seconds

        // Cleanup function để hủy timer nếu component bị unmount trước khi timer chạy
        return () => clearTimeout(timer);
    }, []);

    const onChangeRoom = (reciveId) => {
        setRoomId(reciveId);
        const fetchApi = async () => {
            const result = await MessageServices.getMessage(
                userId,
                reciveId,
            ).catch((error) => {
                console.log(error);
                toastContext.notify('error', 'Có lỗi xảy ra');
            });
            if (result) {
                setMessage(result.data);
            }
        };

        fetchApi();
    };

    const sendMessage = () => {
        if (roomId === '' || textField === '') {
            toastContext.notify(
                'error',
                'Chưa chọn người gửi hoặc tin nhắn trống',
            );
        } else {
            const obj = {
                senderId: userId,
                reciveId: roomId,
                text: textField,
            };
            const fetchApi = async () => {
                const result = await MessageServices.createMessage(obj).catch(
                    (error) => {
                        console.log(error);
                        toastContext.notify('error', 'Có lỗi xảy ra');
                    },
                );
                if (result) {
                    setTextField('');
                    toastContext.notify('success', 'Đã gửi tin nhắn');
                }
            };

            fetchApi();
        }
    };
    return (
        <div className="h-[100vh] overflow-hidden">
            <Header />
            <div className="flex h-[92%]">
                <div className="w-[25%]">
                    <UserList
                        list={chatRoom}
                        onChange={onChangeRoom}
                        roomId={roomId}
                    />
                </div>

                <div className="w-[75%]">
                    <MessageBox MessageList={message} userId={userId} />
                    <div className="bg-white h-[10%] flex items-center p-2">
                        <TextField
                            className="w-[95%] bg-slate-100"
                            id="outlined-basic"
                            label="Nhập tin nhắn"
                            variant="outlined"
                            value={textField}
                            onChange={(e) => {
                                setTextField(e.target.value);
                            }}
                        />
                        <div
                            className="w-[5%] flex justify-center items-center cursor-pointer select-none"
                            onClick={() => sendMessage()}
                        >
                            <FontAwesomeIcon
                                icon={faComment}
                                className="h-[25px] hover:bg-slate-200 rounded-full p-4"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;
