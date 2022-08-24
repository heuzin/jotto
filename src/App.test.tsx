import React from "react";
import App from "./App";
import { mount } from "enzyme";
import { findByTestAttr } from "../test/testUtils";
import { getSecretWord as mockGetSecretWord } from "./actions/getSecretWord";

jest.mock("./actions/getSecretWord");
const add = jest.mock("");
const setup = () => {
  return mount(<App />);
};

test("renders without error", () => {
  const wrapper = setup();
  const appComponent = findByTestAttr!(wrapper, "component-app");
  expect(appComponent).toHaveLength(1);
});

describe("get secret word", () => {
  beforeEach(() => {
    (mockGetSecretWord as jest.Mocked<any>).mockClear();
  });
  test("getSecretWord on app mount", () => {
    const wrapper = setup();
    expect(mockGetSecretWord).toHaveBeenCalledTimes(1);
  });

  test("getSecretWord does not run on app update", () => {
    const wrapper = setup();
    (mockGetSecretWord as jest.Mocked<any>).mockClear();

    wrapper.setProps({});

    expect(mockGetSecretWord).toHaveBeenCalledTimes(0);
  });
});
