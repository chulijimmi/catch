import globalReducer, {
  loadRepo,
  loadRepoSuccess,
  loadRepoError,
  initialState,
} from "../globalReducer";
import produce from "immer";

describe("globalReducer test", () => {
  let state;

  beforeEach(() => {
    state = initialState;
  });

  it("should return default state", () => {
    const expectedState = state;
    expect(globalReducer(undefined, {})).toEqual(expectedState);
  });

  it("should handle loadRepo actions correctly", () => {
    const expectedResult = produce(initialState, (draft) => {
      draft.loading = true;
    });

    expect(globalReducer(initialState, loadRepo())).toEqual(expectedResult);
  });

  it("should handle loadRepoSuccess actions correctly", () => {
    const username = "jimmi";
    const repo = [{ movie: "Adventure" }];
    const expectedSuccess = produce(initialState, (draft) => {
      draft.currentUser = username;
      draft.data = repo;
      draft.date = new Date(Date.now()).toTimeString();
    });

    expect(
      globalReducer(initialState, loadRepoSuccess(repo, username))
    ).toEqual(expectedSuccess);
  });

  it("should handle loadRepoError actions correctly", () => {
    const error = { error: 404, message: "Data not found" };
    const expectedError = produce(initialState, (draft) => {
      draft.error = error;
    });

    expect(globalReducer(initialState, loadRepoError(error))).toEqual(
      expectedError
    );
  });
});
