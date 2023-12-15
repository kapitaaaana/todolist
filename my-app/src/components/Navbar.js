import './navbar.css';


import { FaAddressBook } from "react-icons/fa";

export default function Navbar({ user, logout }) {
  return (
    <nav className="navbar">
      <div className="nav-logo">
        <FaAddressBook size={30} />
        <h1>CESS ToList</h1>
      </div>
      <div className="nav-links">
        <p onClick={logout}>{user.email}</p>
        
      </div>
    </nav>
  );
}