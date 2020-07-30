import React from 'react';
import './App.css';
import {Provider} from 'react-redux';
import Store from './redux/store';
import MainRouter from './routing/MainRouter';
import 'react-toastify/dist/ReactToastify.css';

const App = () => {
  return (
    <div className='main-container'>
      <Provider store={Store}>
        <MainRouter/>
      </Provider>
    </div>
  );
};

export default App;
