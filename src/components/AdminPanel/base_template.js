import React, { useState } from 'react';
import Footer from './footer';
import {Link,Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { logout } from '../../actions/auth';
import AdminSideBar from './sidebar_template';
const AdminBase = ({logout,isAuthenticated  })=>{
  const [redirect, setRedirect] = useState(false);
  const logout_user = () => {
      logout();
      setRedirect(true);
      
  };
  if(isAuthenticated ){
    console.log("chor haina ma ");
  } 
  else{
    
    return <Redirect to="/"/>
  }
return(
<div>
  
  <meta charSet="utf-8" />
  <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
  <title>Hamro Gurukul|  Admin Panel</title>
 
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  
  <link href="https://fonts.googleapis.com/css?family=Source+Sans+Pro:300,400,400i,700" rel="stylesheet" />
  <div className="wrapper">
   
    <nav className="main-header navbar navbar-expand navbar-white navbar-light">
      
      <ul className="navbar-nav">
        <li className="nav-item">
          <a className="nav-link" data-widget="pushmenu" href="#"><i className="fas fa-bars" /></a>
        </li>
      </ul>
      <h4 style={{marginLeft: 10, marginTop: 5}}>HamroGurukul | Admin Panel</h4>
      <ul className="navbar-nav ml-auto">
       
        <li className="nav-item">
        <a className="nav-link" href="/" onClick={logout_user} >
            Logout
          </a>
        </li>
      </ul>
      
    </nav>
   
    
    <AdminSideBar/>
    
    
   
  </div>
  
  
</div>
);
}
const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated
});
export default connect( mapStateToProps, { logout })(AdminBase);