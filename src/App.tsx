import React, { useEffect } from 'react';
import './App.css';
import axios from 'axios';
import Home from './components/home';
import DefaultHeader from './components/containers/default/DefaultHeader';
import DefaultLayout from './components/containers/default/DefaultLayout';
import { Route, Routes } from 'react-router-dom';

const App = () => {
  useEffect(() => {
    console.log("use effect App");
    axios.get("http://localhost:8083/api/categories")
      .then(resp => {
        console.log("Server result", resp);
      });
  }, []);
  
  return (
    <>
    <Routes>
        <Route path="/" element={<DefaultLayout />}>
          <Route index element={<Home />} />
          {/* <Route path="about" element={<About />} />
          <Route path="dashboard" element={<Dashboard />} /> */}

          {/* Using path="*"" means "match anything", so this route
                acts like a catch-all for URLs that we don't have explicit
                routes for. */}
          {/* <Route path="*" element={<NoMatch />} /> */}
        </Route>
      </Routes>
    </>

  );
}

export default App;
