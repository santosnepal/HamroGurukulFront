import React, { useState,useEffect } from 'react';
import {Link,Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { logout } from '../../actions/auth';
import AdminBase from './base_template';
import Footer from './footer';
import { signup } from '../../actions/auth';
import axios from 'axios';

const AddStudent = ({signup,isAuthenticated  })=>{
  const [accountCreated, setAccountCreated] = useState(false);
  const [courses,updateCourses] = useState([]);
  const [sessionyear,updateSessionyear] = useState([]);
  const [formData, setFormData] = useState({
      first_name: '',
      last_name: '',
      email: '',
      password: '',
      re_password: '',
      user_types:'',
      gender :'',
      course:''
     
  });

  const { first_name, last_name, email, password, re_password,user_types ,gender,course} = formData;

  const onChange = e => setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = e => {
      e.preventDefault();
      console.log(first_name, last_name, email, password, re_password,user_types ,gender)
      if (password === re_password) {
          signup(first_name, last_name, email, 'P@$$w0rd123', 'P@$$w0rd123','3',gender,course);
          setAccountCreated(true);
      }
  };
const LoadData =async ()=>{
  const config ={
    headers:{
        'content-type':'application/json',
        'Authorization': `JWT ${localStorage.getItem("access")}`,
        'Accept':'application/json'
    }
};
const cours = await axios.get("http://127.0.0.1:8000/api/viewcourses",config);
const syear = await axios.get("http://127.0.0.1:8000/api/viewsessionyear",config);
updateCourses(cours);
updateSessionyear(syear);
}
useEffect(() => {
  console.log("Hey i am calling");
 LoadData();
 console.log(courses)
}, []);

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
              <h2 className="card-title">Add a new Student</h2>
            </div>
            {/* /.card-header */}
            {/* form start */}
            <div className='container mt-5'>
            
            <p>Create New  Account For your student</p>
             
            <form onSubmit={e => onSubmit(e)}>
                <div className='form-group'>
                    <input
                        className='form-control'
                        type='text'
                        placeholder='First Name*'
                        name='first_name'
                        value={first_name}
                        onChange={e => onChange(e)}
                        required
                    />
                </div>
                <div className='form-group'>
                    <input
                        className='form-control'
                        type='text'
                        placeholder='Last Name*'
                        name='last_name'
                        value={last_name}
                        onChange={e => onChange(e)}
                        required
                    />
                </div>
                <div className='form-group'>
                    <input
                        className='form-control'
                        type='email'
                        placeholder='Email*'
                        name='email'
                        value={email}
                        onChange={e => onChange(e)}
                        required
                    />
               </div>
               <div className='form-group'>
               <select className='form-control' id = 'course'
                 name="course"
                   onChange={(e)=>{
                    console.log(e.target.value ,e.target.name);
                    setFormData({...formData, [e.target.name]: e.target.value });
                    console.log(formData);
                  }}
                 >
                   <option>Select Courses</option>
                   {courses.data?courses.data.map(csr=>(
                     <option value={csr.id}>{csr.course_name}</option>
                   )):<option>N/A</option>}
                 </select>
                </div>
               
               <div className='form-group'>
                 <select className='form-control' id = 'gender'
                 name="gender"
                   onChange={(e)=>{
                    console.log(e.target.value ,e.target.name);
                    setFormData({...formData, [e.target.name]: e.target.value });
                    console.log(formData);
                  }}
                 >
                   <option>Select Gender</option>
                   <option  value="0">M</option>
                   <option  value ="1">F</option>
                 </select>
               </div>
                <button className='btn btn-primary' type='submit'>Register</button>
            </form>
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

export default connect( mapStateToProps, { signup  })(AddStudent);