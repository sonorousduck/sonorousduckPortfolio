import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Screens/HomeScreen';
import About from './Screens/AboutMeScreen';
import Projects from './Screens/ProjectsScreen';
import Blog from './Screens/BlogScreen';


function App() {
  return (
    <Router>
      {/* <Navbar /> */}
      <Routes>
        <Route path='/about' element={<About />} />
        <Route path='/projects' element={<Projects />} />
        <Route path='/blog' element={<Blog />} />

        {/* <Route path='/privacy' element={<Privacy />} /> */}
        <Route path='/' element={<Home />} />
      </Routes>
    </Router>
  );
}

export default App;
