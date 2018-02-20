import React from 'react';
import ReactDOM from 'react-dom';

//redux tools imports
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';


//React components imports
import App from './components/App';

const store = createStore(()=>[],{},applyMiddleware());

ReactDOM.render( 
    <Provider store={store}><App/></Provider>,
    document.getElementById('root'));