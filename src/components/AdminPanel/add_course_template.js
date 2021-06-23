import React, { useState } from 'react';
import {Link,Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { logout } from '../../actions/auth';
import AdminBase from './base_template';
import Footer from './footer';


const AddCousrse = ({logout,isAuthenticated  })=>{
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
          
          <div className="card card-primary">
            <div className="card-header">
              <h3 className="card-title">Add Course</h3>
            </div>
            
            <form role="form" action="/add_course_save" method="post">
             
              <div className="card-body">
                <div className="form-group">
                  <label>Course Name </label>
                  <input type="text" className="form-control" name="course" placeholder="Enter Course" />
                </div>
                <div className="form-group">
                  
                  <div className="alert alert-danger" style={{marginTop: 10}}> message </div>
                  
                  <div className="alert alert-success" style={{marginTop: 10}}> message </div>
                  
                </div>
              </div>
              {/* /.card-body */}
              <div className="card-footer">
                <button type="submit" className="btn btn-primary btn-block">Add Course</button>
              </div>
            </form>
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

export default connect( mapStateToProps, { logout })(AddCousrse);