import { USERSLIST_URL } from '../../constants/constants';
import axios_instance from './axios_instance';

export const get_user = async () => {
    try {
        const response = await axios_instance.get(USERSLIST_URL);
        console.log(response);
        return response;
    }
    catch (error) {
        console.log("error occured after the api call")
        return error;
    }
};

export const get_user_detail = async (id) => {
    try {
        const response = await axios_instance.get(`${USERSLIST_URL}/${id}`);
        console.log(response); 
        return response;
    } catch (error) {
        console.log("error occurred after the api call");
        return error;
    }
};

export const post_user = async (user_data) => {
    try {
        const response = await axios_ins.post(USERSLIST_URL, user_data);
        console.log(response); 
        return response;
    } catch (error) {
        console.log("error occurred after the api call");
        return error;
    }
};


