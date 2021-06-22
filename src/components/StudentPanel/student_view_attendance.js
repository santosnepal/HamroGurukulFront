import React, { useState } from 'react';
import {Link,Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { logout } from '../../actions/auth';
import StudentBase from './base_template';
import Footer from './footer';
const StudentAttendancePost = ({logout,isAuthenticated  })=>{
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
  <section classname="content">
    <div classname="container-fluid">
      <div classname="row">
        <div classname="col-md-12">
         
          <div classname="card card-primary">
            <div classname="card-header">
              <h3 classname="card-title">View Attendance</h3>
            </div>
            
            <form action="{% url 'student_view_attendance_post' %}" method="post">
              <div classname="card-body">
                
                <div classname="form-group">
                  <label>Subject </label>
                  <select classname="form-control" name="subject" id="subject">
                    
                    <option value="{{ subject.id }}"> subject.subject_name </option>
                    
                  </select>
                </div>
                <div classname="row">
                  <div classname="col-lg-6">
                    <div classname="form-group">
                      <label>Start Date</label>
                      <input type="date" name="start_date" classname="form-control" placeholder="Start Date" />
                    </div>
                  </div>
                  <div classname="col-lg-6">
                    <div classname="form-group">
                      <label>End Date</label>
                      <input type="date" name="end_date" classname="form-control" placeholder="End Date" />
                    </div>
                  </div>
                </div>
                <div classname="form-group">
                 
                  <div classname="alert alert-danger" > message </div>
                 
                  <div classname="alert alert-success">message </div>
                 
                </div>
               
                <div classname="card-footer">
                  <button type="submit" classname="btn btn-primary btn-block" id="fetch_student">Fetch Attendance</button>
                </div>
                <div id="student_data" classname="card-footer">
                </div>
              </div>
            </form>
           
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
export default connect( mapStateToProps, { logout })(StudentAttendancePost);