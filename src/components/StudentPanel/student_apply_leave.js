import React, { useState } from 'react';
import {Link,Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { logout } from '../../actions/auth';
import StudentBase from './base_template';
import Footer from './footer';
const StudentApplyLeave = ({logout,isAuthenticated  })=>{
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
              <h3 className="card-title">Apply for Leave</h3>
            </div>
            
            <form action="#" method="">
              <div className="card-body">
                <div className="form-group">
                  <label>Leave Date </label>
                 
                  <input type="date" name="leave_date" className="form-control" placeholder="Leave Date" />
                </div>
                <div className="form-group">
                  <label>Leave Reason</label>
                  <textarea className="form-control" rows={6} name="leave_msg" defaultValue={""} />
                </div>
                <div className="form-group">
                 
                  <div className="alert alert-danger" style={{marginTop: 10}}>Error message </div>
                  
                  <div className="alert alert-success" style={{marginTop: 10}}>Success message </div>
                  
                </div>
              </div>
              
              <div className="card-footer">
                <button type="submit" className="btn btn-primary btn-block" id="fetch_student">Apply for Leave</button>
              </div>
            </form>
          </div>
         
          <div className="card card-primary">
            <div className="card-header">
              <h3 className="card-title">Leave Apply History</h3>
            </div>
            <div className="table">
             
              <table className="table">
                <tbody><tr>
                    <th>ID</th>
                    <th>Leave Date</th>
                    <th>Leave Message</th>
                    <th>Leave Status</th>
                  </tr><tr>
                    <td> row.id </td>
                    <td> row.leave_date </td>
                    <td> row.leave_message </td>
                    <td>
                     
                      <span className="alert alert-success">Approved</span>
                      
                      <span className="alert alert-danger">Rejected</span>
                     
                      <span className="alert alert-info">Pending</span>
                      
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
export default connect( mapStateToProps, { logout })(StudentApplyLeave);