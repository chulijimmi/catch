import produce from "immer";

import { enableES5 } from "immer";

enableES5();

// global constants
export const LOAD_REPO = "global/load_repo";
export const LOAD_REPO_SUCCESS = "global/load_repo_success";
export const LOAD_REPO_ERROR = "global/load_repo_error";

// global actions
/**
 * Load repository
 * @return {object} An action object with a type of LOAD_REPO
 */
export const loadRepo = () => ({
  type: LOAD_REPO,
});

export const loadRepoSuccess = (repo, username) => ({
  type: LOAD_REPO_SUCCESS,
  repo,
  username,
  date: new Date(Date.now()).toTimeString(),
});

export const loadRepoError = (error) => ({
  type: LOAD_REPO_ERROR,
  error,
});

// global reducers
export const initialState = {
  loading: false,
  error: false,
  currentUser: false,
  data: [],
  date: "",
};

/**
 * default reducer function
 * @param {Object} state
 * @param {String} action
 */
const globalReducer = (state = initialState, action) => {
  return produce(state, (draft) => {
    switch (action.type) {
      case LOAD_REPO:
        draft.loading = true;
        break;

      case LOAD_REPO_SUCCESS:
        draft.currentUser = action.username;
        draft.data = action.repo;
        draft.date = action.date;
        break;

      case LOAD_REPO_ERROR:
        draft.error = action.error;
        break;
    }
  });
};

export default globalReducer;
