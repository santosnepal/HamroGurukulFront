import React, { useState } from 'react';
import {Link,Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { logout } from '../../actions/auth';
import AdminBase from './base_template';
import Footer from './footer';
import { useEffect } from 'react';
import axios from 'axios';


const ManageSubject = ({logout,isAuthenticated  })=>{
  
  const [subject,updateSubjects] = useState([]);
  const [staffs,updateStaffs] = useState([]);
  const [courses,updateCourses] = useState([]);
  

  const LoadData= async ()=>{
    const config ={
      headers:{
          'content-type':'application/json',
          'Authorization': `JWT ${localStorage.getItem("access")}`,
          'Accept':'application/json'
      }
  };
        const dataS= await axios.get("http://127.0.0.1:8000/api/viewsubject",config);
        
      	updateSubjects(dataS);
  };
  const loadStaffName =async (stffid)=>{
    if(staffs.data){
      staffs.data.map(stf=>{
        if(stf.id===stffid){
          return `${stf.first_name} ${stf.last_name}`
        }

      });
    }
    else{
      return `N/A`;
    }


  }
  const loadCourseName = async (ccid)=>{
        
   
  }
 
  useEffect(async ()=>{
    const config ={
      headers:{
          'content-type':'application/json',
          'Authorization': `JWT ${localStorage.getItem("access")}`,
          'Accept':'application/json'
      }
  };
  const sse = await axios.get(`http://127.0.0.1:8000/api/suser/2`,config);
  updateStaffs(sse);
  const cce = await axios.get(`http://127.0.0.1:8000/api/viewcourses`,config);
  updateCourses(cce);
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
        <div className="col-12">
          <div className="card">
            <div className="card-header">
              <h3 className="card-title">Subject Details</h3>
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
                    <th>Subject Name</th>
                    <th>Course Name</th>
                    <th>Course ID</th>
                    <th>Staff Name</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {subject.data?subject.data.map(sub =>(
                  <tr>
                    <td>{sub.id}</td>
                    <td>{sub.subject_name}</td>
                    <td>{courses.data.map(csr=>(
                      csr.id===sub.course_id?csr.course_name:``
                    ))}</td>
                    <td>{sub.course_id}</td>
                    <td>{staffs.data.map(stfs=>(
                      stfs.id===sub.staff_id?`${stfs.first_name} ${stfs.last_name}`:``
                    ))}</td>
                    <td><Link to="#" className="btn btn-success">Edit</Link></td>
                  </tr>
                  )):
                  <tr>
                    <td>N/A</td>
                    <td>N/A</td>
                    <td>N/A</td>
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

export default connect( mapStateToProps, { logout })(ManageSubject);