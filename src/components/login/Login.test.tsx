import React from 'react';
import { render, screen } from '@testing-library/react';
import Login, { reducer as validator } from './Login';

/**
 *  Check for special characters and returns true if passed
 */
test('renders special characters', () => {
    const passwordReqs = {
        specialCharacters: true,
    };

    render(<Login {...passwordReqs} />);
    let text = screen.getByText(
        /Has one or more of these special characters:/i
    );
    let objects = validator(passwordReqs, {
        type: 'specialCharacters',
        password: '!@#!',
    });

    expect(text).toBeInTheDocument();
    expect(objects.specialCharacters).toBe(true);
});

/**
 *  Check for digits and returns true if passed
 */
test('renders digital characters', () => {
    const passwordReqs = {
        digits: true,
    };

    render(<Login {...passwordReqs} />);
    let text = screen.getByText(/Has a number \/ digit/i);
    let objects = validator(passwordReqs, {
        type: 'digits',
        password: '45667887',
    });

    expect(text).toBeInTheDocument();
    expect(objects.digits).toBe(true);
});

/**
 *  Check for uppercases and returns true if passed
 */
test('renders uppercase characters', () => {
    const passwordReqs = {
        uppercase: true,
    };

    render(<Login {...passwordReqs} />);
    let text = screen.getByText(/Has an uppercase letter/i);
    let objects = validator(passwordReqs, {
        type: 'uppercase',
        password: 'TEST',
    });

    expect(text).toBeInTheDocument();
    expect(objects.uppercase).toBe(true);
});

/**
 *  Check for NO consecutive characters and returns false if there's any
 *  by default it's value is 'true' if there are no consecutive chars
 */
test('renders NO consecutive characters', () => {
    const passwordReqs = {
        noConsecutive: true,
    };

    render(<Login {...passwordReqs} />);
    let text = screen.getByText(/Has NO consecutive letters/i);
    let objects = validator(passwordReqs, {
        type: 'noConsecutive',
        password: 'TEEEST',
    });

    expect(text).toBeInTheDocument();
    expect(objects.noConsecutive).toBe(false);
});
