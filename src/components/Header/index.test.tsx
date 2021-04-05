import {render} from '@testing-library/react';

import Header from '../Header';

describe('Test for Header Component', () => {
  it('render of the Header Component', async () => {
    render(
      <Header>
        <h1>Header Testing</h1>
      </Header>,
    );
  });
});
