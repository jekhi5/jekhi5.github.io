import Projects from './Projects';
import './App.css';
import { Route, BrowserRouter, Routes } from 'react-router-dom';
import Home from 'Home';
import Header from 'components/Header';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
