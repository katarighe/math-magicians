import React from 'react';
import { render } from '@testing-library/react';
import renderer from 'react-test-renderer';
import Home from '../components/Home';

describe("Home Component", () => {
  test("renders correctly", () => {
    const component = renderer.create(<Home />);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
