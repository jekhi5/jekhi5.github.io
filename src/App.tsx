import Projects from './components/Projects';
import './App.css';
import { Route, BrowserRouter, Routes } from 'react-router-dom';
import Home from 'components/Home';
import Header from 'components/Header';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/projects" element={<Projects />} />
          <Route path="*" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
