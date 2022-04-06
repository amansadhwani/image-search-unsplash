import { render, screen} from '@testing-library/react';
import ImagesLength from '../ImagesLength';

describe('check images count', () => {
    it('check images count by passing props', () => {
        render(<ImagesLength imagesLength={2}/>);
        const checkImageCount = screen.getByTestId(/img-count/i)
        expect(checkImageCount.textContent).toBe('Found 2 Images')
    });

    it('negative test', () => {
        render(<ImagesLength imagesLength={2}/>);
        const checkImageCount = screen.getByTestId(/img-count/i)
        expect(checkImageCount.textContent).not.toBe('Found 10 Images')
    });
})