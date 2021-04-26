import { create } from 'react-test-renderer';
import { HashRouter } from 'react-router-dom';

import App from './App';

describe('App', () => {
  it('should match expected snapshot. default', () => {
    const component = create(
      <HashRouter>
        <App />
      </HashRouter>
    );
    expect(component.toJSON()).toMatchSnapshot();
  });
});
