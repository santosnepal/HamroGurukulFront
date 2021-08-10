import React, { useState,useEffect } from 'react';
import {Link,Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { logout } from '../../actions/auth';
import AdminBase from './base_template';
import Footer from './footer';
import axios from 'axios';


const AdminViewAttendance = ({logout,isAuthenticated  })=>{
  const[subject,updateSubject] = useState([]);
  const[sessionyear,updateSessionYear] = useState([]);
  const [attendance,updateAttendance] = useState([]);
  const [date,updateDate] = useState([]);
  const[option,updateOption] = useState([]);
  const[attendancereport,updateAttendancereport] = useState([]);
  const[student,updatteStudent] = useState([]);
  const LoadThirdData = async ()=>{
    const attid = document.getElementById("attendance_date").value;
    console.log(attid);
    const config = {
      headers: {
          //'X-CSRFToken': Cookies.get('csrftoken'),
          'Accept': 'application/json',
          'Authorization': `JWT ${localStorage.getItem("access")}`,
          'Content-Type': 'application/json',
          
      }
  };
  const report = await  axios.get(`http://127.0.0.1:8000/api/getattendancereport/${attid}`,config);
  const students = await axios.get("http://127.0.0.1:8000/api/suser/3",config);
  console.log(report);
  updateAttendancereport(report);
  updatteStudent(students);
  const dataplace = document.getElementById("student_data");
  dataplace.style.display = "inline";

  }
  const LoadSecondData=async ()=>{
    const seaaionid=document.getElementById("session_year_id").value;
    const subid=document.getElementById("subject").value;
    const config = {
      headers: {
          //'X-CSRFToken': Cookies.get('csrftoken'),
          'Accept': 'application/json',
          'Authorization': `JWT ${localStorage.getItem("access")}`,
          'Content-Type': 'application/json',
          
      }
  };
  const dates = await axios.get(`http://127.0.0.1:8000/api/getattendancedate/${subid}/${seaaionid}`);
  updateDate(dates)
  if(date.data){
    const thau = document.getElementById("attendance_block");
    const mainthau = document.getElementById("error_attendance");
    const thirddata = document.getElementById("fetch_student_block");
    
   const opt =  date.data.map(dat=>{
     console.log(dat.id);
      const aa = (<option value={dat.id}>{dat.attendance_date}</option>);
     return aa;


  })
  updateOption(opt);
  console.log(option);
  if(option){
    thau.style.display="flex";
    thirddata.style.display = "flex";
  }
  else{
    mainthau.style.display = "flex";
  }
  
  
  }
    
  }
  const LoadFirstdata=async ()=>{
    const config = {
      headers: {
          //'X-CSRFToken': Cookies.get('csrftoken'),
          'Accept': 'application/json',
          'Authorization': `JWT ${localStorage.getItem("access")}`,
          'Content-Type': 'application/json',
          
      }
  };
  const subjects = await axios.get("http://127.0.0.1:8000/api/viewsubject",config);
  const sessionyears = await axios.get("http://127.0.0.1:8000/api/viewsessionyear",config);
  const attendances = await axios.get("http://127.0.0.1:8000/api/getattendance",config);
  updateAttendance(attendances)
  updateSubject(subjects);
  updateSessionYear(sessionyears);
  }
  useEffect(()=>{
    LoadFirstdata();
  },[]);

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
              <h3 className="card-title">View Attendance</h3>
            </div>
            {/* /.card-header */}
            {/* form start */}
            <div className="card-body">
              <div className="form-group">
                <label>Subject </label>
                <select className="form-control" name="subject" id="subject">
                 {attendance.data?attendance.data.map(att=>(
                   subject.data?subject.data.map(sub=>(
                    sub.id===att.subject_id?<option id="sub" value={att.subject_id}>{sub.subject_name}</option>:null
                   )):null
                 )):<option>N/A</option>}
                      
                 
                  
                  
                </select>
              </div>
              <div className="form-group">
                <label>Session Year </label>
                <select className="form-control" name="session_year_id" id="session_year_id">
                 {attendance.data?attendance.data.map(att=>(
                   sessionyear.data?sessionyear.data.map(syr=>(
                     syr.id===att.session_year_id?<option id="sesionyr" value={att.session_year_id}>{syr.session_start_year} {syr.session_end_year}</option>:null
                   )):null
                 )):<option>N/A</option>}
                  
                  
                </select>
              </div>
              <div className="form-group">
                <button type="button" className="btn btn-primary btn-block" id="fetch_attendance" onClick={LoadSecondData}>Fetch Attendance Date</button>
              </div>
              <div className="form-group" id="attendance_block" style={{display: 'none'}}>
                <label>Attendance Date </label>
                <select className="form-control" name="attendance_date" id="attendance_date">
                  {option?option.map(op=>{
                    return op;
                    
                  }):<option>N/A</option>}
                </select>
              </div>
              <div className="form-group">
                <div className="alert alert-danger" id="error_attendance" style={{display: 'none'}}>
                </div>
              </div>
              <div className="form-group" id="fetch_student_block" style={{display: 'none'}}>
                <button type="button" onClick={LoadThirdData} className="btn btn-primary btn-block" id="fetch_student">Fetch Student Data</button>
              </div>
            </div>
            {/* /.card-body */}
            <div id="student_data" className="card-footer" style={{display : 'none'}}>
              <div className="table">
              <table className="table">
                </table>
                <tbody>
                  <tr>
                    <th>
                      Student Name
                    </th>
                    
                    <th>
                      Status
                    </th>
                  </tr>
                  <tr>
                    {attendancereport.data?attendancereport.data.map(attrp=>(
                      <tr>
                      <td>{student.data?student.data.map(std=>(
                        std.id===attrp.student_id?`${std.first_name} ${std.last_name}`:null
                      )):`N/A` } </td>
                      <td>{attrp.status===true?`Present`:`Absent`}</td>
                      
                      
                   </tr>
                    )):
                    <tr>
                  <td>N/A </td>
                  <td>N/A </td>
                  </tr>
                      }

                 </tr>
                </tbody>

              </div>
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

export default connect( mapStateToProps, { logout })(AdminViewAttendance);