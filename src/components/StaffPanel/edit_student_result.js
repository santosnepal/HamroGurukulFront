import React, { useState,useEffect } from 'react';
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
const EditStudent=({logout,isAuthenticated  })=>{
  let finalstda =[];
  const [subject,updatesubject] = useState([]);
  const [students,updateStudents] = useState([]);
  const [sessionyear,updateSessionYear] = useState([]);
  const [addedstudents,updateAddedStudents] = useState([])

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
    const sub_id = document.getElementById("subject").value;
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
  console.log(`http://127.0.0.1:8000/api/getresult/${sub_id}`);
  const res = await axios.get(`http://127.0.0.1:8000/api/getresult/${sub_id}`,config);
  console.log(res);
  updateAddedStudents(res);
  
  let x=0;
  console.log(res.data);
   finalstda = res.data.length!==0?res.data.map(ads=>(
     ads.student_id
   )):students
  console.log(finalstda);
  }
  const updateResult=async (sts,emark,amark)=>{
    // sts.subject_assignment_marks=+amark;
    // sts.subject_exam_marks=+emark;
    console.log(typeof(emark),typeof(amark));
    console.log(sts);
    if(emark!==""){
      sts.subject_exam_marks=+emark;
    }
    if(amark!==""){
      sts.subject_assignment_marks=+amark;
    }
    
    const config ={
      headers:{
          'content-type':'application/json',
          'Authorization': `JWT ${localStorage.getItem("access")}`,
          'Accept':'application/json'
      }
  };
  const res = await axios.put(`http://127.0.0.1:8000/api/editresult/${sts.id}`,sts,config);
  if(res.status===200){
    toast.success(`Result updated successfully`);
    console.log(res);
    fetchstudent();
    document.getElementById(`${sts.student_id}_exam`).value="";
    document.getElementById(`${sts.student_id}_ass`).value="";
  }

  }
  useEffect(()=>{
    loadData();
  },[])
return(
  <div >
      
  <div className="hold-transition sidebar-mini  layout-fixed">
<Base/>
</div>

    
<div className="content-wrapper">
<div>


<section className="content">
<div className="container-fluid">
  <div className="row">
    <div className="col-md-12">
      
      <div >
        
        <div className="card card-primary">
          <div className="card-header">
            <h3 className="card-title">Edit Results</h3>
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
            <button type="button" className="btn btn-primary btn-block" onClick={fetchstudent} id="fetch_student">Fetch Student Marks</button>
          </div>
          <div id="student_data" style={{display:"none"}} className="card-footer">
        
          <div className="form-group">
          <table className="table">
                <tbody>
                  <tr>
                    <th>Student Name</th>
                    <th>Exam Mark </th>
                    <th>Assignment Mark</th>
                    <th>Action</th>
                  </tr>
                </tbody>
          
            {students.data?students.data.map(std=>(
              
             
              addedstudents.data?addedstudents.data.map(ads=>(
                ads.student_id===std.id?
                <tr id={`${std.id}_row`}>
                <td>{std.first_name} {std.last_name}</td>
                <td>
                 80/<input type = "number"  id={`${std.id}_exam`} placeholder={`${ads.subject_exam_marks}`}></input>
                </td>
                <td>
                  20/<input type ="number" id= {`${std.id}_ass`} placeholder={`${ads.subject_assignment_marks}`}></input>
                </td>
                <td>
                <button className="btn" id="description" onClick={()=>updateResult(ads,document.getElementById(`${std.id}_exam`).value,document.getElementById(`${std.id}_ass`).value)} >update</button>
                </td>
              </tr>:null
              )):<tr><p>No student Datas found</p></tr>
              
            )): <p>No student data found</p>}
            </table>
            <div className="card-footer">
          
        </div>
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
  



); } 
const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated
});
export default connect( mapStateToProps, { logout })(EditStudent);
