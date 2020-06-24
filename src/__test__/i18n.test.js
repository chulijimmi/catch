import i18n from "../i18n";

describe("test i18n translator", () => {
  it("render english language", () => {
    expect(i18n.options.lng).toEqual("en");
  });
});
