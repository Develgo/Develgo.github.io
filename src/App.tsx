import './App.css';
import NavBar from './components/NavBar';
import { Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import Footer from './components/Footer';
import ArchitecturePage from './pages/ArchitecturePage';
import GitPage from './pages/GitPage';

function App() {
  return (
    <div className="App">
      <NavBar/>
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/about" element={<AboutPage />}></Route>
        <Route path="/architecture" element={<ArchitecturePage />}></Route>
        <Route path="/git-cheat-sheet" element={<GitPage />}></Route>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
