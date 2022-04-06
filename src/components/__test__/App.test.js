import { render, screen, fireEvent  } from '@testing-library/react';
import App from '../../App';
import { BrowserRouter } from 'react-router-dom';

import ImageId from '../ImageId'

const MockRoute = () => {
    return <BrowserRouter>
        <App />
        <ImageId/>
    </BrowserRouter>
}
describe('search input', () => {
        it('check if able to call onFetchTextEntered function and images gets loaded', async () => {
        render(<MockRoute />);
        const inputElement = screen.getByPlaceholderText(/Search images here/i);
        fireEvent.change(inputElement, { target: { value: 'asd' } })
        fireEvent.submit(inputElement);
        const imgMapElements = await screen.findAllByTestId(/img-list/i)
        expect(imgMapElements.length).toBe(2);
   });
})