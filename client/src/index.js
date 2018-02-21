import React from 'react';
import ReactDOM from 'react-dom';
import reduxThunk from 'redux-thunk'; //useful for async actions made by axios

//importing material css file --webpack automatically detects css file when import into javascript file
import 'materialize-css/dist/css/materialize.min.css';



//redux tools imports
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';

//importing reducers - which imports index.js from reducers folder
import reducers from './reducers';

//React components imports
import App from './components/App';

const store = createStore(reducers,{},applyMiddleware(reduxThunk));

ReactDOM.render( 
    <Provider store={store}><App/></Provider>,
    document.getElementById('root'));