import R from "ramda";

import { FETCH_FIGHTER_BY_ID_SUCCESS  } from "../actionTypes";

const initialState = {};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case FETCH_FIGHTER_BY_ID_SUCCESS:
      const newValues = R.indexBy(R.prop("_id"), payload);
      return R.merge(state, newValues);
    default:
      return state;
  }
};