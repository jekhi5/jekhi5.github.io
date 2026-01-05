import { NavLink } from 'react-router-dom';
import './index.css';
import { useRef } from 'react';
import { useReduceMotion } from 'context/SmoothScrollContext';

const Header = () => {
    const navTogglerRef = useRef<HTMLButtonElement | null>(null);
    const { reduceMotionEnabled, toggleReduceMotion } = useReduceMotion();

    const closeMenu = () => {
        const toggler = navTogglerRef.current;
        // 992px is Bootstrap's 'lg' breakpoint
        if (toggler && window.innerWidth < 992) {
            toggler.click();
        }
    };

    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light shadow-sm">
            <div className="container">
                <NavLink to="/home" className="navbar-brand fs-4 fw-bold">
                    Jacob Kline
                </NavLink>

                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarNav"
                    aria-controls="navbarNav"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                    ref={navTogglerRef}
                >
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav ms-auto">
                        <li className="nav-item">
                            <NavLink
                                to="/home"
                                id="home-button"
                                className={({ isActive }) =>
                                    `nav-link ${
                                        isActive ||
                                        window.location.href.indexOf('#') === -1
                                            ? 'active fw-bold text-primary'
                                            : ''
                                    }`
                                }
                                onClick={closeMenu}
                            >
                                Home
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink
                                to="/projects"
                                id="projects-button"
                                className={({ isActive }) =>
                                    `nav-link ${
                                        isActive
                                            ? 'active fw-bold text-primary'
                                            : ''
                                    }`
                                }
                                onClick={closeMenu}
                            >
                                Projects
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink
                                to="/work"
                                id="projects-button"
                                className={({ isActive }) =>
                                    `nav-link ${
                                        isActive
                                            ? 'active fw-bold text-primary'
                                            : ''
                                    }`
                                }
                                onClick={closeMenu}
                            >
                                Work History
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink
                                to="/blog"
                                id="blog-button"
                                className={({ isActive }) =>
                                    `nav-link ${
                                        isActive
                                            ? 'active fw-bold text-primary'
                                            : ''
                                    }`
                                }
                                onClick={closeMenu}
                            >
                                Blog
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink
                                to="/contact"
                                id="projects-button"
                                className={({ isActive }) =>
                                    `nav-link ${
                                        isActive
                                            ? 'active fw-bold text-primary'
                                            : ''
                                    }`
                                }
                                onClick={closeMenu}
                            >
                                Contact Me
                            </NavLink>
                        </li>
                        <li className="nav-item d-flex align-items-center">
                            <div className="smooth-scroll-container">
                                <span className="smooth-scroll-label">Reduce Motion</span>
                                <label className="switch">
                                    <input
                                        type="checkbox"
                                        checked={reduceMotionEnabled}
                                        onChange={toggleReduceMotion}
                                        aria-label="Toggle reduced motion for accessibility"
                                    />
                                    <span className="slider"></span>
                                </label>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Header;
