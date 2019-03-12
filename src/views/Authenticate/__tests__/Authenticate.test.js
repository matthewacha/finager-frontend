/* eslint-disable react/react-in-jsx-scope */
import React from 'react';
import { shallow } from 'enzyme';
import configureStore from 'redux-mock-store';
import { Provider } from 'react-redux';

import Authenticate from '../index';

const props = {
    loginUser: jest.fn(),
}

const mockStore = configureStore();

const initialStore = {

};

const store = mockStore(initialStore);

describe('Test Authenticate component', () => {
    it('Test it renders correctlt', () => {
        const wrapper = shallow(
            <Provider store={store} >
                <Authenticate store={store} props={props} />
            </Provider>
        );
        expect(wrapper).toMatchSnapshot();
    })
})