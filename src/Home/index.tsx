export default function Home() {
  return (
    <div id="home-page" className="container">
      <div className="row justify-content-start">
        <div className="col-7">
          Hey! My name is Jacob. I'm a computer scientist fascinated by
          language, emergency medicine, and Reproductive Justice. When I'm not
          programming you can probably find me working on an ambulance or
          playing Mario Kart (I guess I like to drive fast).
        </div>
        <div className="col-5">
          <img
            src={require('../images/profile.jpg')}
            alt="Photograph of Jacob"
            height="333"
            width="250"
          />
        </div>
      </div>
    </div>
  );
}
