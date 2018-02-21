import React,{Component} from 'react';
import {BrowserRouter,Route} from 'react-router-dom';
import {connect} from 'react-redux';    //connect function - ability to call action reactor by component
import * as actions from '../actions';

import Header from './Header';
import Landing from './Landing';


const Dashboard = () => {
    return <h2>Dashboard</h2>
}

const SurveyNew = () => {
    return <h2>Survey New</h2>
}


 


class App extends Component{

    componentDidMount(){
        this.props.fetchUser();  //calling the action creator and making axios request to current user api route
        
    }

    render(){
        return (
            <div className="container">
                <BrowserRouter>
                    <div>
                        <Header/>
                        <Route exact path="/" component={Landing}/>
                        <Route exact path="/surveys" component={Dashboard}/>
                        <Route path="/surveys/new" component={SurveyNew}/>
                        
                    </div>
                </BrowserRouter>
            
            </div>
        )
    }
    
}
 
export default connect(null,actions)(App);//all actions are passed to App component as props