import React, { useEffect,useState } from 'react';
import {Link,Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { logout } from '../../actions/auth';
import Cookies from 'js-cookie';
import AdminBase from './base_template';
import Footer from './footer';
import axios from 'axios';
import { toast } from 'react-toastify';
import CSRFToken from '../CSRFToken';
import $ from 'jquery';




const AddCousrse = ({logout,isAuthenticated  })=>{
  const [formData, setFormData] = useState({
    course_name: '',
   });
   const {course_name} = formData;
   const onChange = e => setFormData({ ...formData, [e.target.name]: e.target.value });
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
  const body=JSON.stringify({course_name});
  const res = await axios.post(`http://localhost:8000/api/addcourses`,body,config);
  
  // console.log(res);
  if(res.status===200){

    toast.success(`New Course ${course_name} added sucessfully`);
  }
  else{

    toast.error(`Couldn't add ${course_name} please try again later`);
  }

};
  if(isAuthenticated ){
    console.log("chor haina ma ");
  } 
  else{
    
    return <Redirect to="/"/>
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
          
          <div className="card card-primary">
            <div className="card-header">
              <h3 className="card-title">Add Course</h3>
            </div>
            
            <form  onSubmit={e => onSubmit(e)}>
            {/* <input type="hidden" name="_csrf" value={Cookie.load('XSRF-TOKEN')}/> */}
            {/* <CSRFToken /> */}
              <div className="card-body">
                <div className="form-group">
                  <label>Course Name </label>
                  <input 
                   type="text" 
                   className="form-control" 
                   name="course_name" 
                   placeholder="Enter Course" 
                   value={course_name}
                   onChange={e => onChange(e)}
                   required
                    />
                </div>               
              </div>
              <div className="card-footer">
                <button type="submit" className="btn btn-primary btn-block" >Add Course</button>
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

export default connect( mapStateToProps, { logout })(AddCousrse);