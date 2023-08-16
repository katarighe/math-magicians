import React from 'react';
import renderer from 'react-test-renderer';
import Quote from '../components/Quote';

test('Snapshot test for Quote component', () => {
  const component = renderer.create(<Quote />);
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

it('Renders correctly when there are no items present', () => {
  const tree = renderer.create(<Quote />).toJSON();
  expect(tree).toMatchSnapshot();
});
