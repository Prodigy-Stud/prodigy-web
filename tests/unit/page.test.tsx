import React from 'react';
import { render, screen } from '@testing-library/react';
import Home from '@/app/(marketing)/page';

describe('Home page', () => {
  it('renders the hero heading', () => {
    render(<Home />);
    expect(
      screen.getByRole('heading', {
        name: /agents decide.*agents code/i
      })
    ).toBeInTheDocument();
  });
});
