import { create } from 'react-test-renderer';
import { HashRouter } from 'react-router-dom';
import Home from './Home';

describe('Home', () => {
  it('should match expected snapshot. default', () => {
    const component = create(
      <HashRouter>
        <Home />
      </HashRouter>
    );
    expect(component.toJSON()).toMatchSnapshot();
  });
});
