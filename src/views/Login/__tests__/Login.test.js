/* eslint-disable react/react-in-jsx-scope */
import React from 'react';
import { shallow, mount } from 'enzyme';
import configureStore from 'redux-mock-store';
import { Provider } from 'react-redux';
import { notify } from 'react-notify-toast';

import Login from '../index';


Object.defineProperty(notify, 'show', {
    value: (...params) => 'show message'
})

Object.defineProperty(document, 'getElementsByTagName', {
    value: (...params) => ['', {onload: true}]
})

Object.defineProperty(window, 'gapi', {
    value: {auth2: {}}
})

Object.defineProperty(window.gapi, 'load', {
    value: (item, callBack) => {
        callBack()
    }
})

const props = {
    loginUser: jest.fn(),
}

const mockStore = configureStore();

const initialStore = {
    auth: {
        error: undefined,
    }

};

const store = mockStore(initialStore);

describe('Test Authenticate component', () => {
    it('Test it renders correctly', () => {
        const wrapper = shallow(
            <Provider store={store} >
                <Login store={store} props={props} />
            </Provider>
        );
        expect(wrapper).toMatchSnapshot();
    })
})

describe('Test renders correctly', () => {
    it('should load google api with signed in user', () => {
        Object.defineProperty(window.gapi.auth2, 'init', {
            value: (...params) => new Promise(resolve => resolve({
                    isSignedIn: { get: jest.fn(()=>true)},
                    currentUser:  {
                        get: () => {
                            return ({
                                getBasicProfile: jest.fn(() => {
                                    return({getId: () => '3445'})}),
                                getAuthResponse: jest.fn(() => {
                                    return({id_token: '1234', access_token: '4567'})}),})
                        }
                    }
                })),
                writable: true
        })
        const wrapper = mount(
            <Provider store={store}>
                <Login store={store} props={props}/>
            </Provider>)
        expect(wrapper).toMatchSnapshot();
    })

    describe('It renders correectly when user not signed in', () => {
        beforeAll(() => {
            Object.defineProperty(window.gapi.auth2, 'init', {
                value: (...params) => new Promise(resolve => resolve({
                        isSignedIn: { get: jest.fn(()=>false)},
                        currentUser:  {
                            get: () => {
                                return ({
                                    getBasicProfile: jest.fn(() => {
                                        return({getId: () => '3445'})}),
                                    getAuthResponse: jest.fn(() => {
                                        return({id_token: '1234', access_token: '4567'})}),})
                            }
                        }
                    }))
            })
        })

        it('should load google api with user not signed in', () => {
            Object.defineProperty(window.gapi.auth2, 'getAuthInstance', {
                value: () => {
                    return({ signIn : () =>new Promise(resolve => resolve(
                        {
                            getBasicProfile: jest.fn(() => {
                                return({getId: () => '3445'})}),
                            getAuthResponse: jest.fn(() => {
                                return({id_token: '1234', access_token: '4567'})}),}
                    ))})},
                    writable: true
            })
            const wrapper = mount(
                <Provider store={store}>
                    <Login store={store} props={props}/>
                </Provider>)
            expect(wrapper).toMatchSnapshot();
        })

        it('should load google api with user not signed in and fails to sign in', () => {
            Object.defineProperty(window.gapi.auth2.getAuthInstance, 'signIn', {
                value: () => new Promise((resolve, reject) => reject(new Error('Failed to get allocations'))),
                writable: true
            })

            Object.defineProperty(window.gapi.auth2, 'getAuthInstance', {
                value: () => {
                    return({ signIn : () => new Promise((resolve, reject) => reject(new Error('Failed to get allocations')))})},
                    writable: true
            })
            const wrapper = mount(
                <Provider store={store}>
                    <Login store={store} props={props}/>
                </Provider>)
            expect(wrapper).toMatchSnapshot();
        })

        it('should not sign in google api with user when unexpected error occurs', () => {
            Object.defineProperty(window.gapi.auth2, 'getAuthInstance', {
                value: () => new Error('Failed to get allocations'),
                    writable: true
            })
            const wrapper = mount(
                <Provider store={store}>
                    <Login store={store} props={props}/>
                </Provider>)
            expect(wrapper).toMatchSnapshot();
        })

        it('should catch error when offline', () => {
            Object.defineProperty(window.gapi.auth2, 'init', {
                value: (...params) => new Error('Invalid'),
                    writable: true
            })
            const wrapper = mount(
                <Provider store={store}>
                    <Login store={store} props={props}/>
                </Provider>)
            expect(wrapper).toMatchSnapshot();
        })

        it('should not load from invalid origin', () => {
            Object.defineProperty(window.gapi.auth2, 'init', {
                value: (...params) => new Promise((resolve, reject) => reject(new Error('Invalid origin')))
            })
            const wrapper = mount(
                <Provider store={store}>
                    <Login store={store} props={props}/>
                </Provider>)
            expect(wrapper).toMatchSnapshot();
        })

    })

})

describe('Test Login click', () => {
    it('should signin on click', () => {
        const wrapper = mount(
            <Provider store={store}>
                <Login store={store} props={props}/>
            </Provider>)

        const componentInstance = wrapper.childAt(0).childAt(0).instance()
        const spyThis = jest.spyOn(componentInstance, 'signInGoogle')
        const loginButton = wrapper.find('.auth__panel--social')
        loginButton.simulate('click', { preventDefault: () => {} })
        expect(spyThis).toHaveBeenCalled()
    })
})