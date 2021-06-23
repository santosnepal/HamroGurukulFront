import React, { useState } from 'react';
import {Link,Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { logout } from '../../actions/auth';
import AdminBase from './base_template';
import Footer from './footer';


const AdminViewAttendance = ({logout,isAuthenticated  })=>{
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
<div className="hold-transition sidebar-mini  layout-fixed">
  
  <AdminBase/>
  
 
  </div>
  <div className="content-wrapper">
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
              <div className="form-group">
                <label>Subject </label>
                <select className="form-control" name="subject" id="subject">
                  
                  <option value="#"> subject_name</option>
                  
                </select>
              </div>
              <div className="form-group">
                <label>Session Year </label>
                <select className="form-control" name="session_year_id" id="session_year_id">
                 
                  <option value="#"> session_start_year TO  session_end_year</option>
                  
                </select>
              </div>
              <div className="form-group">
                <button type="button" className="btn btn-primary btn-block" id="fetch_attendance">Fetch Attendance Date</button>
              </div>
              <div className="form-group" id="attendance_block" style={{display: 'none'}}>
                <label>Attendance Date </label>
                <select className="form-control" name="attendance_date" id="attendance_date">
                </select>
              </div>
              <div className="form-group">
                <div className="alert alert-danger" id="error_attendance" style={{display: 'none'}}>
                </div>
              </div>
              <div className="form-group" id="fetch_student_block" style={{display: 'none'}}>
                <button type="button" className="btn btn-primary btn-block" id="fetch_student">Fetch Student Data</button>
              </div>
            </div>
            {/* /.card-body */}
            <div id="student_data" className="card-footer">
            </div>
          </div>
          {/* /.card */}
        </div>
      </div>
    </div>
  </section>
  </div>
  <Footer/>
</div>
);
// return(
//   <div>
//     Hello guys
//   </div>
// )
}
const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated
});

export default connect( mapStateToProps, { logout })(AdminViewAttendance);