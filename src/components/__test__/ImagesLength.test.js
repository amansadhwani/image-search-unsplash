import { render, screen } from '@testing-library/react';
import ImagesLength from '../ImagesLength';

beforeEach(() => {
    render(<ImagesLength imagesLength={2} />);
})

describe('check images count', () => {
    it('check images count by passing props', () => {
        const checkImageCount = screen.getByTestId(/img-count/i)
        expect(checkImageCount.textContent).toBe('Found 2 Images')
    });

    it('check if wrong image count text is not showing it up on sceeen', () => {
        const checkImageCount = screen.getByTestId(/img-count/i)
        expect(checkImageCount.textContent).not.toBe('Found 10 Images')
    });
})