import Projects from './components/Projects';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from 'components/Home';
import Header from 'components/Header';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import WorkHistory from 'components/WorkHistory';
import ContactForm from 'components/ContactForm';
import BlogList from 'components/Blog/index';
import BlogPostRouter from 'components/Blog/BlogPosts/BlogPostRouter';
import ScrollToTop from 'components/ScrollToTop';
import { ReduceMotionProvider } from 'context/SmoothScrollContext';

function App() {
    return (
        <ReduceMotionProvider>
            <div className="App">
                <ScrollToTop />
                <Header />
                <Routes>
                    <Route path="" element={<Home />} />
                    <Route path="/projects" element={<Projects />} />
                    <Route path="/work" element={<WorkHistory />} />
                    <Route path="/contact" element={<ContactForm />} />
                    <Route path="/blog" element={<BlogList />} />
                    <Route path="/blog/:postId" element={<BlogPostRouter />} />
                    <Route path="*" element={<Home />} />
                </Routes>
            </div>
        </ReduceMotionProvider>
    );
    
}

export default App;
