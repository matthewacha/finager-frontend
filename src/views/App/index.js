import React, { Component, Fragment } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import Notifications from 'react-notify-toast';
import Routes from '../../routes';
import store from '../../redux/store';

class App extends Component {
    render() {
    return (
        <Fragment>
        <Notifications />
          <Provider store={store}>
            <BrowserRouter>
              <Routes />
            </BrowserRouter>
          </Provider>
        </Fragment>
    );
  }
}

export default App;
