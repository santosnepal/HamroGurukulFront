import React, { useState ,useEffect} from 'react';
import {Link,Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { logout } from '../../actions/auth';
import StudentBase from './base_template';
import Footer from './footer';
import axios from 'axios';
import store from '../../store';
const loadUserid=()=>{
  const  state=store.getState();
  return(state.auth.user.id);
 }
const StudentResult = ({logout,isAuthenticated  })=>{
  const [result,updateResult] = useState([]);
  const [subject,updateSubject] = useState([]);
  const LoadData=async ()=>{
    const config ={
      headers:{
          'content-type':'application/json',
          'Authorization': `JWT ${localStorage.getItem("access")}`,
          'Accept':'application/json'
      }
  };
 const res = await axios.get(`http://127.0.0.1:8000/api/getresults/${loadUserid()}`,config);
  const res1 = await axios.get("http://127.0.0.1:8000/api/viewsubject",config);
  updateSubject(res1);
  updateResult(res);
  console.log(res);
  console.log(`http://127.0.0.1:8000/api/getresults/${loadUserid}`);
  }
  useEffect(()=>{
    LoadData()
  },[])
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
                  </tr>
                  
                    {result.data?
                    result.data.map(res=>(
                      <tr>
                      <td>{res.id}</td>
                      <td>{subject.data?
                      subject.data.map(sub=>(
                        sub.id===res.subject_id?`${sub.subject_name}`:null
                      ))
                      :`Couldn't load subject name`}</td>
                      <td>{res.subject_assignment_marks}</td>
                      <td>{res.subject_exam_marks}</td>
                      <td>
                     
                     <span className="alert alert-success" style={{display:res.subject_assignment_marks>=12&&res.subject_exam_marks>=32?`flex`:`none`}}>PASS</span>
                     
                     <span className="alert alert-danger" style={{display:res.subject_assignment_marks>=12&&res.subject_exam_marks>=32?`none`:`flex`}}>FAIL</span>
                     
                   </td>
                      </tr>
                    ))
                    :<tr><td>No Result Data Avilable</td></tr>}
                  
                  
                  </tbody></table>
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
