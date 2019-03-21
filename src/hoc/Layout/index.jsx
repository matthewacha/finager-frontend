import React, {
    PureComponent
} from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import './Layout.scss';
import googleIcon from "../../assets/images/googleIcon.svg";
import searchIcon from "../../assets/images/search.svg";
import settingsInactive from "../../assets/images/settingsnew.svg";
import settingsIcon from "../../assets/images/settingsInactive.svg";
import budgetIcon from "../../assets/images/budge.svg";
import userIcon from "../../assets/images/user.svg";
import tickIcon from "../../assets/images/check.svg";
// import testIcon from "../../assets/images/testing.png";
import Button from '../../components/Button/Button';


class  Layout extends PureComponent {
    state = {
        activeDash: localStorage.getItem('activeDash') || 'home'
    }

    handleClick = event => {
        event.preventDefault();
        const element = document.getElementsByClassName('search-input')
        this.handleSearch(element[0].value)
    }

    handleSearchKeyPress = event => {
        if(event.charCode === 13) {
            this.handleClick(event);
        }
    }

    handleSearch = data => {
        console.log(data)
    }

    changeComponent = (event) => {
        event.preventDefault()
        const buttonName = event.target.id;
        this.setState({activeDash: buttonName})
        localStorage.setItem('activeDash', buttonName);
        window.location.replace(`${process.env.REACT_APP_FRONTEND_URL}/${buttonName}`)
    }

    renderSideButtons = (text, activeIcon, activeDash, inactiveIcon) => {
        const status = text === activeDash ? 'active' : 'in-active';
        const icon = status === 'active' ? activeIcon : inactiveIcon;
        return (
            <div role="button" onClick={this.changeComponent} className="side-bar__body--category">
                <div id={`${text}`} className={`account-text__${status}`}>
                    {text}
                </div>
            </div>
        )
    }

    render(){
        const {children} = this.props;
        const { activeDash } = this.state;
        return(
            <div className='layout'>
                <div className='side-bar'>
                    <div className='side-bar__label'>
                        <img id="img-profile" src={googleIcon} alt="logo" />
                        <div className='side-bar__body--title'>
                            finager
                        </div>
                    </div>
                    <div className='side-bar__body'>
                    {this.renderSideButtons('home',tickIcon, activeDash, googleIcon)}
                    {this.renderSideButtons('profile', tickIcon, activeDash, googleIcon)}
                    {this.renderSideButtons('transactions', tickIcon, activeDash, googleIcon)}
                    {this.renderSideButtons('budget', tickIcon, activeDash, budgetIcon)}
                    {this.renderSideButtons('settings', settingsIcon, activeDash, settingsInactive )}
                    </div>
                </div>
                <div className='innercomponents-dash'>
                    <div className='innercomponents-dash__navbar'>
                        <div className='innercomponents-dash__navbar--profile'>
                            <img id="img-profile" src={userIcon} alt={userIcon} />
                            <div className='text-profile'>
                                Matthew Wacha
                            </div>
                        </div>
                        <div className='innercomponents-dash__navbar--search'>
                                <div role="form" className='innercomponents-dash__navbar--search-bar'>
                                    <Button
                                    hasIcon={true}
                                    iconAlt={"search-icon"}
                                    iconStyle={"icon-search"}
                                    iconImage={searchIcon}
                                    customButtonStyle={"innercomponents-dash__navbar--search-bar_button"}
                                    disable={"false"}
                                    onClick={this.handleClick}
                                    hasText={false}
                                  />
                                    <input className="search-input" placeholder="Search here..." type="text" onKeyPress={this.handleSearchKeyPress}/>
                                </div>
                                <div className='innercomponents-dash__navbar--search-logout'>
                                    <div className="innercomponents-dash__navbar--search-logout_text" role="button" onClick={event=>console.log('logout')}>
                                     logout
                                    </div>
                                </div>
                        </div>
                    </div>
                    <div className='innercomponents-dash__body'>
                        {children}
                    </div>
                </div>
            </div>
            )
    }
};


Layout.propTypes = {
    children: PropTypes.object.isRequired,
};

export default Layout;