import './App.css';
import NavBar from './components/NavBar';
import { Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import Footer from './components/Footer';
import ArchitecturePage from './pages/ArchitecturePage';
import GitPage from './pages/GitPage';
import MongoDbPage from './pages/MongoDbPage';
import ScaffoldingDotnetPage from './pages/ScaffoldingDotnetPage';
import SwiftMockDataProviderPage from './pages/SwiftMockDataProviderPage';

function App() {
  return (
    <div className="App">
      <NavBar/>
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/about" element={<AboutPage />}></Route>
        <Route path="/architecture" element={<ArchitecturePage />}></Route>
        <Route path="/git-cheat-sheet" element={<GitPage />}></Route>
        <Route path='/mongodb-todo-list' element={<MongoDbPage />}></Route>
        <Route path='/scaffolding-dotnet' element={<ScaffoldingDotnetPage />}></Route>
        <Route path='/swift-mock-data-provider' element={<SwiftMockDataProviderPage />}></Route>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
