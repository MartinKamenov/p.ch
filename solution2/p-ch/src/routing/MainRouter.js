import React from 'react';
import {BrowserRouter as Router, Route, Redirect} from 'react-router-dom';
import CouncillorsPage from '../pages/Councillors';
import {ToastContainer} from 'react-toastify-redux';
import Navbar from '../components/common/Navbar/Navbar';
import AffairsPage from '../pages/Affairs';
import CouncilsPage from '../pages/Councils';

const MainRouter = () => {
  return (
    <Router>
      <Navbar/>
      <Route exact path="/" render={() => (<Redirect to="/councillors" />)} />
      <Route path="/councillors" component={CouncillorsPage} />
      <Route path="/councils" component={CouncilsPage} />
      <Route path="/affairs" component={AffairsPage} />
      <ToastContainer/>
    </Router>
  );
};

export default MainRouter;
