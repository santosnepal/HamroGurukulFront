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
const StudentViewAttendance = ({logout,isAuthenticated  })=>{
  const [attendance,updateAttandance] = useState([]);
  const [attendancereport,updateAttandanceReport] = useState([]);
  const [subject,updateSubject] = useState([]);
  const [person,setPerson] = useState([]);
  const LoadData=async()=>{
    const config ={
      headers:{
          'content-type':'application/json',
          'Authorization': `JWT ${localStorage.getItem("access")}`,
          'Accept':'application/json'
      }
  };
  const res = await axios.get(`http://127.0.0.1:8000/api/getattendancereportbi/${loadUserid()}`,config);
  // const res1= await axios.get(`http://127.0.0.1:8000/api/getatt`)
  updateAttandanceReport(res);
  const res1 = await axios.get(`http://127.0.0.1:8000/api/usesid/${loadUserid()}`,config);
  setPerson(res1);
  const res2 = await axios.get(`http://127.0.0.1:8000/api/viewsubject`,config);
  updateSubject(res2);
  const res3 = await axios.get(`http://127.0.0.1:8000/api/getattendance`,config);
  updateAttandance(res3);


  }
  
  useEffect(()=>{
    LoadData();
  },[])
 
return(
<div>
<div className="hold-transition sidebar-mini layout-fixed">
  <StudentBase/>
  </div>
  <div className="content-wrapper">
 {/* Main content */}
  <section className="content">
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-12">
          {/* general form elements */}
          <div className="card card-primary">
            <div className="card-header">
              <h3 className="card-title">View Attendance</h3>
            </div>
            {/* /.card-header */}
            {/* form start */}
            <div className="card-body">
              <div className="row">
                {attendance.data?
                attendance.data.map(att=>(
                  att.student_id===person.id?
                  <>
                  <div className="col-lg-3 attendance_div_green">
                  <b>Date: {att.attendance_date}</b>
                  <br />
                  {subject.data?subject.data.map(sub=>(
                    <>
                    
                    {att.subject_id===sub.id?<b>Subject: {sub.subject_name}</b>:null}
                    </>
                  )):null}
                 {attendancereport.data?attendancereport.data.map(attrp=>(
                   attrp.attendance_id===att.id?<><br/><b> Present : {attrp.status===true?`Yes`:`No`} </b></>:null
                 )):null} 
                </div>
                  
                  </>:null
                ))
                :
                <>No attendance Avilable</>}



               
              </div>
            </div>
            {/* /.card */}
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
export default connect( mapStateToProps, { logout })(StudentViewAttendance);
