import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { DataProvenance } from './DataProvenance';
import { Provider } from 'react-intl-redux';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import '@testing-library/jest-dom/extend-expect';

const middlewares = [thunk];
const mockStore = configureStore(middlewares);
const store = mockStore({
  intl: {
    locale: 'en',
    messages: {},
  },
});

describe('DataProvenance', () => {
  it('should render without crash', () => {
    const { getByText } = render(
      <Provider store={store}>
        <DataProvenance />
      </Provider>,
    );
    expect(getByText(`Add source`)).toBeInTheDocument();
  });

  it('should add an item to the list when the add button is clicked', () => {
    const onChangeMock = jest.fn();
    const { getByText } = render(
      <Provider store={store}>
        <DataProvenance
          onChange={onChangeMock}
          id="1"
          value={{ data: [{ '@id': '1', name: 'test' }] }}
        />
      </Provider>,
    );
    fireEvent.click(getByText(`Add source`));
    expect(onChangeMock).toHaveBeenCalled();
  });
});
