import {render} from '@testing-library/react';

import Card from '../Card';

describe('Test for Card Component', () => {
  it('render of the Card Component', async () => {
    render(
      <Card
        country={{
          _id: '1',
          name: 'Brasil',
          capital: 'Brasilia',
          flag: {
            svgFile: 'http://',
          },
        }}
        onClick={() => {}}
      />,
    );
  });
});
