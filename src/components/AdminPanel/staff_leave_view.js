import React, { useState,useEffect } from 'react';
import {Link,Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { logout } from '../../actions/auth';
import AdminBase from './base_template';
import Footer from './footer';
import axios from 'axios';


const StaffLeaveAdmin = ({logout,isAuthenticated  })=>{
  const [leaves,updateLeaves] = useState([]);
  const [staffs,updateStaffs] = useState([]);
  
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
              <h3 className="card-title">Staff Apply for Leave</h3>
            </div>
            {/* /.card-header */}
            {/* form start */}
            <div className="table">
             
              <table className="table">
                <tbody><tr>
                    <th>ID</th>
                    <th>Staff ID</th>
                    <th>Staff Name</th>
                    <th>Leave Date</th>
                    <th>Leave Message</th>
                    <th>Apply On</th>
                    <th>Action</th>
                  </tr><tr>
                    <td> leave.id </td>
                    <td> leave.staff_id.admin.id </td>
                    <td> leave.staff_id.admin.first_name   leave.staff_id.admin.last_name </td>
                    <td> leave.leave_date </td>
                    <td> leave.leave_message </td>
                    <td> leave.created_at </td>
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

export default connect( mapStateToProps, { logout })(StaffLeaveAdmin);