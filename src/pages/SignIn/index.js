import React, { useContext, useEffect, useState } from 'react';
import Input from '~/components/Input';
import { ToastContext } from '~/components/ToastContext';
import ModalLoading from '~/components/ModalLoading';

function SignIn() {
    const toastContext = useContext(ToastContext);
    const [loading, setLoading] = useState(false);

    const [email, setEmail] = useState('');
    const onChangeEmail = (value) => {
        setEmail(value);
        setErrorEmail('');
    };
    const [errorEmail, setErrorEmail] = useState('');

    const [name, setName] = useState('');
    const [errorName, setErrorName] = useState('');
    const onChangeName = (value) => {
        setName(value);
        setErrorName('');
    };

    const [password1, setPassword1] = useState('');
    const [errorPass1, setErrorPass1] = useState('');
    const onChangePass1 = (value) => {
        setPassword1(value);
        setErrorPass1('');
    };

    const [password2, setPassword2] = useState('');
    const [errorPass2, setErrorPass2] = useState('');
    const onChangePass2 = (value) => {
        setPassword2(value);
        setErrorPass2('');
    };

    const SignIn = async () => {
        if (name === '') {
            toastContext.notify('error', 'Chưa nhập tên');
            setErrorName('Không được để trống');
        } else if (email === '') {
            toastContext.notify('error', 'Chưa nhập số email');
            setErrorEmail('Không được để trống');
        } else if (password1 === '') {
            toastContext.notify('error', 'Chưa nhập mật khẩu');
            setErrorPass1('Không được để trống');
        } else if (password2 === '') {
            toastContext.notify('error', 'Chưa nhập xác nhận mật khẩu');
            setErrorPass2('Không được để trống');
        } else if (password1 !== password2) {
            toastContext.notify('error', 'Mật khẩu không khớp');
        } else {
            //setLoading(true);
            // const obj = {
            //     name: name,
            //     email: email,
            //     phone: phone,
            //     password: password1
            // }
            // const result = await UserService.CreateUser(obj)
            //     .catch((error) => {
            //         console.log(error);
            //         setLoading(false);
            //     });
            // if (result) {
            //     setLoading(false);
            //     console.log(result)
            //     toastContext.notify('success', 'Đăng ký thành công');
            //     navigate('/login');
            // }
        }
    };
    return (
        <div className="bg-[#e9ecef] flex flex-col">
            <div className="flex justify-center items-center py-10">
                <div className="bg-white rounded-3xl min-h-[500px] md:w-[60%] w-[90%] p-3 shadow-2xl">
                    <div className="flex justify-center items-center my-5 font-semibold text-[24px] mx-4">
                        Welcome to TQChatApp! Please signin.
                    </div>
                    <div className="mx-3 my-7">
                        <Input
                            placeholder="Nhập họ tên"
                            title="Họ và tên"
                            value={name}
                            required
                            error={errorName}
                            onChange={(value) => onChangeName(value)}
                        />
                    </div>
                    <div className="mx-3 my-7">
                        <Input
                            placeholder="Nhập email điện thoại"
                            title="Email"
                            value={email}
                            required
                            error={errorEmail}
                            onChange={(value) => onChangeEmail(value)}
                        />
                    </div>
                    <div className="mx-3 my-7">
                        <Input
                            placeholder="Mật khẩu"
                            password
                            title="Nhập mật khẩu"
                            value={password1}
                            error={errorPass1}
                            onChange={(value) => onChangePass1(value)}
                        />
                    </div>
                    <div className="mx-3 my-7">
                        <Input
                            placeholder="Nhập lại mật khẩu"
                            password
                            title="Xác nhận lại mật khẩu"
                            value={password2}
                            error={errorPass2}
                            onChange={(value) => onChangePass2(value)}
                        />
                    </div>
                    <div className="flex justify-center items-center">
                        <button
                            className="bg-blue-500 py-4 px-3 rounded-lg min-w-[130px] text-white hover:bg-[#3a57e8] cursor-pointer"
                            onClick={() => SignIn()}
                        >
                            Đăng ký
                        </button>
                    </div>
                    <ModalLoading open={loading} title={'Đang tải'} />
                </div>
            </div>
        </div>
    );
}

export default SignIn;
