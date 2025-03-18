import React, { useState } from 'react';
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

    const [user, setUser] = useState('');
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
                                            user?.images[0].url
                                                ? user?.images[0].url
                                                : avatar
                                        }
                                    />
                                )}

                                <div className="hidden sm:block text-white text-[13px]">
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
                                onClick={() => {}}
                                className="w-[200px] hover:bg-slate-400"
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
        </div>
    );
}

export default Header;
