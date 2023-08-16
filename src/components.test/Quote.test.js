import React from "react";
import { render } from "@testing-library/react";
import renderer from "react-test-renderer";
import Quote from "../components/Quote";

test("Snapshot test for Quote component", () => {
  const component = renderer.create(<Quote />);
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
