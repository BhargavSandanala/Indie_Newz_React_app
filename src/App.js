import './App.css';
import React, { Component } from 'react'
import Navbar from './components/Navbar'
import News from './components/News'
import {
  HashRouter,
  Routes,
  Route,
} from "react-router-dom";



export default class App extends Component {
  render() {
    return (
     <>
     <HashRouter>
     <Navbar/>
     <Routes>
     <Route  path="/" element={<News key="general/*"  category="general" />}/>
     <Route  path="general/*" element={<News key="general/*"  category="general" />}/>
     <Route  path="/IndieNewz/business/*" element={<News key="business/*"  category="business" />}/>
     <Route  path="/IndieNewz/entertainment/*" element={<News key="entertainment/*" category="entertainment" />}/>
     <Route  path="/IndieNewz/health/*" element={<News  key="health/*" category="health" />}/>
     <Route  path="/IndieNewz/science/*" element={<News key="science/*" category="science" />}/>
     <Route  path="/IndieNewz/sports/*" element={<News key="sports/*" category="sports" />}/>
     <Route  path="/IndieNewz/technology/*"  element={<News key="technology/*" category="technology"/>}/>
     </Routes>
   </HashRouter>

    </>
    )
  }
}

