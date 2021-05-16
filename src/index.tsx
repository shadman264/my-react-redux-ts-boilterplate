import React from 'react';
import ReactDOM from 'react-dom';
import CssBaseline from '@material-ui/core/CssBaseline';
import { ThemeProvider } from '@material-ui/core/styles';
import App from './App';
import theme from './theme';
import { Provider } from 'react-redux';
import { Router, Route } from 'react-router-dom';
import configureStore from './store/store';
import { createBrowserHistory } from 'history';

const store = configureStore();
const history = createBrowserHistory();

ReactDOM.render(
    <Provider store={store}>
        <ThemeProvider theme={theme}>
            {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
            <CssBaseline />
            <Router history={history}>
                <div>
                    <Route exact path="/" component={App} />
                </div>
            </Router>
        </ThemeProvider>
    </Provider>,
    document.querySelector('#root')
);
