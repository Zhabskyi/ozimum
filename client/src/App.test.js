import React from 'react';
import { Provider } from 'react-redux';
import { shallow, configure } from "enzyme";
import configureMockStore from "redux-mock-store";
import App from './App';
import Adapter from 'enzyme-adapter-react-16';
 
configure({adapter: new Adapter()});

const mockStore = configureMockStore();
const store = mockStore({});

describe('Application', () => {
  it('renders without errors', () => {
    expect(
      shallow(
          <Provider store={store}>
              <App/>
          </Provider>
      ).exists(<h1>OZIMUM</h1>)
  ).toBe(true);
  });
});
