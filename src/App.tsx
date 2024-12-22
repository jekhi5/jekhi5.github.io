import Projects from './Projects';
import './App.css';
import { Route, BrowserRouter, Routes } from 'react-router-dom';
import Home from 'Home';
import Header from 'components/Header';
import 'bootstrap/dist/css/bootstrap.min.css';

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
