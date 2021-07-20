import React, { useState } from 'react';
import {Link,Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { logout } from '../../actions/auth';
import AdminBase from './base_template';
import Footer from './footer';
import axios from 'axios';
import { toast } from 'react-toastify';


const ManageSession = ({logout,isAuthenticated  })=>{
  const [formData,setFormData] = useState({
    session_start_year:'',
    session_end_year:''
  });
  const {session_start_year,session_end_year} = formData;
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
  const body=JSON.stringify({...formData});
  const res = await axios.post(`http://localhost:8000/api/addsessionyear`,body,config);
  
  // console.log(res);
  if(res.status===200){

    toast.success(`${session_start_year} to ${session_end_year} has been added successfully`);
  }
  else{

    toast.error(`Couldn't add ${session_start_year} to ${session_end_year}  please try again later`);
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
         
          <div className="card card-primary">
            <div className="card-header">
              <h3 className="card-title">Add Session Year</h3>
            </div>
           
            <form  onSubmit={e => onSubmit(e)}>
              
              <div className="card-body">
                <div className="form-group">
                  <label>Session Start Year </label>
                  <input 
                  type="date" 
                  className="form-control" 
                  name="session_start_year"
                  placeholder="Enter Session Start Year" 
                  onChange={e => onChange(e)}
                  required/>
                </div>
                <div className="form-group">
                  <label>Session End Year </label>
                  <input 
                  type="date" 
                  className="form-control"
                  name="session_end_year"
                  placeholder="Enter Session End Year"
                  onChange={e => onChange(e)}
                  required />
                </div>
                
              </div>
              
              <div className="card-footer">
                <button type="submit" className="btn btn-primary btn-block">Add Session Year</button>
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

export default connect( mapStateToProps, { logout })(ManageSession);