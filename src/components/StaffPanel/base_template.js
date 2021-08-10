import React, { Fragment,useState } from 'react';
import Footer from './Footer';
import Sidebar from './sidebar_template';
import StaffHome from './staff_home_template';
import AddResult from './staff_add_result';
import TakeAttendance from './staff_take_attendance';
import { logout } from '../../actions/auth';
import { connect } from 'react-redux';
// import EditStudent from './edit_student_result';
// import ApplyLeave from './staff_apply_leave';
// import UpdateAttendance from './staff_update_attendance';

const Base=({logout})=>{
  const [redirect, setRedirect] = useState(false);

  const logout_user = () => {
      logout();
      setRedirect(true);
  };
 
  
  
return(
<div>
  
  <meta charSet="utf-8" />
  <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
  <title>Hamro Gurukul|  Staff Panel</title>
 
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  
  <link href="https://fonts.googleapis.com/css?family=Source+Sans+Pro:300,400,400i,700" rel="stylesheet" />
  <div className="wrapper">
   
    <nav className="main-header navbar navbar-expand navbar-white navbar-light">
      
      <ul className="navbar-nav">
        <li className="nav-item">
          <a className="nav-link" data-widget="pushmenu" href="#"><i className="fas fa-bars" /></a>
        </li>
      </ul>
      <h4 style={{marginLeft: 10, marginTop: 5}}>HamroGurukul | Staff Panel</h4>
      <ul className="navbar-nav ml-auto">
       
        <li className="nav-item">
        <a className="nav-link" href="/" onClick={logout_user} >
            Logout
          </a>
        </li>
      </ul>
      
    </nav>
   
    
    <Sidebar/>
    
    
   
  </div>
  
  
</div>
);

}
export default connect(null, { logout })(Base);