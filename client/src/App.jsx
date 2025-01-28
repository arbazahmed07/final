
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import RootLayout from "./components/RootLayout/Root";
import Hero from "./components/section/Hero";
import './App.css';
import Profiles from "./components/Profile/Profiles"; 
import AddProfile from "./components/Profile/AddProfile.jsx";

import ProfilePage from "./components/Profile/ProfilePage";
import SearchForm from "./components/forms/SearchForm";
const App = () => {
  return (
    <Router>
      <Routes>
        {/* RootLayout will wrap all routes */}
        <Route path="/" element={<RootLayout />}>
          <Route index element={<Hero />} />
          <Route path="profiles" element={<Profiles />} />
          <Route path="search" element={<SearchForm />} />
          <Route path="addprofile" element={<AddProfile />} />
          <Route path="profile/:id" element={<ProfilePage />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
