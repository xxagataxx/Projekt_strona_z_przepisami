import './navbar.css'
import logo from './logo.png'
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="navbar">
      <div className="Navbar--lewaStrona">
        <img className="logo"  src={logo} alt="logo"/>
        <div>DOMOWE PRZEPISY</div>
      </div>
      <div className="zakladka zakladkaPierwsza">
        <Link to="/">OFERTA</Link>
      </div>
      <div className="zakladka">
         <Link to="/przepisy">PRZEPISY</Link>
      </div>


    </div>
  );
}

export default Navbar;