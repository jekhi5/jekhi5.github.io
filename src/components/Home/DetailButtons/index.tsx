import { FaFilePdf, FaGithub, FaLinkedin } from 'react-icons/fa';

export default function DetailButtons() {
  return (
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
        href={`${process.env.PUBLIC_URL}/Jacob_Kline.pdf`}
        target="_blank"
        rel="noreferrer"
        className="btn btn-outline-dark d-flex align-items-center gap-1"
      >
        <FaFilePdf />
        Resume
      </a>
    </div>
  );
}
