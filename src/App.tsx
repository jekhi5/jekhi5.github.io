import Projects from './components/Projects';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from 'components/Home';
import Header from 'components/Header';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="" element={<Home />} />
        <Route path="/portfolio/projects" element={<Projects />} />
        <Route path="*" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;