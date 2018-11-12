import React, { Component, Fragments } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import Routes from '../../routes';
import store from '../../redux/store';
import logo from '../../logo.svg';
import './App.scss';

class App extends Component {
  render() {
    return (
        <Fragments>
        <div className="App-container">
          <Provider store={store}>
            <BrowserRouter>
              <Routes />
            </BrowserRouter>
          </Provider>
        </div>
      </Fragments>
    );
  }
}

export default App;
