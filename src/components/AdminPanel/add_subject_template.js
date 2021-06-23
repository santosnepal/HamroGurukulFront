import React, { useState } from 'react';
import {Link,Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { logout } from '../../actions/auth';
import AdminBase from './base_template';
import Footer from './footer';


const AddSubject = ({logout,isAuthenticated  })=>{
  const [redirect, setRedirect] = useState(false);
  const logout_user = () => {
      logout();
      setRedirect(true);
      
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
          {/* general form elements */}
          <div className="card card-primary">
            <div className="card-header">
              <h3 className="card-title">Add Subject</h3>
            </div>
            {/* /.card-header */}
            {/* form start */}
            <form >
              
              <div className="card-body">
                <div className="form-group">
                  <label>Subject Name </label>
                  <input type="text" className="form-control" name="subject_name" placeholder="Enter Subject" />
                </div>
                <div className="form-group">
                  <label>Course </label>
                  <select className="form-control" name="course">
                   
                    <option value="#"> course_name </option>
                   
                  </select>
                </div>
                <div className="form-group">
                  <label>Staff</label>
                  <select className="form-control" name="staff">
                    
                    <option value="#"> first_name   last_name </option>
                   
                  </select>
                </div>
                <div className="form-group">
                  
                  <div className="alert alert-danger" style={{marginTop: 10}}> message </div>
                 
                  <div className="alert alert-success" style={{marginTop: 10}}> message </div>
                  
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