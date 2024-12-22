import { FaFilePdf, FaGithub, FaLinkedin } from 'react-icons/fa';

export default function Home() {
  return (
    <div id="home-page" className="container">
      <div className="row justify-content-start">
        <div className="col-5 vh-100 text-center">
          <img
            src={require('../data/profile.jpg')}
            alt="Photograph of Jacob"
            height="333"
            width="250"
            className="img-fluid rounded-circle"
          />

          <div className="mb-2">
            Hey! My name is Jacob. I'm a computer scientist fascinated by
            language, emergency medicine, and Reproductive Justice. When I'm not
            programming you can probably find me working on an ambulance or
            playing Mario Kart (I guess I like to drive fast).
          </div>

          <div className="d-flex gap-2 mb-2 text-center">
            <a
              href="https://www.linkedin.com/in/jacob-e-kline"
              target="_blank"
              rel="noreferrer"
              className="btn btn-outline-primary"
            >
              <FaLinkedin className="me-1" />
              LinkedIn
            </a>

            <a
              href="https://www.github.com/jekhi5"
              target="_blank"
              rel="noreferrer"
              className="btn btn-outline-dark"
            >
              <FaGithub className="me-1" />
              GitHub Repository
            </a>

            <a
              href="https://github.com/jekhi5/MyInformation/blob/main/Jacob%20Kline.pdf"
              target="_blank"
              rel="noreferrer"
              className="btn btn-outline-dark"
            >
              <FaFilePdf className="me-1" />
              Resume
            </a>
          </div>
        </div>
        <div className="col-7 vh-100"></div>
      </div>
    </div>
  );
}
