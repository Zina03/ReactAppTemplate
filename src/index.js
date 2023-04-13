import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from './pages/Home/Home';
import About from "./pages/About/About";
import Auth from "./pages/Auth/Auth";
import Contact from "./pages/Contact/Contact";
import Profile from "./pages/Profile/Profile";
import AnimeList from "./components/AnimeList/AnimeList";
import AnimeDetails from "./components/AnimeDetails/AnimeDetails";
import { Provider } from 'react-redux'
import store  from './redux/store'
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>}>
            <Route path="about" element={<About/>}/>
            <Route path="contact" element={<Contact/>}/>
            <Route path="profile" element={<Profile/>}/>
            <Route path="anime" element={<AnimeList/>}/>
            <Route path="/anime/:id" element={<AnimeDetails/>}/>
          </Route>
          <Route path='auth' element={<Auth/>}/>
        </Routes>
      </BrowserRouter>
    </Provider>
);