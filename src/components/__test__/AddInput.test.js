import { render, screen, fireEvent } from '@testing-library/react';
import SearchBar from '../SearchBar';

const onFetchTextEntered = jest.fn()

describe('search input', () => {
    it('check if input box exists', () => {
        render(<SearchBar />);
        const inputElement = screen.getByPlaceholderText(/Search images here/i);
        expect(inputElement).toBeInTheDocument();
    });

    it('check if input box changes state', () => {
        render(<SearchBar />);
        const inputElement = screen.getByPlaceholderText(/Search images here/i);
        fireEvent.change(inputElement, { target: { value: 'nadal' } })
        expect(inputElement.value).toBe('nadal');
    });

    it('check if able to call onFetchTextEntered function on pressing enter', () => {
        render(<SearchBar onFetchTextEntered={onFetchTextEntered} />);
        const inputElement = screen.getByPlaceholderText(/Search images here/i);
        fireEvent.change(inputElement, { target: { value: 'nadal' } })
        fireEvent.submit(inputElement);
        expect(onFetchTextEntered).toHaveBeenCalled();
        
    });
})