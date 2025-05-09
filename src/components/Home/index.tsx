import './index.css';
import DetailButtons from './DetailButtons';

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

        <div className="mb-4 fs-5 text-black">
          Hey! My name is Jacob. I'm a computer scientist fascinated by
          language, emergency medicine, and Reproductive Justice. When I'm not
          programming you can probably find me working on an ambulance or
          playing Mario Kart (I guess I like to drive fast).
        </div>

        <DetailButtons />
      </div>
    </div>
  );
}
