import {render} from '@testing-library/react';

import Loading from '../Loading';

describe('Test for Loading Component', () => {
  it('render of the Loading Component', async () => {
    render(<Loading active type="balls" />);
  });
});
