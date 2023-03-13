import { API } from "../../config/Api";
import { DataService } from "../../config/DataService";

export const GetUser = () => async (dispatch) => {
  try {
    const res = await DataService.get(API.Users.Get_All_Users);

    dispatch({
      type: "GET-DATA",
      payload: res.data.data,
    });
  } catch (err) {
    console.log(err);
  }
};

export const Signup = () => async (dispatch, data) => {
  try {
    const res = await DataService.post(API.Users.RegisterUsers, data);

    dispatch({
      type: "SIGNUP-DATA",
      payload: res,
    });
  } catch (err) {
    console.log(err);
  }
};

export const DeleteData = (id) => async (dispatch) => {
  try {
    const res = await DataService.delete(`${API.Users.DELETE_USER}/${id}`);

    dispatch({
      type: "DELETE-DATA",
      payload: res,
    });
  } catch (err) {
    console.log(err);
  }
};
