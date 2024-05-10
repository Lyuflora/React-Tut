import profilePic from './assets/logo_old.png';

function Card() {
  return (
    <div className="card">
      <img src={profilePic} alt="icon"></img>
      <h2>Aris</h2>
      <p>My new website</p>
    </div>
  );
}

export default Card;
