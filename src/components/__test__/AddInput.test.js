import { render, screen, fireEvent } from '@testing-library/react';
import SearchBar from '../SearchBar';
import userEvent from '@testing-library/user-event';

const onFetchTextEntered = jest.fn();

beforeEach(() => {
    render(<SearchBar onFetchTextEntered={onFetchTextEntered} />);
})

const typeIntoInput = (searchTerm) =>{
    const inputElement = screen.getByPlaceholderText(/Search images here/i);
    userEvent.type(inputElement, searchTerm)
    return inputElement;
}

describe('search input', () => {
    it('check if input box exists', () => {
        // const inputElement = screen.getByPlaceholderText(/Search images here/i);
        // expect(inputElement).toBeInTheDocument();
        expect(screen.getByPlaceholderText(/Search images here/i)).toBeInTheDocument();
    });

    it('check if input box changes state', () => {

        // const inputElement = screen.getByPlaceholderText(/Search images here/i);
        // //fireEvent.change(inputElement, { target: { value: 'nadal' } })
        // userEvent.type(inputElement, "nadal")
        const inputElement=typeIntoInput('nadal')
        expect(inputElement.value).toBe('nadal');
    });

    it('check if able to call onFetchTextEntered function on pressing enter', () => {
        // const inputElement = screen.getByPlaceholderText(/Search images here/i);
        // fireEvent.change(inputElement, { target: { value: 'nadal' } })
        const inputElement=typeIntoInput('nadal')
        fireEvent.submit(inputElement);
        expect(onFetchTextEntered).toHaveBeenCalled();

    });
})