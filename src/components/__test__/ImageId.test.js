import { Router,Route } from 'react-router-dom';
import { createMemoryHistory } from 'history';
import { render, screen} from '@testing-library/react';
import ImageId from '../ImageId';

  it('should render params in component', () => {
    const history = createMemoryHistory();
    const route = '/anything';
    history.push(route);
    render(
      <Router history={history}>
          <Route path={'/:id'} ><ImageId/></Route>
      </Router>
  );

     const checkImageCount = screen.getByTestId(/image-id/i)
     expect(checkImageCount.textContent).toBe('anything')
  });