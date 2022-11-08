import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';
import { renderWithProvider } from './tests/render.helper';

test('renders app', () => {
    const element = renderWithProvider(<App />);
    render(element);
    const linkElement = screen.getByText(/Import CSV Data/i);
    expect(linkElement).toBeInTheDocument();
});
