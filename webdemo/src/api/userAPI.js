import { urlSendAuthEmail, urlSendUserInsert, urlUserLogin } from "./setupURL";
import axios from "axios";
export const sendAuthMail = async (email) => {
  try {
    const response = await axios.post(urlSendAuthEmail + `?email=${email}`);
    return response.data;
  } catch (err) {
    console.log(err);
  }
};
export const userInsertAPI = async (user) => {
  try {
    const response = await axios.post(urlSendUserInsert, user, {
      headers: {
        "Content-Type": "application/json",
      },
    });
    return response.data;
  } catch (err) {
    console.log(err);
  }
};
export const userLoginAPI = async (email, password) => {
  try {
    const response = await axios.post(
      urlUserLogin + `?email=${email}&password=${password}`,
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    return response.data;
  } catch (err) {
    console.log(err);
  }
};
