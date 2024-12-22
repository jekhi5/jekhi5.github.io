import { NavLink } from 'react-router-dom';

const Header = () => {
  return (
    <div id="header" className="header">
      {/* // TODO: Add personal logo */}
      {/* <NavLink to="/home">
        <div className="logo">
          <img src={logo} alt="Jacob's Portfolio Logo" />
        </div>
      </NavLink> */}
      <div className="headerNav">
        <NavLink
          to="/home"
          id="home-button"
          className={({ isActive }) =>
            `menu_button ${isActive ? 'menu_selected' : ''}`
          }
        >
          Home
        </NavLink>{' '}
        <NavLink
          to="/projects"
          id="projects-button"
          className={({ isActive }) =>
            `menu_button ${isActive ? 'menu_selected' : ''}`
          }
        >
          Projects
        </NavLink>{' '}
        <NavLink
          to="/resume"
          id="resume-button"
          className={({ isActive }) =>
            `menu_button ${isActive ? 'menu_selected' : ''}`
          }
        >
          Resume
        </NavLink>
      </div>
    </div>
  );
};

export default Header;
