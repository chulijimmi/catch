import configureStore from "../configureStore";

describe("configureStore test", () => {
  let store;
  const defaultStore = {
    injectedReducers: {},
    injectedSagas: {},
  };

  beforeEach(() => {
    store = configureStore({});
  });

  it("Should be produce injectedReducers and injectedSagas", () => {
    expect(store).toMatchObject(defaultStore);
  });
});
