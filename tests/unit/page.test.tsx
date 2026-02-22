import React from 'react';
import { render, screen } from '@testing-library/react';
import Home from '@/app/page';

describe('Home page', () => {
  it('renders the hero heading', () => {
    render(<Home />);
    expect(
      screen.getByRole('heading', { name: /from signals to shipped decisions/i })
    ).toBeInTheDocument();
  });
});
