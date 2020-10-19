import React, { Component } from 'react';
import { Route, BrowserRouter as Router,Switch} from 'react-router-dom'
import Lesson from './Lesson';
import Home from './Home';
import Homeworks from './Homeworks';

class App extends Component {
    state = {  }
    render() { 
        return ( 
            <Router>
                <Switch>
                     <Route path='/' exact={true} component={Home}/>
                     <Route path='/lessons' exact={true} component={Lesson}/>
                     <Route path='/homeworks' exact={true} component={Homeworks}/>
                </Switch>
             </Router>
        );
    }
}
 
export default App;