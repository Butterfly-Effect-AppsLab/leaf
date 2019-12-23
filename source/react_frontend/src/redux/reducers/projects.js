import {
  ADD_PROJECT,
} from "../actionTypes";

const initialState = {
  allIds: [],
  byIds: {},
  pageIndex: 2
};

export default function(state = initialState, action) {
  switch (action.type) {
    case ADD_PROJECT: {
      const { id, content } = action.payload;
      return {
        ...state,
        allIds: [...state.allIds, id],
        byIds: {
          ...state.byIds,
          [id]: {
            content,
          }
        }
      };
    }
    default:
      return state;
  }
}
