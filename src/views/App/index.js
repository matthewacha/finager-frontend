import React, { Component, Fragment } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import Routes from '../../routes';
import store from '../../redux/store';

class App extends Component {
    render() {
    return (
        <Fragment>
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
