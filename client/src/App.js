import './App.css';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Landing from './components/layout/Landing';
import Alert from './components/layout/alert';


//Telas
import NavBar from './components/layout/NavBar';
import Register from './components/auth/Register';
import Login from './components/auth/Login';
import Dashboard from './components/dashboard/Dashboard';


//Route Control acess
import PrivateRoute from './components/routing/PrivateRoute';

//Redux
import {Provider} from 'react-redux';
import store from './store';
import setAuthToken from './util/setAuthToken';
import { useEffect } from 'react';
import { loadUser } from './actions/auth';

if(localStorage.token){
  setAuthToken(localStorage.token);
}

const App = () => {

  useEffect(() => {
    store.dispatch(loadUser());
  }, []);

  return (<Provider store={store}>
    <Router>
      <>
        <NavBar />
        <Route exact path="/" component={Landing} />
        <section className="container">
        <Alert />
          <Switch>
            <Route exact path="/register" component={Register} />
            <Route exact path="/login" component={Login} />
            <PrivateRoute exact path="/dashboard" component={Dashboard} />
          </Switch>
        </section>
      </>
    </Router>
  </Provider>);
}

export default App;
