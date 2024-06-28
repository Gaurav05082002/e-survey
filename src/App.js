import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import CreatorLoginPage from './pages/Auth/CreatorLoginPage';
import CreatorSignupPage from './pages/Auth/CreatorSignupPage';
import OrgLoginPage from './pages/Auth/OrgLoginPage';
import SelectedUserLoginPage from './pages/Auth/SelectedUserLoginPage';
import NoAccessPage from './pages/Auth/NoAccessPage';
import Home from './pages/Home/Home';
import Header from './components/Common/Header';
import Footer from './components/Common/Footer';
import SelecetdUserSignsupPage from './pages/Auth/SelectedUserSignsupPage'

function App() {
  return (
    <Router>
      <div className="App">
        {/* <Header /> */}
        <Routes>
          <Route path="/" exact element={<Home/>} />
          <Route path="/creator-login" element={<CreatorLoginPage/>} />
          <Route path="/creator-signup" element={<CreatorSignupPage/>} />
          <Route path="/org-login" element={<OrgLoginPage/>} />
          <Route path="/selected-user-login" element={<SelectedUserLoginPage/>} />
          <Route path="/no-access" element={<NoAccessPage/>} />
          <Route path="/selected-user-signup" exact element={<SelecetdUserSignsupPage/>} />
          {/* Add more routes as needed */}
        </Routes>
        {/* <Footer /> */}
      </div>
    </Router>
  );
}

export default App;
