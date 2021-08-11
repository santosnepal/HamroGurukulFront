import React, { useState,useEffect } from 'react';
import {Link,Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { logout } from '../../actions/auth';
import AdminBase from './base_template';
import Footer from './footer';
import { signup } from '../../actions/auth';
import axios from 'axios';
import {toast} from 'react-toastify';

const EnrollStudent = ({signup,isAuthenticated  })=>{
  
  const [courses,updateCourses] = useState([]);
  
  const [student,updateStudent] = useState([]);
  
  
const LoadData =async ()=>{
  const config ={
    headers:{
        'content-type':'application/json',
        'Authorization': `JWT ${localStorage.getItem("access")}`,
        'Accept':'application/json'
    }
};
const cours = await axios.get("http://127.0.0.1:8000/api/viewcourses",config);

const stds = await axios.get("http://127.0.0.1:8000/api/suser/3",config);


updateCourses(cours);

updateStudent(stds);
console.log(stds);



}
useEffect(() => {
  console.log("Hey i am calling");
 LoadData();
 //filterout();
 
}, []);
const register = async()=>{
  const config ={
    headers:{
        'content-type':'application/json',
        'Authorization': `JWT ${localStorage.getItem("access")}`,
        'Accept':'application/json'
    }
};
const stdid=+document.getElementById("student_id").value;
console.log(typeof(stdid));
const cid = document.getElementById("course_name").value;
let who = student.data.filter(fee=>{
  console.log(fee);
  if(stdid===fee.id){
    return fee;
  }
})
who=who[0];
console.log(who);
let {course,email,first_name,gender,groups,id,is_active,is_staff,is_superuser,last_login,last_name,password,user_permissions,user_types} = who;
course=cid;
const body = JSON.stringify({course,email,first_name,gender,groups,id,is_active,is_staff,is_superuser,last_login,last_name,password,user_permissions,user_types});
        const res = await axios.put(`http://127.0.0.1:8000/api/edituser/${id}`,body,config);
        if(res.status===200){
          //showModel = false;
          console.log(res.data);
          toast.success(`Student enroled successfully`);
          
          LoadData();
          
          //showModel=false;
        }
        else{
      
          toast.error(` Couln't enroll student`);
        }
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
        <div className="col-md-12">
          {/* general form elements */}
          <div className="card card-primary">
            <div className="card-header">
              <h2 className="card-title">Enroll Student</h2>
             
            </div>
            {/* /.card-header */}
            {/* form start */}
            <div className='container mt-5'>
            
           <div className="form-group">
           
           </div>
             
            <div  id = "main"  className='form-group'>
              
                <div className='form-group'>
                    <p>Student Name</p>
                    <select className='form-control'
                            name="student_name"
                            id = "student_id"
                            >
                            {student.data?student.data.map(std=>(
                              std.course===null?<option value={std.id}>{std.first_name} {std.last_name}</option>:null
                            )):null}
                            </select>
                </div>
            <div className='form-group'>
                <p>Course Name</p>
                 <select className='form-control'
                 name="course_id"
                 id= 'course_name'
                 
                 >
                   
                   {courses.data?(courses.data.map(csr=>(
                     <option  value={csr.id}>{csr.course_name}</option>
                   )))
                   :<option>N/A</option>}
                 </select>
               </div>
            
                <button className='btn btn-primary' onClick={register} >Register</button>
            </div>
            <p className='mt-3'>
                
            </p>
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
}
const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated
});

export default connect( mapStateToProps, { signup  })(EnrollStudent);

//#region 

//#endregion