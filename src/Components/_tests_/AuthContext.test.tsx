// UserContext.test.tsx
import React from 'react';
import { render, screen } from '@testing-library/react';
import { UserProvider, useUser } from '../Context/AuthContext'; // Adjust the import path

// A simple test component that uses the UserProvider and UserContext
function TestComponent() {
  const { signIn, signOut } = useUser();

  return (
    <div>
      <button onClick={() => signIn('testuser', 'testpassword')}>Sign In</button>
      <button onClick={() => signOut()}>Sign Out</button>
    </div>
  );
}

test('signIn and signOut functions work as expected', () => {
  render(
    <UserProvider>
      <TestComponent />
    </UserProvider>
  );

  // Initially, the user should be null
  expect(screen.queryByText('User is signed in')).toBeNull();

  // Perform a sign-in action
  const signInButton = screen.getByText('Sign In');
  signInButton.click();

  // Perform a sign-out action
  const signOutButton = screen.getByText('Sign Out');
  signOutButton.click();


});
