import { GET_HEADING, HEADING_ERROR } from "../actions/types";

const initialState = {
  headings: [],
  error: {},
};

export default function (state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case GET_HEADING:
      return {
        ...state,
        headings: payload,
      };
    case HEADING_ERROR:
      return {
        ...state,
        error: payload,
      };

    default:
      return state;
  }
}
