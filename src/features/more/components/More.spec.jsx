import { create } from 'react-test-renderer';
import { HashRouter } from 'react-router-dom';
import More from './More';

describe('More', () => {
  it('should match expected snapshot. default', () => {
    const component = create(
      <HashRouter>
        <More />
      </HashRouter>
    );
    expect(component.toJSON()).toMatchSnapshot();
  });
});
