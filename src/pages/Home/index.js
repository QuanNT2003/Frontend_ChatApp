import React, { useContext, useEffect, useState } from 'react';
import Header from '~/components/Header';
import MessageBox from '~/components/MessageBox';
import UserList from '~/components/UserList';
import TextField from '@mui/material/TextField';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faImage, faMessage, faXmark } from '@fortawesome/free-solid-svg-icons';
import { ToastContext } from '~/components/ToastContext';
import { useNavigate } from 'react-router-dom';
import * as MessageServices from '~/apiServices/messageServices';
import * as ImageServices from '~/apiServices/imageServices';
import {
    sendMessageSocket,
    socket,
    connectSocket,
    disconnectSocket,
} from '~/utils/socket';

function Home() {
    const navigate = useNavigate();
    const toastContext = useContext(ToastContext);

    const [chatRoom, setChatRoom] = useState([]);
    const [message, setMessage] = useState([]);

    const [userId, setUserId] = useState('');
    const [roomId, setRoomId] = useState('');

    const [textField, setTextField] = useState('');

    // IMAGES
    const [files, setFiles] = useState([]);

    //Date
    const [day, setDay] = useState(new Date());
    const handleAddImages = (e) => {
        if (e.target.files.length + files.length < 7) {
            const arr = Array.from(e.target.files).map((file) => {
                const reader = new FileReader();
                reader.readAsDataURL(file);

                reader.onloadend = () => {
                    files.push(reader.result);
                    setDay(new Date());
                    // addImages(reader.result)
                };
            });
        }

        e.target.value = null;
    };
    const handleRemoveImage = (index) => {
        files.splice(index, 1);
        setDay(new Date());

        // const a = images[index].split('/');
        // deleteImages(a[a.length - 1]);
    };

    useEffect(() => {
        const timer = setTimeout(() => {
            const fetchApi = async () => {
                if (window.localStorage.getItem('role') === 'user') {
                    setUserId(
                        JSON.parse(window.localStorage.getItem('user'))._id,
                    );
                    loadRoom(
                        JSON.parse(window.localStorage.getItem('user'))._id,
                    );
                    connectSocket(
                        JSON.parse(window.localStorage.getItem('user'))._id,
                    );
                } else {
                    navigate('/login');
                    toastContext.notify(
                        'error',
                        'Chỉ đăng nhập khi có tài khoản Admin',
                    );
                }
            };
            fetchApi();
        }, 500);

        return () => {
            disconnectSocket();
            clearTimeout(timer);
        };
    }, []);

    // useEffect riêng để xử lý socket
    useEffect(() => {
        if (socket) {
            socket.on('receiveMessage', () => {
                console.log('Đã nhận message');

                // Nếu đang ở trong phòng chat, load lại tin nhắn
                if (roomId) {
                    const fetchApi = async () => {
                        const result = await MessageServices.getMessage(
                            userId,
                            roomId,
                        ).catch((error) => {
                            console.log(error);
                            toastContext.notify('error', 'Có lỗi xảy ra');
                        });
                        if (result) {
                            setMessage(result.data);
                        }
                    };
                    fetchApi();
                }
                // Load lại danh sách phòng chat
                loadRoom(userId);
            });
        }

        return () => {
            if (socket) {
                socket.off('receiveMessage');
            }
        };
    });

    const loadRoom = (userId) => {
        const fetchApi = async () => {
            const result = await MessageServices.getMessageRoom(userId).catch(
                (error) => {
                    if (error?.response?.status === 404) {
                    } else {
                        toastContext.notify('error', 'Có lỗi xảy ra');
                    }
                },
            );

            if (result) {
                setChatRoom(result.data);
            }
        };
        fetchApi();
    };

    const onChangeRoom = (reciveId) => {
        setRoomId(reciveId);
        setTextField('');
        setFiles([]);
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
                //console.log(result.data);
            }
        };

        fetchApi();
    };

    const sendMessage = async () => {
        if (files.length === 0 && textField.trim() === '') {
            toastContext.notify('error', 'Nội dung tin nhắn trống');
            return;
        }
        const images = await sendImages();
        const obj = {
            senderId: userId,
            reciveId: roomId,
            text: textField,
            images: images,
        };

        const fetchApi = async () => {
            try {
                const result = await MessageServices.createMessage(obj);
                if (result) {
                    setTextField('');
                    // Gửi socket với dữ liệu đầy đủ
                    console.log(result.data);

                    sendMessageSocket({
                        senderId: userId,
                        reciveId: roomId,
                        message: result.data,
                    });
                    toastContext.notify('success', 'Đã gửi tin nhắn');
                }
            } catch (error) {
                console.log(error);
                toastContext.notify('error', 'Có lỗi xảy ra');
            }
        };

        fetchApi();
    };

    const sendImages = async () => {
        if (files.length === 0) return [];
        const image = {
            images: files,
        };
        const resultImage = await ImageServices.AddImages(image).catch(
            (error) => {
                console.log(error);
                toastContext.notify('error', 'Có lỗi xảy ra');
            },
        );

        if (resultImage) {
            setFiles([]);
            console.log(resultImage);

            return resultImage.data;
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

                {roomId ? (
                    <div className="w-[75%]">
                        <MessageBox MessageList={message} userId={userId} />
                        <div className="relative ">
                            <div className="absolute top-[-130%] right-0 left-0 flex bg-slate-200">
                                {files.map((file, index) => (
                                    <div
                                        key={index}
                                        className="group w-[100px] h-[100px] rounded-[3px] m-[5px] relative select-none"
                                    >
                                        <div
                                            className="absolute top-0 right-0 bg-white p-[5px] rounded-[999px] w-[20px] h-[20px] hidden justify-center items-center mt-[2px] mr-[2px] mb-[2px] ml-[2px] hover:cursor-pointer group-hover:flex"
                                            onClick={() =>
                                                handleRemoveImage(index)
                                            }
                                        >
                                            <FontAwesomeIcon
                                                className="text-red-600"
                                                icon={faXmark}
                                            />
                                        </div>
                                        <img
                                            className="w-[inherit] h-[inherit] rounded-[3px]"
                                            src={file}
                                            alt=""
                                        />
                                    </div>
                                ))}
                            </div>

                            <div className="bg-white h-[10%] flex items-center p-2">
                                <div
                                    className="w-[5%] flex justify-center items-center cursor-pointer select-none"
                                    //onClick={() => sendMessage()}
                                >
                                    <input
                                        id="addImg"
                                        type="file"
                                        className="hidden"
                                        accept="image/png,image/gif,image/jpeg,image/webp"
                                        multiple
                                        onChange={handleAddImages}
                                    />
                                    <label
                                        htmlFor="addImg"
                                        className="flex justify-center items-center m-[5px] hover:cursor-pointer"
                                    >
                                        <FontAwesomeIcon
                                            icon={faImage}
                                            className="h-[25px] hover:bg-slate-200 rounded-full p-4"
                                        />
                                    </label>
                                </div>
                                <TextField
                                    className="w-[90%] bg-slate-100"
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
                                        icon={faMessage}
                                        className="h-[25px] hover:bg-slate-200 rounded-full p-4"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                ) : (
                    <div className="w-[75%]"></div>
                )}
            </div>
        </div>
    );
}

export default Home;
