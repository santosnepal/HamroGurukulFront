import React, { Component ,useState} from 'react';
import { logout } from '../../actions/auth';
import { Link, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
  
const  Menu =({logout})=>{

  const [redirect, setRedirect] = useState(false);

  const logout_user = () => {
      logout();
      setRedirect(true);
  };
    
  return (
        <div>
   <aside className="main-sidebar sidebar-dark-primary elevation-4">
    {/* Brand Logo */}
    <a href="index3.html" className="brand-link">
      <span className="brand-text font-weight-light">Gurukul Admin</span>
    </a>
    {/* Sidebar */}
    <div className="sidebar">
      {/* Sidebar user panel (optional) */}
      <div className="user-panel mt-3 pb-3 mb-3 d-flex">
        
        <div className="info">
          <a href="#" className="d-block">Name of logined user </a>
        </div>
      </div>
      {/* Sidebar Menu */}
      <nav className="mt-2">
        <ul className="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu" data-accordion="false">
        <li className='nav-item'>
            <a className='nav-link' href='#!' onClick={logout_user}>Logout</a>
        </li>
        </ul>
      </nav> 
    </div>
  </aside> 
  </div>
          
  )
}


export default connect(null, { logout })(Menu);