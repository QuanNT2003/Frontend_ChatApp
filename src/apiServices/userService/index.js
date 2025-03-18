import * as request from '~/utils/request';

export const createUser = async (obj) => {
    try {
        const res = await request.postMethod('user/signIn', obj);

        return res;
    } catch (error) {
        return Promise.reject(error);
    }
};

export const updateUser = async (id, obj) => {
    try {
        const res = await request.putMethod('user/update/' + id, obj);
        console.log(res);
        return res;
    } catch (error) {
        return Promise.reject(error);
    }
};

export const updatePasswordUser = async (id, obj) => {
    try {
        const res = await request.putMethod('user/update_password/' + id, obj);
        console.log(res);
        return res;
    } catch (error) {
        return Promise.reject(error);
    }
};

export const login = async (obj) => {
    try {
        const res = await request.postMethod('user/login', obj);

        return res;
    } catch (error) {
        return Promise.reject(error);
    }
};

export const getUser = async (id) => {
    try {
        const res = await request.getMethod('user/get_details/' + id);
        console.log(res);
        return res;
    } catch (error) {
        return Promise.reject(error);
    }
};
