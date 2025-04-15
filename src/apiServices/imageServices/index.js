import * as request from '~/utils/request';

export const AddImages = async (obj) => {
    try {
        const res = await request.postMethod('image/upload', obj);

        return res;
    } catch (error) {
        return Promise.reject(error);
    }
};

export const DeleteImage = async (obj) => {
    try {
        const res = await request.postMethod('images/remove', obj);
        return res;
    } catch (error) {
        return Promise.reject(error);
    }
};
