import './navbar.css'
import logo from './logo.png'

function Navbar() {
  return (
    <div className="navbar">
      <div className="Navbar--lewaStrona">
        <img className="logo"  src={logo}/>
        <div>DOMOWE PRZEPISY</div>
      </div>
      <div className="zakladka zakladkaPierwsza">
        OFERTA
      </div>
      <div className="zakladka">
        PRZEPISY
      </div>


    </div>
  );
}

export default Navbar;