import {
  ADD_PROJECT,
} from "/actionTypes";

let nextProjectId = 0;

export const addProject = content => ({
  type: ADD_PROJECT,
  payload: {
    id: ++nextProjectId,
    content
  }
});

// export const fetchMockData = () => async dispatch => {
//   try {
//     const response = await fetch("http://localhost:3000/mock.json");
//     const json = await response.json();
//     console.log(json);
//     dispatch(fetchMockDataSuccess(json));
//   } catch (err) {
//     console.log(err);
//     dispatch(fetchMockDataFail());
//   }
// };

