import axios from "axios";
import { GET_HEADING, HEADING_ERROR } from "./types";

export const getHeading = (headingData) => async (dispatch) => {
  try {
    const res = await axios.get("/home", headingData);

    dispatch({
      type: GET_HEADING,
      payload: res.data,
    });
  } catch (err) {
    dispatch({
      type: HEADING_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status },
    });
  }
};
