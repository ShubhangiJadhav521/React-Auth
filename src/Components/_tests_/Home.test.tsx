// HomePage.test.tsx
import React from 'react';
import { render, screen } from '@testing-library/react';
import HomePage from '../Home/Home';

describe('HomePage Component', () => {
  test('renders home page correctly', () => {
    render(<HomePage setHideNavbar={() => {}} hideNavbar={false} />);

    // Check if the home page elements are rendered correctly
    expect(screen.getByText('We take your visionary ideas and make them a reality')).toBeInTheDocument();
    expect(screen.getByAltText('Image')).toBeInTheDocument();
  });
});
