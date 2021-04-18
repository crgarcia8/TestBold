import { faQuestionCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './Header.scss';

const Header = () => {
  const handleOnClick = (event) => {
    event.preventDefault();
  }
  return (
    <header className="main">
      <img className="logo" src={process.env.PUBLIC_URL + '/Bold Logo.png'} alt="Bold" />
      <div className="buttons">
        <a className="button is-ghost" href="/#" onClick={(e) => handleOnClick(e)}>
          Mi negocio
        </a>
        <a className="button is-ghost" href="/#" onClick={(e) => handleOnClick(e)}>
          Ayuda
          <FontAwesomeIcon icon={faQuestionCircle} />
        </a>
      </div>
    </header>
  );
}

export default Header;
