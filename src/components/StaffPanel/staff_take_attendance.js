import React, { useState,useEffect} from 'react';
import Footer from './Footer';
import Base from './base_template';
import {Link,Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { logout } from '../../actions/auth';
import axios from 'axios';
import store from '../../store';
import {toast} from 'react-toastify';
const loadUserid=()=>{
  const  state=store.getState();
  return(state.auth.user.id);
 }
const TakeAttendance=({logout,isAuthenticated  })=>{
  const [subject,updatesubject] = useState([]);
  const [students,updateStudents] = useState([]);
  const [sessionyear,updateSessionYear] = useState([]);
  const [studentstatus,updateStudentSatus] = useState([]);
  const loadData=async ()=>{
    
    const config ={
      headers:{
          'content-type':'application/json',
          'Authorization': `JWT ${localStorage.getItem("access")}`,
          'Accept':'application/json'
      }
  };
  const student = await axios.get("http://127.0.0.1:8000/api/suser/3",config);
  const subject = await axios.get(`http://127.0.0.1:8000/api/viewsubject/${loadUserid()}`,config)
  const ssy = await axios.get("http://127.0.0.1:8000/api/viewsessionyear",config);
  updateStudents(student);
  updatesubject(subject);
  updateSessionYear(ssy);
  console.log(subject);
  }
  const fetchstudent=async ()=>{
    //const sub_id = document.getElementById("subject").value;
    document.getElementById("student_data").style.display="inline";
    const config ={
      headers:{
          'content-type':'application/json',
          'Authorization': `JWT ${localStorage.getItem("access")}`,
          'Accept':'application/json'
      }
  };
  const student = await axios.get("http://127.0.0.1:8000/api/suser/3",config);
  updateStudents(student);
  }
  const saveData= async ()=>{
    const config ={
      headers:{
          'content-type':'application/json',
          'Authorization': `JWT ${localStorage.getItem("access")}`,
          'Accept':'application/json'
      }
  };
  const subject_id = document.getElementById("subject").value;
  const session_year_id = document.getElementById("session_year").value;
  const body1 = JSON.stringify({subject_id,session_year_id});
  console.log(body1);
  const res1 = await axios.post("http://127.0.0.1:8000/api/addattendance",body1,config);
  if(res1.status===200){
    console.log(res1);
    let data =[]
    students.data.map(std=>(
     document.getElementById(`${std.id}`).checked?
     data.push({attendance_id:`${res1.data.id}`,student_id:`${std.id}`,status:true}):
     data.push({attendance_id:`${res1.data.id}`,student_id:`${std.id}`,status:false})
    ))
    
    
    data.map(d=>(
      axios.post("http://127.0.0.1:8000/api/addattendancereport",d,config)
    ))
    document.getElementById("student_data").style.display="none";
   toast.success("Attendance recorded successfully");

  }
  else{
    toast.error(`Couldn't apply Leave  please try again later`);
  }

 
  }
  useEffect(()=>{
    loadData();
  },[])
  
  
return (
  <div className="hold-transition sidebar-mini layout-fixed">
      
      <div className="hold-transition sidebar-mini  layout-fixed">
  <Base/>
</div>  
<div className="content-wrapper">
<div>
  
  <section className="content">
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-12">
          
          <div className="card card-primary">
            <div className="card-header">
              <h3 className="card-title">Take Attendance</h3>
            </div>
            
            <div className="card-body">
              <div className="form-group">
                <label>Subject </label>
                <select className="form-control" name="subject" id="subject">
                  {subject.data?subject.data.map(sub=>(
                    <option value={sub.id}>{sub.subject_name}</option>
                  )):<option value=""> No Subject Avilable</option> }
                  
                  
                </select>
              </div>
              <div className="form-group">
                <label>Session Year</label>
                <select className="form-control" name="session_year" id="session_year">
                 {sessionyear.data?sessionyear.data.map(syr=>(
                   <option value={syr.id}>{syr.session_start_year} to {syr.session_end_year}</option>
                 )):<option value="">No Seesion year Avilable</option>}
                  
                  
                </select>
              </div>
              <div className="form-group">
               
                
              </div>
            </div>
            
            <div className="card-footer">
              <button type="button" className="btn btn-primary btn-block" onClick={fetchstudent} id="fetch_student">Fetch Student</button>
            </div>
            <div id="student_data" style={{display:"none"}} className="card-footer">
            
              <div className="form-group">
              <table className="table">
                    <tbody>
                      <tr>
                        <th>Student Name</th>
                        <th>Status</th>
                      </tr>
                    </tbody>
              
                {students.data?students.data.map(std=>(
                 
                  <tr>
                    <td>{std.first_name} {std.last_name}</td>
                    <td><div className="checkbox">
                    <input type="checkbox" id={std.id} name="present" />
                    
                    <label for={std.id}>Present</label>
                    </div>
                    </td>
                  </tr>
                  
                )):<p>No student data found</p>}
                </table>
                <div className="card-footer">
              <button type="button" className="btn btn-primary btn-block" onClick={saveData} id="save_attendance">Save Attendance</button>
            </div>
              </div>
            </div>
          </div>
         
        </div>
      </div>
    </div>
  </section>
  
  
</div>
</div>
    
<Footer/>
  </div>
 


);
}
const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated
});
export default connect( mapStateToProps, { logout })(TakeAttendance);