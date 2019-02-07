import React, { Component } from 'react';
import WttjSwiper from './components/WttjSwiper/WttjSwiper';

import 'reboot.css/dist/reboot.css';
import './App.scss';

class App extends Component {
  render() {
    return (
      <div className="App">
          <WttjSwiper></WttjSwiper>
      </div>
    );
  }
}

export default App;
