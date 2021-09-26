import React  from 'react';
import {Link} from 'react-router-dom';


export function Index() {
  return (
    <ul className="nav justify-content-center">
      <li className="nav-item">
        <Link className="nav-link" to="/">Home</Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="/cars">Cars</Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="/contact">Contact</Link>
      </li>
    </ul>
  );
}

export function Footer() {
  return (
    <footer className="footer bg-dark mt-auto py-3">
      <div className="container">
        <span className="text-muted text-light">&copy; 2021 - Miguel Angel Avila Torres</span>
      </div>
    </footer>
  );
}
