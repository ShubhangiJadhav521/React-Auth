// Navbar.test.tsx
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Navbar from '../Navbar/Navbar';

describe('Navbar Component', () => {
  test('renders "Dashboard" link when isSignedIn is true', () => {
    render(
      <MemoryRouter>
        <Navbar isSignedIn={true} handleSignOut={() => {}} />
      </MemoryRouter>
    );

    const dashboardLink = screen.getByText(/Dashboard/i);
    expect(dashboardLink).toBeInTheDocument();
  });

  test('renders "Sign In" link when isSignedIn is false', () => {
    render(
      <MemoryRouter>
        <Navbar isSignedIn={false} handleSignOut={() => {}} />
      </MemoryRouter>
    );

    const signInLink = screen.getByText(/Sign In/i);
    expect(signInLink).toBeInTheDocument();
  });
});
