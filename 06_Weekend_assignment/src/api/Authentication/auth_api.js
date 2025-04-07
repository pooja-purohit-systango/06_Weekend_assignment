
import { LOGIN_URL } from '../../constants/constants';
import auth_axios_instance from './auth_axios_instance';

export const auth_user = async ({ username, password }) => {
  try {
    const response = await auth_axios_instance.post(LOGIN_URL, {
      username,
      password,
    });
  
    const token = response.data.accessToken;
    console.log(token)
  
    localStorage.setItem('accesstoken', token);
  
    console.log("firstname from auth-user api: ", response.data.firstName)
    if(response.data.username === username )
    {
      console.log("found authenticated user")
      // localStorage.setItem("islogged", true);
      // console.log("is user logged in? :  ", localStorage.getItem('islogged'))
    }
    return response.data;
  }
  catch(error) {
    // localStorage.setItem("islogged", false);
  }
};
