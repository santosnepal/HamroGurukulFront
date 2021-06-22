import React, { useState } from 'react';
import {Link,Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { logout } from '../../actions/auth';
import StudentBase from './base_template';
import Footer from './footer';
const StudentViewAttendance = ({logout,isAuthenticated  })=>{
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
<div className="hold-transition sidebar-mini layout-fixed">
  <StudentBase/>
  </div>
  <div className="content-wrapper">
 {/* Main content */}
  <section className="content">
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-12">
          {/* general form elements */}
          <div className="card card-primary">
            <div className="card-header">
              <h3 className="card-title">View Attendance</h3>
            </div>
            {/* /.card-header */}
            {/* form start */}
            <div className="card-body">
              <div className="row">
                
                <div className="col-lg-3 attendance_div_green">
                  <b>Date </b>
                  <br />
                  <b> Status : Present </b>
                </div>
               
                <div className="col-lg-3 attendance_div_red">
                  <b>Date </b>
                  <br />
                  <b> Status : Absent </b>
                </div>
                
               
                <div className="alert alert-danger text-center">No Attendance Data Found!</div>
                
              </div>
            </div>
            {/* /.card */}
          </div>
        </div>
      </div>
    </div>
    </section>
 </div>
 <Footer/>
 </div>
);
}
const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated
});
export default connect( mapStateToProps, { logout })(StudentViewAttendance);
