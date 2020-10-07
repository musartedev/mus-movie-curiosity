import React from 'react';
import { mount } from 'enzyme';
import { create } from 'react-test-renderer';
import Footer from '../../../components/Layout/Footer';

describe('<Footer />', () => {
  test('Footer component should render', () => {
    const footer = mount(<Footer />);
    expect(footer.length).toEqual(1);
  });

  test('Header snapshot should match', () => {
    const footer = create(<Footer />);
    expect(footer.toJSON()).toMatchSnapshot();
  });
});
