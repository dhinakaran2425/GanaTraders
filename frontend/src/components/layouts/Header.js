import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux';
import {Dropdown} from 'react-bootstrap';
import { logout } from '../../actions/userActions';
import './header.css'; 


export default function Header () {
    const { isAuthenticated, user } = useSelector(state => state.authState);
    const { items:cartItems } = useSelector(state => state.cartState)
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const logoutHandler = () => {
      dispatch(logout);
    }


    return (
<nav>
        <ul class="navigation">
        <Link to="/">
               <img width="200px" alt='GT Logo' src="https://res.cloudinary.com/duhcntqom/image/upload/v1708941834/logoGT.jpg" />
             </Link>
        <li>
                <a title="Home">
                <Link to="/">Home</Link>
                </a>
            </li>
            <li>
                <a title="Products">
                <Link to="/productspro"> Products</Link>
                </a>
            </li>
            <li>
                <a title="Gallery">
                <Link to="/gallery">Gallery</Link>
                </a>
            </li>
            <li>
                <a title="Contact">
                <Link to="/contact">Contact</Link>
                </a>
            </li> 
            <li>
                <a title="Cart">
                <Link to="/cart">cart</Link><li><a> {cartItems.length}</a></li>
                </a>
            </li>
            
            { isAuthenticated ? 
            (<li><a> 
              <Dropdown>
                  <Dropdown.Toggle  >
                    <a>Hello !{user.name}</a>
                  </Dropdown.Toggle>
                  <Dropdown.Menu>
                  <li><a>{ user.role === 'admin' && <Dropdown.Item onClick={() => {navigate('admin/dashboard')}}>Dashboard</Dropdown.Item> }</a></li>
                      <div class="subnavigation__wrapper"> <li><a><Dropdown.Item onClick={() => {navigate('/myprofile')}}>Profile</Dropdown.Item></a></li> 
                      <li><a><Dropdown.Item onClick={() => {navigate('/orders')}}>Orders</Dropdown.Item></a></li>
                      <li><a><Dropdown.Item onClick={logoutHandler}>Logout</Dropdown.Item></a></li></div>
                  </Dropdown.Menu>
              </Dropdown></a></li>
            )
          
          :
          <li><a> <Link to="/login">Login</Link></a></li>
          }
            
        </ul>
    </nav>
    )
}