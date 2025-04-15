import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faUser,
    faArrowRightFromBracket,
    faGear,
} from '@fortawesome/free-solid-svg-icons';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import Avatar from '@mui/material/Avatar';
import avatar from '~/assets/images/no_avatar.jpg';
import ModalLoading from '~/components/ModalLoading';
import { disconnectSocket } from '~/utils/socket';
function Header({}) {
    const navigate = useNavigate();
    //Menu
    const [anchorEl, setAnchorEl] = React.useState(null);
    const show = Boolean(anchorEl);
    const handleShow = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleHide = () => {
        setAnchorEl(null);
    };

    const [day, setDay] = useState(new Date());
    const [loading, setLoading] = useState(false);
    useEffect(() => {
        const timer = setTimeout(() => {
            setLoading(true);
            const fetchApi = async () => {
                setUser(JSON.parse(window.localStorage.getItem('user')));
            };
            fetchApi();
            setDay(new Date());
            setLoading(false);
        }, 3000); // 3000 milliseconds = 3 seconds

        // Cleanup function để hủy timer nếu component bị unmount trước khi timer chạy
        return () => clearTimeout(timer);
    }, []);

    const [user, setUser] = useState('');

    useEffect(() => {}, [day]);
    return (
        <div className="bg-slate-100 h-[8%] flex justify-end">
            {window.localStorage.getItem('role') === 'user' ? (
                <div className="me-6 px-2 py-1 rounded-md cursor-pointer relative">
                    <div>
                        <Button
                            id="basic-button"
                            aria-controls={show ? 'basic-menu' : undefined}
                            aria-haspopup="true"
                            aria-expanded={show ? 'true' : undefined}
                            onClick={handleShow}
                        >
                            <div className="flex items-center gap-3 text-black">
                                {user === '' ? (
                                    <div> </div>
                                ) : (
                                    <Avatar
                                        alt="Remy Sharp"
                                        src={
                                            user?.images[0]
                                                ? user?.images[0].url
                                                : avatar
                                        }
                                    />
                                )}

                                <div className="hidden sm:block text-[16px]">
                                    {user.name}
                                </div>
                            </div>
                        </Button>
                        <Menu
                            id="basic-menu"
                            anchorEl={anchorEl}
                            open={show}
                            onClose={handleHide}
                            MenuListProps={{
                                'aria-labelledby': 'basic-button',
                            }}
                        >
                            <MenuItem
                                className="w-[200px] hover:bg-slate-400"
                                onClick={() => navigate('/your_account')}
                            >
                                <FontAwesomeIcon
                                    icon={faGear}
                                    className="me-4 "
                                />
                                Tài khoản
                            </MenuItem>
                            <MenuItem
                                className="w-[200px] hover:bg-slate-400"
                                onClick={() => {
                                    setTimeout(() => {
                                        setLoading(true);
                                        window.localStorage.setItem(
                                            'user',
                                            null,
                                        );
                                        window.localStorage.setItem(
                                            'role',
                                            null,
                                        );
                                        window.localStorage.setItem(
                                            'access_token',
                                            null,
                                        );
                                        window.localStorage.setItem(
                                            'refresh_token',
                                            null,
                                        );
                                        setUser('');
                                        setDay(new Date());
                                        disconnectSocket();
                                        setLoading(false);
                                        navigate('/login');
                                    }, 500);
                                }}
                            >
                                <FontAwesomeIcon
                                    icon={faArrowRightFromBracket}
                                    className="me-4"
                                />
                                Đăng suất
                            </MenuItem>
                        </Menu>
                    </div>
                </div>
            ) : (
                <div
                    className="flex justify-center items-center me-5 hover:cursor-pointer hover:scale-110 transition-all"
                    onClick={() => navigate('/login')}
                >
                    <FontAwesomeIcon
                        icon={faUser}
                        className="me-2 w-[25px] h-[25px]"
                    />
                    <div className="text-[13px] hidden md:block">
                        Đăng ký | Đăng nhập
                    </div>
                </div>
            )}
            <ModalLoading open={loading} title={'Đang tải'} />
        </div>
    );
}

export default Header;
