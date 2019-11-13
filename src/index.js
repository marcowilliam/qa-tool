import React from 'react';
import ReactDOM from 'react-dom';
import CssBaseline from '@material-ui/core/CssBaseline';
import { createMuiTheme, responsiveFontSizes } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { Provider } from 'react-redux';
import store from './store';
import { blue, red } from '@material-ui/core/colors';

const theme = {
    palette: {
        primary: {
            main: blue[700],
        },
        secondary: {
            main: red[700],
        },
    },
};

let muiTheme = createMuiTheme(theme);
muiTheme = responsiveFontSizes(muiTheme);

ReactDOM.render(
    <Provider store={store}>
        <ThemeProvider theme={muiTheme}>
            <App />
            <CssBaseline />
        </ThemeProvider>
    </Provider>,
    document.getElementById('root'));

serviceWorker.unregister();
