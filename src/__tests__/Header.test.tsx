import Header from '../components/header/Header';
import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';

describe('Header component', () => {
  it('renders Code challenge', () => {
    render(<Header />);
    expect(screen.getByText('Code Challenge')).toBeInTheDocument();
  });
});
