import profilePic from './assets/logo_old.png';
import Button from './Button/Button';

function Card() {
  return (
    <div className="card">
      <img className="card-image" src={profilePic} alt="icon"></img>
      <h2 className="card-title">Aris</h2>
      <Button></Button>
      <div className="card-text">My new website</div>
    </div>
  );
}

export default Card;
