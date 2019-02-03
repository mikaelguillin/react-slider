import React, { Component } from 'react';
import WttjSwiper from './WttjSwiper';

import 'reboot.css/dist/reboot.css';
import './App.scss';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App__header">
          <a className="App__headerLogo" href="https://www.welcometothejungle.co/companies/wttj">
            <img src="https://cdn.welcometothejungle.co/uploads/organization/logo/2636/144492/thumb_wttj.png" alt="Welcome to the Jungle" />
            <h1>Welcome to the Jungle</h1>
          </a>
        </header>
        <div className="App__swiper">
          <WttjSwiper></WttjSwiper>
        </div>
        <footer className="App__footer">
          <a href="https://www.welcometothejungle.co">
            <img src="https://cdn.welcometothejungle.co/wttj-front/assets/images/logos/wttj-long.svg" alt="" />
          </a>
          <a href="https://www.welcometothejungle.co/companies/wttj">Voir le profil</a>
        </footer>
      </div>
    );
  }
}

export default App;
