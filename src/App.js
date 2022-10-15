import logo from './logo.svg';
import './App.css';
import TopBar from './Components/TopBar/TopBar';
import LeftNavBar from './Components/LeftNavBar/LeftNavBar';
import TopStories from './Components/Topics/TopStories/TopStories';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import Business from './Components/Topics/Business';
import Entertainment from './Components/Topics/Entertainment';
import Health from './Components/Topics/Health';
import India from './Components/Topics/India';
import Science from './Components/Topics/Science';
import Sports from './Components/Topics/Sports';
import UnitedStates from './Components/Topics/World';


function App() {
  return (
    <Router>
      <div className='news-app-container'>
        <TopBar />
        <div className='space-below-header'>
          <LeftNavBar />
          <Routes>
            <Route path='/topstories' element={<TopStories />} />
            <Route path='/business' element={<Business />} />
            <Route path='/entertainment' element={<Entertainment />} />
            <Route path='/health' element={<Health />} />
            <Route path='/india' element={<India />} />
            <Route path='/science' element={<Science />} />
            <Route path='/sports' element={<Sports />} />
            <Route path='/world' element={<UnitedStates />} />
            <Route path='*' element={<Navigate to={'/topstories'} />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;

const newsCards = document.getElementsByClassName('news-card')
console.log(newsCards);
