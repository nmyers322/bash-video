import React from 'react';
import { ThemeProvider as MuiThemeProvider } from '@material-ui/core/styles';
import { createMuiTheme } from '@material-ui/core/styles';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import reducer from '../reducer';
import BashVideo from './BashVideo';

const store = createStore(reducer);

const theme = createMuiTheme({
    palette: {
        type: 'light'
    },
    typography: {
        fontFamily: `"Roboto", "Helvetica", "Arial", sans-serif`,
    }
});

const App = () => 
    <Provider store={store}>
        <MuiThemeProvider theme={theme}>
            <BashVideo />
        </MuiThemeProvider>
    </Provider>;

export default App;
