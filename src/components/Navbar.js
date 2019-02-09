import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import NavLogo from '../kanavez-icon.png';

class Navbar extends Component {
    render() {
        return (
            <nav style={{backgroundColor: 'black'}} className="navbar navbar-expand-sm navbar-dark px-sm-5">
                 <Link to='/'>
                    <img src={NavLogo} style={{height:'50px'}} alt="Kanavez - Online Store" className="navbar-brand navbar-custom-styling" />
                 </Link>
                 <ul className="navbar-nav align-items-center">
                    <li className="nav-item ml-5">
                        <Link to="/" className="nav-link navbar-custom-styling">
                            Home
                        </Link> 
                    </li>
                 </ul>
                  <Link to="/cart" className="ml-auto">
                    <button className="btn btn-danger"><span className="fas fa-cart-plus"></span>&nbsp;&nbsp;&nbsp;My Cart</button>
                  </Link>
            </nav>
        );
    }
}

export default Navbar;