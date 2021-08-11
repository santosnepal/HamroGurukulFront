import React, { useState } from 'react';
import {Link,Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { logout } from '../../actions/auth';
import AdminBase from './base_template';
import Footer from './footer';
import axios from 'axios';
import { useEffect } from 'react';
import { toast } from 'react-toastify';


const AddSubject = ({logout,isAuthenticated  })=>{
  const [course,setCourse] = useState([]);
  const [staff,setStaff] = useState([]);
  const [formData,setFormData] = useState({
    course_id:'',
    staff_id:'',
    subject_name:''
  })
  const {course_id,staff_id,subject_name} = formData;
  const onChange = e => setFormData({...formData, [e.target.name]: e.target.value });
  const loadData=async ()=>{
    const config = {
      headers: {
          //'X-CSRFToken': Cookies.get('csrftoken'),
          'Accept': 'application/json',
          'Authorization': `JWT ${localStorage.getItem("access")}`,
          'Content-Type': 'application/json',
          
      }
  };
  const courses = await axios.get("http://127.0.0.1:8000/api/viewcourses",config);
  const staffs = await axios.get("http://127.0.0.1:8000/api/suser/2",config);
  setCourse(courses);
  setStaff(staffs);
  }
  useEffect(()=>{
    loadData();
  },[])

  const onSubmit = async  e => {
    
    e.preventDefault();

  const config = {
    headers: {
        //'X-CSRFToken': Cookies.get('csrftoken'),
        'Accept': 'application/json',
        'Authorization': `JWT ${localStorage.getItem("access")}`,
        'Content-Type': 'application/json',
        
    }
};

  const body=JSON.stringify({...formData});
  toast.success(`${body}`);
  console.log(body);
  const res = await axios.post(`http://localhost:8000/api/addsubject`,body,config);
  
  // console.log(res);
  if(res.status===200){
    
    //toast.success(`New Subject ${subject_name} added sucessfully`);
    toast.success(`Subject Added succesfully`);
  }
  else{

    toast.error(`Couldn't add subject please try again later`);
  }

};
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
              <h3 className="card-title">Add Subject</h3>
            </div>
            {/* /.card-header */}
            {/* form start */}
            <form  onSubmit={e => onSubmit(e)} >
              
              <div className="card-body">
                <div className="form-group">
                  <label>Subject Name </label>
                  <input
                    type="text" 
                    className="form-control"
                    name="subject_name" 
                    placeholder="Enter Subject"
                    value={subject_name}
                    onChange={e => onChange(e)} 
                    required/>
                </div>
                <div className="form-group">
                  <label>Course </label>
                  <select 
                  className="form-control" 
                  name="course_id"
                  onChange={(e)=>{
                    console.log(e.target.value ,e.target.name);
                    setFormData({...formData, [e.target.name]: e.target.value });
                    console.log(formData);
                  }}
                  //onChange={e => onChange(e)} 
                  required
                  >
                    <option>
                      Select Course name
                    </option>
                   { course.data?course.data.map(coursea =>(
                     <option 
                     
                     value={coursea.id}
                     > 
                     {coursea.course_name} 
                     
                     </option>
                   )):
                    <option>
                      N/A
                    </option>
                    }
                  </select>
                </div>
                <div className="form-group">
                  <label>Staff</label>
                  <select className="form-control"
                   name="staff_id"
                   onChange={(e)=>{
                    console.log(e.target.value ,e.target.name);
                    setFormData({...formData, [e.target.name]: e.target.value });
                    console.log(formData);
                  }}
                 // onChange={e => onChange(e)}
                   required
                   >
                     <option>
                       Select Staff
                     </option>
                    {staff.data?staff.data.map(staffa=>(
                    <option 
                       name="staff_id"
                       value={staffa.id}
                      >
                       {`${staffa.first_name} ${staffa.last_name}`} 
                       </option>
                    )):
                    <option>
                      N/A
                    </option>   
                  }                
                  </select>
                </div>
                
              </div>
              
              <div className="card-footer">
                <button type="submit" className="btn btn-primary btn-block">Add Subject</button>
              </div>
            </form>
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

export default connect( mapStateToProps, { logout })(AddSubject);