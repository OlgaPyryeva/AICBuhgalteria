import axios from "axios";
import { setUser } from "../reducers/userReducer";

export const login = (email, password) => {
  return async (dispatch) => {
    try {
      const response = await axios.post("http://server/login", {
        email,
        password,
      });
      dispatch(setUser(response.data.user));
      localStorage.setItem("token", response.data.token);
      console.log(response.data);
    } catch (e) {
      alert(e.response.data.message);
    }
  };
};

export const auth = () => {
  return async (dispatch) => {
    try {
      const response = await axios.get("http://server/auth", {
        headers: { Autorisation: `Bearer ${localStorage.getItem("token")}` },
      });
      dispatch(setUser(response.data.user));
      localStorage.setItem("token", response.data.token);
      console.log(response.data);
    } catch (e) {
      console.log("error");
      localStorage.removeItem("token");
    }
  };
};
