import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from '~/App';
import reportWebVitals from './reportWebVitals';
import GlobalStyles from '~/components/GlobalStyles';
import { BrowserRouter as Router } from 'react-router-dom';
import { ToastProvider } from '~/components/ToastContext';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Router>
        <ToastProvider>
            <GlobalStyles>
                <App />
            </GlobalStyles>
        </ToastProvider>
    </Router>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
