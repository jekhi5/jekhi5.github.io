import { FaFilePdf, FaGithub, FaLinkedin, FaHammer } from 'react-icons/fa';
import './index.css';

export default function Home() {
  return (
    <div className="d-flex justify-content-center align-items-center vh-100 text-center">
      <div>
        <img
          src={require('../../data/profile.jpg')}
          alt="Photograph of Jacob"
          height="333"
          width="250"
          className="img-fluid rounded-circle mb-3 shadow"
        />

        <div className="mb-4 fs-5 text-secondary">
          Hey! My name is Jacob. I'm a computer scientist fascinated by
          language, emergency medicine, and Reproductive Justice. When I'm not
          programming you can probably find me working on an ambulance or
          playing Mario Kart (I guess I like to drive fast).
        </div>

        <div className="d-flex justify-content-center gap-3">
          <a
            href="https://www.linkedin.com/in/jacob-e-kline"
            target="_blank"
            rel="noreferrer"
            className="btn btn-outline-primary d-flex align-items-center gap-1"
          >
            <FaLinkedin />
            LinkedIn
          </a>
          <a
            href="https://www.github.com/jekhi5"
            target="_blank"
            rel="noreferrer"
            className="btn btn-outline-dark d-flex align-items-center gap-1"
          >
            <FaGithub />
            GitHub
          </a>
          <a
            href="https://github.com/jekhi5/MyInformation/blob/main/Jacob%20Kline.pdf"
            target="_blank"
            rel="noreferrer"
            className="btn btn-outline-dark d-flex align-items-center gap-1"
          >
            <FaFilePdf />
            Resume
          </a>
          <a
            href="/projects"
            className="btn btn-outline-dark d-flex align-items-center gap-1"
          >
            <FaHammer />
            Projects
          </a>
        </div>
      </div>
    </div>
  );
}
