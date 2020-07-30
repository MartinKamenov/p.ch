import React from 'react';
import './App.css';
import CouncillorsPage from './pages/Councillors';
import {Provider} from 'react-redux';
import Store from './redux/store';

const App = () => {
  return (
    <div className='main-container'>
      <Provider store={Store}>
        <CouncillorsPage/>
      </Provider>
    </div>
  );
};

export default App;
