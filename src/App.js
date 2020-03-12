import React from 'react';
import './App.css';
import Layout from './containers/layout/layout';
/*
  WEBSITE PLAN :
    CONTAINERS : 
      1- BLOG SHOW CONTAINER WHERE WE FETCH AND DISPLAY BLOGS
      2- ADMIN INTERFACE THAT CAN ADD LINKS TO NEW PROJECTS AND ADD NEW BLOGS
    COMPONENTS :
      LAYOUT FOLDER :
        1- LANDING PAGE
        2- FOOTER
        3- NAV HEADER
        4- ABOUT ME PAGE
        5- PROJECTS PAGE
      UI FOLDER :
        1- NAV BUTTON
        2- INPUT
        3- PROJECT ICON DISPLAY _TAKES THE LINK AS PROPS_
        4- SOCIAL MEDIA LINKS
*/    
function App() {
  return (
    <div className="App">
      <Layout/>
    </div>
  );
}

export default App;
