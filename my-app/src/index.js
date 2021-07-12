import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

class My_app extends React.Component {
        render() {
            return ( < h1 > BYE GUYS!! < /h1>);
            }
        }
        ReactDOM.render( < React.StrictMode >
            <
            My_app / >
            <
            App / >
            <
            /React.StrictMode>,
            document.getElementById('root')
        );

        // If you want to start measuring performance in your app, pass a function
        // to log results (for example: reportWebVitals(console.log))
        // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
        reportWebVitals();