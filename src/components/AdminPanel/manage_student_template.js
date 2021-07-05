import React, {useEffect, useState } from 'react';
import {Link,Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { logout } from '../../actions/auth';
import AdminBase from './base_template';
import axios from 'axios';
import Footer from './footer';


const ManageStudent = ({logout,isAuthenticated  })=>{
  const [students,updateStudents] = useState([]);
  const [redirect, setRedirect] = useState(false);
  const logout_user = () => {
      logout();
      setRedirect(true);
      
  };
  const LoadData= async ()=>{
    const dataS= await axios.get("http://127.0.0.1:8000/api/suser/3");
    console.log("Hey ia m called");
updateStudents(dataS);
};
useEffect(() => {
 console.log("Hey i am calling");
LoadData();
}, []);
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
        <div className="col-12">
          <div className="card">
            <div className="card-header">
              <h3 className="card-title">Student Details</h3>
              <div className="card-tools">
                <div className="input-group input-group-sm" style={{width: 150}}>
                  <input type="text" name="table_search" className="form-control float-right" placeholder="Search" />
                  <div className="input-group-append">
                    <button type="submit" className="btn btn-default"><i className="fas fa-search" /></button>
                  </div>
                </div>
              </div>
            </div>
            {/* /.card-header */}
            <div className="card-body table-responsive p-0">
              
              <table className="table table-hover text-nowrap">
                <thead>
                  <tr>
                    <th>ID</th>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Email</th>
                    <th>Address</th>
                    <th>Gender</th>
                    <th>Profile Pic</th>
                    <th>Session Year</th>
                    <th>Course</th>
                    <th>Last Login</th>
                    <th>Date Joined</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                    {students.data?students.data.map(student =>(
                      <tr>
                      <td>{student.id?student.id:`N/A`} </td>
                      <td>{student.first_name?student.first_name:`N/A`} </td>
                      <td>{student.last_name?student.last_name:`N/A`} </td>
                      <td>{student.email?student.email:`N/A`} </td>
                      <td>{student.address?student.address:`N/A`} </td>
                      <td>{student.gender?student.gender:`N/A`} </td>
                      <td>N/A</td>
                      <td>{student.Session_start_to_end?student.Session_start_to_end:`N/A`} </td>
                      <td>{student.course_name?student.course_name:`N/A`} </td>
                      <td>{student.last_login?student.last_login:`N/A`} </td>
                      <td>{student.date_joined?student.date_joined:`N/A`} </td>
                      <td><Link to="#" className="btn btn-success">Edit</Link></td>
                      </tr>
                    )):<tr>
                      <td>id </td>
                    <td>N/A</td>
                    <td> N/A </td>
                    <td> N/A </td>
                    <td> N/A </td>
                    <td> N/A </td>
                    <td> N/A </td>
                    <td> N/A </td>
                    <td> N/A </td>
                    <td> N/A </td>
                    <td> N/A </td>
                    <td><Link to="#" className="btn btn-success">Edit</Link></td>
                      </tr>}
                  </tbody>
              </table>
            </div>
            {/* /.card-body */}
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

export default connect( mapStateToProps, { logout })(ManageStudent);