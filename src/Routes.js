import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { ThemeProvider } from '@material-ui/core';
import Root from "./Root";
import theme from './Theme';

export default function Routes() {
    return (
        <ThemeProvider theme={theme}>
            <Router>
                <Root />
            </Router>
        </ThemeProvider>
    );
}