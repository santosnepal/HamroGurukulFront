import React, { useState } from 'react';
import {Link,Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { logout } from '../../actions/auth';
import StudentBase from './base_template';
import Footer from './footer';
const StudentFeedback = ({logout,isAuthenticated  })=>{
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
              <h3 className="card-title">Leave a Feedback Message</h3>
            </div>
            
            <form action="" >
              <div className="card-body">
               
                <div className="form-group">
                  <label>Feedback Message</label>
                  <textarea className="form-control" rows={6} name="feedback_msg" defaultValue={""} />
                </div>
                <div className="form-group">
                  
                  <div className="alert alert-danger" style={{marginTop: 10}}> message </div>
                  
                  <div className="alert alert-success" style={{marginTop: 10}}> message </div>
                  
                </div>
              </div>
              {/* /.card-body */}
              <div className="card-footer">
                <button type="submit" className="btn btn-primary btn-block" id="fetch_student">Leave a Feedback Message</button>
              </div>
            </form>
          </div>
          {/* /.card */}
          <div className="card card-primary">
            <div className="card-header">
              <h3 className="card-title">Feedback History</h3>
            </div>
            <div className="table">
             
              <table className="table">
                <tbody><tr>
                    <th>ID</th>
                    <th>Feedback Message</th>
                    <th>Feedback Reply</th>
                  </tr><tr>
                    <td> row.id </td>
                    <td> row.feedback </td>
                    <td> row.feedback_reply </td>
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
export default connect( mapStateToProps, { logout })(StudentFeedback);