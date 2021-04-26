import { create } from 'react-test-renderer';
import { HashRouter } from 'react-router-dom';
import Ooops from './Ooops';

describe('Ooops', () => {
  it('should match expected snapshot. default', () => {
    const component = create(
      <HashRouter>
        <Ooops />
      </HashRouter>
    );
    expect(component.toJSON()).toMatchSnapshot();
  });
});
