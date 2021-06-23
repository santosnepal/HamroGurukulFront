import React, { useState } from 'react';
import {Link,Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { logout } from '../../actions/auth';
import AdminBase from './base_template';
import Footer from './footer';


const StudentLeaveAdmin = ({logout,isAuthenticated  })=>{
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
              <h3 className="card-title">Student Apply for Leave</h3>
            </div>
            {/* /.card-header */}
            {/* form start */}
            <div className="table">
              
              <table className="table">
                <tbody><tr>
                    <th>ID</th>
                    <th>Student ID</th>
                    <th>Student Name</th>
                    <th>Leave Date</th>
                    <th>Leave Message</th>
                    <th>Apply On</th>
                    <th>Action</th>
                  </tr><tr>
                    <td> id </td>
                    <td> id </td>
                    <td> first_name   last_name </td>
                    <td> leave_date </td>
                    <td> leave_message </td>
                    <td> created_at </td>
                    <td>
                    <Link to="#" className="btn btn-success">Approve</Link>
                      <Link  className="btn btn-danger" to="#">Disapprove</Link>
                      
                      <button className="btn btn-warning" disabled="disabled" data-toggle="modal" data-target="#reply_modal">Approved</button>
                      
                      <button className="btn btn-danger" disabled="disabled" data-toggle="modal" data-target="#reply_modal">Disapproved</button>
                    </td>
                  </tr></tbody></table>
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

export default connect( mapStateToProps, { logout })(StudentLeaveAdmin);