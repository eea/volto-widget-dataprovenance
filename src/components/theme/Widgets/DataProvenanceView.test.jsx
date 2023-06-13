import React from 'react';
import { render } from '@testing-library/react';
import DataProvenanceView from './DataProvenanceView';
import { Provider } from 'react-intl-redux';
import configureStore from 'redux-mock-store';
import { BrowserRouter } from 'react-router-dom';
import '@testing-library/jest-dom/extend-expect';

const mockStore = configureStore();
const store = mockStore({
  intl: {
    locale: 'en',
    messages: {},
  },
});

const value = {
  data: [
    { title: 'Title 1', link: '/link1', organisation: 'Organisation 1' },
    { title: 'Title 2', link: '/link2', organisation: 'Organisation 2' },
    { title: 'Title 3', organisation: 'Organisation 3' },
    { title: 'Title 4', organisation: undefined },
  ],
};

describe('DataProvenanceView', () => {
  it('renders correctly with value', () => {
    const { getByText } = render(
      <Provider store={store}>
        <BrowserRouter>
          <DataProvenanceView value={value} className="test" />
        </BrowserRouter>
      </Provider>,
    );
    expect(getByText('Title 1')).toBeInTheDocument();
    expect(getByText(', Organisation 1')).toBeInTheDocument();
    expect(getByText('Title 2')).toBeInTheDocument();
    expect(getByText(', Organisation 2')).toBeInTheDocument();
    expect(getByText('Title 3, Organisation 3')).toBeInTheDocument();
  });

  it('renders correctly without value', () => {
    render(<DataProvenanceView className="test" />);
  });

  it('creates links correctly', () => {
    const { getByText } = render(
      <Provider store={store}>
        <BrowserRouter>
          <DataProvenanceView value={value} className="test" />
        </BrowserRouter>
      </Provider>,
    );

    value.data
      .filter((item) => item.link)
      .forEach((item) => {
        const listItem = getByText(item.title);
        expect(listItem.getAttribute('href')).toBe(item.link);
      });
  });
});
