import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders H1 text', () => {
    render(<App />);
    const heading = screen.getByText(/Password Component/i);
    expect(heading).toBeInTheDocument();
});
