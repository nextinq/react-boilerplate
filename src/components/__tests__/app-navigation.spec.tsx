import * as React from 'react';
import { AppNavigation } from '../app-navigation';
import { render } from '@testing-library/react';

describe('AppNavigation', () => {
  it('it renders', () => {
    const wrapper = render(<AppNavigation title="React Boilerplate" />);
    wrapper.getByText('React Boilerplate');
  });
});
