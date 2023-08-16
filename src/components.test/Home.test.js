import React from 'react';
import renderer from 'react-test-renderer';
import Home from '../components/Home';

describe('Home component', () => {
  test('If it renders correctly', () => {
    const component = renderer.create(<Home />);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
