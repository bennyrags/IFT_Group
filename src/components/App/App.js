import React, {Component} from 'react';
import {
  HashRouter as Router,
  Route,
  Redirect,
  Switch,
} from 'react-router-dom';

import {connect} from 'react-redux';

import Nav from '../Nav/Nav';
import Footer from '../Footer/Footer';
import ProtectedRoute from '../ProtectedRoute/ProtectedRoute'
import UserPage from '../UserPage/UserPage';
import AdminLanding from '../AdminViews/AdminLanding';
import RegisterVolunteer from '../AdminViews/VolunteerInfo/RegisterVolunteer';
import Volunteers from '../AdminViews/VolunteerInfo/Volunteers';
import Events from "../AdminViews/Events/Events";
import AttorneyForm from '../AdminViews/Forms/AttorneyForm'
import BondForm from '../AdminViews/Forms/BondForm';
import FosterForm from '../AdminViews/Forms/FosterForm';
import FundForm from '../AdminViews/Forms/FundForm';
import GroceryForm from '../AdminViews/Forms/GroceryForm';
import BioForm from '../AdminViews/Forms/BioForm';
import HousingForm from '../AdminViews/Forms/HousingForm';
import LegalStatusForm from '../AdminViews/Forms/LegalStatusForm';
import MedicalForm from '../AdminViews/Forms/MedicalForm';
import SchoolForm from '../AdminViews/Forms/SchoolForm';
import IceFacility from "../AdminViews/Forms/IceFacility";
import SocialWorker from "../AdminViews/Forms/SocialWorker";
import Cases from '../AdminViews/Cases/Cases';
import './App.css';

/* volunteer imports */
import Case from "../VolunteerViews/Case";
import VolunteerLanding from "../VolunteerViews/VolunteerLanding";



class App extends Component {
  componentDidMount () {
    this.props.dispatch({type: 'FETCH_USER'})
  }

  render() {
    return (
      <Router>
        <div>
          <Nav />
          <Switch>
            {/* Visiting localhost:3000 will redirect to localhost:3000/home */}
            <Redirect exact from="/" to="/home" />
            {/* For protected routes, the view could show one of several things on the same route.
            Visiting localhost:3000/home will show the UserPage if the user is logged in.
            If the user is not logged in, the ProtectedRoute will show the 'Login' or 'Register' page.
            Even though it seems like they are different pages, the user is always on localhost:3000/home */}
            <ProtectedRoute
              exact
              path="/home"
              component={UserPage}
            />

            <ProtectedRoute
            exact
            path='/events'
            component={Events}
            />
            <ProtectedRoute
            exact
            path='/attorney-form'
            component={AttorneyForm}
            />
            <ProtectedRoute
            exact
            path='/bond-form'
            component={BondForm}
            />
            <ProtectedRoute
            exact
            path='/foster-form'
            component={FosterForm}
            />
            <ProtectedRoute
            exact
            path='/fund-form'
            component={FundForm}
            />
            <ProtectedRoute
            exact
            path='/grocery-form'
            component={GroceryForm}
            />
            <ProtectedRoute
            exact
            path='/bio-form'
            component={BioForm}
            />
            <ProtectedRoute
            exact
            path='/housing-form'
            component={HousingForm}
            />
            <ProtectedRoute
            exact
            path="/ice-form"
            component={IceFacility} />
            <ProtectedRoute
            exact
            path='/legal-form'
            component={LegalStatusForm}
            />
            <ProtectedRoute
            exact
            path='/medical-form'
            component={MedicalForm}
            />
            <ProtectedRoute
            exact
            path='/school-form'
            component={SchoolForm}
            />
            <ProtectedRoute
            exact
            path='/social-form'
            component={SocialWorker}
            />


          <ProtectedRoute
              exact
              path="/admin-landing"
              component={AdminLanding}
            />
          
          <ProtectedRoute
              exact
              path="/register-volunteer"
              component={RegisterVolunteer}
            />
          <ProtectedRoute
              exact
              path="/volunteers"
              component={Volunteers}
            />
          <ProtectedRoute
              exact
              path="/cases"
              component={Cases}
            />
          <ProtectedRoute
              exact
              path="/events"
              component={Events}
            />



          <Route path='/events' component={Events} />

          {/* volunteer views link */}
          <ProtectedRoute path="/case" component={Case} />
          <ProtectedRoute path="/volunteer-landing" component={VolunteerLanding} />

            {/* If none of the other routes matched, we will show a 404. */}
            <Route render={() => <h1>404</h1>} />
          </Switch>
          <Footer />
        </div>
      </Router>
  )}
}

export default connect()(App);
