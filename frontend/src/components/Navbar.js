import { Component } from "react";
import "./NavbarStyles.css";
import { MenuItems } from "./MenuItems";
import { Link } from "react-router-dom";
import LogoYam from "../assets/mdtalogo.png";

class Navbar extends Component {
  // Set state
  state = { clicked: false };
  // Make Handleclick Function
  handleClick = () => {
    this.setState({ clicked: !this.state.clicked})
  }

  render() {
    return (
      <nav className="NavbarItems">
      <img style={{height:75, width:100, padding: 10}} src={LogoYam}/>
          <div className="menu-icons" onClick={this.handleClick}>
            <i className={this.state.clicked ? "fas fa-times" : "fas fa-bars"}></i>
          </div>

        <ul className={this.state.clicked ? "nav-menu active" : "nav-menu"}>
          {MenuItems.map((item, index) =>{
            return (
          <li key={index}>
            <Link className={item.cName} to={item.url}>
            <i className={item.icon}></i>{item.title}
            </Link>
          </li>
            )
          })}
          <button><Link style={{textDecoration: 'none', color: "inherit"}} to="/adminlogin">Admin Login</Link></button>
        </ul>
      </nav>
    );
  }
}

export default Navbar;
