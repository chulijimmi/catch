import React from "react";
import serializer from "jest-emotion";
import renderer from "react-test-renderer";
import { Button, ListPopUp, ListButton } from "../layout-button";

expect.addSnapshotSerializer(serializer);

describe("layout-button test", () => {
  it("snappshoot button", () => {
    expect(
      renderer.create(<Button label="test" onPress={jest.fn()} />).toJSON()
    ).toMatchSnapshot();
  });
});

describe("layout-button ListPopUp test", () => {
  it("snapshoot listpopup", () => {
    const data = [
      {
        label: "Menu One",
        onPress: jest.fn(),
      },
      {
        label: "Menu Two",
        onPress: jest.fn(),
      },
    ];
    const testRenderer = renderer.create(<ListPopUp data={data} />);
    expect(testRenderer.toJSON()).toMatchSnapshot();
  });
});
