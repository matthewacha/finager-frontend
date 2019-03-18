import React, {
    Component
} from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import './SideBar.scss';
import googleIcon from "../../assets/images/googleIcon.svg";


class SideBar extends Component {
    render(){
        return(
            <div className='dashboard'>
                <div className='side-bar'>
                    <div className='side-bar__label'>
                        <img id="img-profile" src={googleIcon} alt="logo" />
                        <div className='side-bar__body--title'>
                            Dashboard
                        </div>
                    </div>
                    <div className='side-bar__body'>
                    home
                    </div>
                </div>
            </div>
            )
    }
};


SideBar.propTypes = {};

SideBar.defaultProps = {};

const actionCreators = {};

const mapStateToProps = ({}) => ({});

export default connect(mapStateToProps, actionCreators)(SideBar);