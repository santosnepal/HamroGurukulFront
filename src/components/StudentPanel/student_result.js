import React, { useState } from 'react';
import {Link,Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { logout } from '../../actions/auth';
import StudentBase from './base_template';
import Footer from './footer';
const StudentResult = ({logout,isAuthenticated  })=>{
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
  <section className="content">
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-12">
         
          <div className="card card-primary">
            <div className="card-header">
              <h3 className="card-title">Result</h3>
            </div>
            <div className="table">
              
              <table className="table">
                <tbody><tr>
                    <th>ID</th>
                    <th>Subject</th>
                    <th>Assignment Marks</th>
                    <th>Exam Marks</th>
                    <th>Status</th>
                  </tr><tr>
                    <td>id </td>
                    <td>subject_id.subject_name </td>
                    <td>subject_assignment_marks </td>
                    <td>subject_exam_marks </td>
                    <td>
                     
                      <span className="alert alert-success">PASS</span>
                      
                      <span className="alert alert-danger">FAIL</span>
                      
                    </td>
                  </tr></tbody></table>
            </div>
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
export default connect( mapStateToProps, { logout })(StudentResult);
