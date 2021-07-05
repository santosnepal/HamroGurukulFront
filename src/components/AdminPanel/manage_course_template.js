import React, { useState } from 'react';
import {Link,Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { logout } from '../../actions/auth';
import AdminBase from './base_template';
import Footer from './footer';
import axios from 'axios';
import { useEffect } from 'react';


const ManageCourse = ({logout,isAuthenticated  })=>{
const [courses,setCourses] = useState([]);
const loadData=async ()=>{
  const config ={
    headers:{
        'content-type':'application/json',
        'Authorization': `JWT ${localStorage.getItem("access")}`,
        'Accept':'application/json'
    }
};
const loadedData = await axios.get("http://127.0.0.1:8000/api/viewcourses",config);
setCourses(loadedData);  
}
useEffect(()=>{
  loadData();
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
        <div className="col-12">
          <div className="card">
            <div className="card-header">
              <h3 className="card-title">Course Details</h3>
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
                    <th>Course Name</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {courses.data?courses.data.map(course=>(
                  <tr>
                    <td> {course.id} </td>
                    <td> {course.course_name} </td>
                    <td><Link to="#" className="btn btn-success">Edit</Link></td>
                  </tr>
                  )):
                  <tr>
                    <td>N/A</td>
                    <td>N/A</td>
                    <td><Link to="#" className="btn btn-success">Edit</Link></td>
                  </tr>
                  }
                  </tbody>
              </table>
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
// return(
//   <div>
//     Hello guys
//   </div>
// )
}
const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated
});

export default connect( mapStateToProps, { logout })(ManageCourse);