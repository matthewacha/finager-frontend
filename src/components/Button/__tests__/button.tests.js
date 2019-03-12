import React from 'react';
import { shallow } from 'enzyme';
import Button from '../Button.jsx';

describe('Test Button works', () => {
    const props = {
        hasIcon: true,
        iconAlt: "google-icon",
        iconStyle: "google-icon",
        iconImage: "googleIcon",
        customButtonStyle: "auth__panel--social",
        disable: false,
        text: "Login with Google",
        textStyle: "auth-text",
        onClick: jest.fn(),
        hasText: true,
    };

    it('It renders as expected', () => {
        const wrapper = shallow(<Button props={props} />)
        expect(wrapper).toMatchSnapshot();
    })
})