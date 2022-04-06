import { render, screen } from '@testing-library/react';
import ImageList from '../ImageList';
import { mockResp } from "./response";
import {createMemoryHistory} from 'history'
import { Router } from 'react-router-dom';
import userEvent from '@testing-library/user-event';

describe('count total images', () => {
    it('count total images by passing images array', () => {
        render(<ImageList images={mockResp.results} />);
        const imgMapElements = screen.getAllByTestId(/img-list-/i)
        expect(imgMapElements.length).toBe(2);
    });

    it('if no images found', () => {
        render(<ImageList images={[]} />);
        const imgMapElements = screen.queryAllByTestId(/img-list-/i)
        expect(imgMapElements.length).toBe(0);
    });

    it('triggers path change', async () => {
        const history = createMemoryHistory();
        render(
          <Router history={history}>
            <ImageList images={mockResp.results} />
          </Router>
        );
        const singleImage = await screen.findByTestId(/6mgYRkxG3oM/i)
        expect(singleImage).toBeInTheDocument();
        userEvent.click(singleImage);
        expect(history.location.pathname).toBe('/6mgYRkxG3oM');
      });


})