import React, {
    Component
} from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import './Dashboard.scss';
import googleIcon from "../../assets/images/googleIcon.svg";


class Dashboard extends Component {
    render(){
        console.log(this.props);
        return(
            <div className='dashboard'>
                <div className='side-bar'>
                    this is the home page
                </div>
            </div>
            )
    }
};


Dashboard.propTypes = {};

Dashboard.defaultProps = {};

const actionCreators = {};

const mapStateToProps = ({}) => ({});

export default connect(mapStateToProps, actionCreators)(Dashboard);