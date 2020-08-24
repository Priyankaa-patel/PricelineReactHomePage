import './styles/main-style.css';
import React from 'react';
import ReactDOM from 'react-dom';


import SearchBox from './components/SearchBox';
import * as serviceWorker from './serviceWorker';
import Login from './components/login';
import Footer from './components/footer';
import Gallery from './components/galleryGrid';
import BlueFooter from './components/blueFooter';
import Carousel from './components/carousel';
import './styles/my-responsive.css';
import './styles/font-awesome.css';

ReactDOM.render(

  <SearchBox />,


  document.getElementById("searchBox")
);

ReactDOM.render(

  <Login />,


  document.getElementById("login")
);


ReactDOM.render(

  <Gallery />,
  document.getElementById("gallery-grid")
);
ReactDOM.render(

  <Footer />,
  document.getElementById("footer")
);

ReactDOM.render(

  <BlueFooter />,
  document.getElementById("blue-footer")
);

ReactDOM.render(

  <Carousel />,
  document.getElementById("carousel")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
