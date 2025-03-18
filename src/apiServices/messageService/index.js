import * as request from '~/utils/request';

export const createMessage = async (obj) => {
    try {
        const res = await request.postMethod('message/create', obj);

        return res;
    } catch (error) {
        return Promise.reject(error);
    }
};

export const updateMessage = async (id, obj) => {
    try {
        const res = await request.putMethod('message/update/' + id, obj);
        console.log(res);
        return res;
    } catch (error) {
        return Promise.reject(error);
    }
};

export const deleteMessage = async (id) => {
    try {
        const res = await request.deleteMethod('message/delete/' + id);

        return res;
    } catch (error) {
        return Promise.reject(error);
    }
};

export const getMessage = async (senderId, reciveId) => {
    try {
        const res = await request.getMethod(
            `message/get_message?senderId=${senderId}&&reciveId=${reciveId}`,
        );

        return res;
    } catch (error) {
        return Promise.reject(error);
    }
};

export const getMessageRoom = async (userId) => {
    try {
        const res = await request.getMethod(
            'message/get_message_room' + userId,
        );

        return res;
    } catch (error) {
        return Promise.reject(error);
    }
};
