import React, { useState,useEffect } from 'react';
import {Link,Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { logout } from '../../actions/auth';
import AdminBase from './base_template';
import Footer from './footer';
import axios from 'axios';

const StudentLeaveAdmin = ({logout,isAuthenticated  })=>{
  const [leave,updateLeave] = useState([]);
  const [student,updateStudent] = useState([]);
  const LoadData=async ()=>{
    const config ={
      headers:{
          'content-type':'application/json',
          'Authorization': `JWT ${localStorage.getItem("access")}`,
          'Accept':'application/json'
      }
  };
  const dataS= await axios.get("http://127.0.0.1:8000/api/getstudentleave",config);
  const data= await axios.get("http://127.0.0.1:8000/api/suser/3",config);
  updateLeave(dataS);
  updateStudent(data);
  }
  useEffect(async ()=>{
    LoadData();
  },[])
  
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
                  </tr>{leave.data?leave.data.map(leaves=>(
                    <tr>
                    <td> {leaves.id} </td>
                    <td> {leaves.student_id} </td>
                    <td> {student.data?student.data.map(student=>(
                      leaves.student_id===student.id?`${student.first_name} ${student.last_name}`:``
                    )):`N/A`} </td>
                    <td> {leaves.leave_date} </td>
                    <td> {leaves.leave_message} </td>
                    <td> {leaves.created_at} </td>
                    <td>{leaves.leave_status===0?
                    <Link to="#" className="btn btn-success">Approve</Link>:
                    <Link  className="btn btn-danger" to="#">Disapprove</Link>}
                    </td>
                  </tr>
                  )):<tr>
                    <td> id </td>
                    <td> id </td>
                    <td> first_name   last_name </td>
                    <td> leave_date </td>
                    <td> leave_message </td>
                    <td> created_at </td>
                    </tr>}</tbody></table>
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