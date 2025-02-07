import "../styles/header.css"
import logo from "../img/logo.jpg"

export default function Header() {
  return (
    <header className="header">
      <div className="container header-container">
        <div className="logo">
          <img src={logo} alt="Logo" className="logo-icon" />
          <span className="logo-text">Prodimast</span>
        </div>
        <nav className="nav">
          <a href="/" className="nav-link">
            Home
          </a>
          <a href="/about" className="nav-link">
            About
          </a>
          <a href="/services" className="nav-link">
            Services
          </a>
          <a href="/contact" className="nav-link">
            Contact
          </a>
        </nav>
        <button className="sign-up-btn">Sign Up</button>
      </div>
    </header>
  )
}

