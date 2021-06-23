import React, { useState } from 'react';
import {Link,Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { logout } from '../../actions/auth';
import AdminBase from './base_template';
import Footer from './footer';


const ManageSession = ({logout,isAuthenticated  })=>{
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
              <h3 className="card-title">Add Session Year</h3>
            </div>
           
            <form role="form" action="#" method="post">
              
              <div className="card-body">
                <div className="form-group">
                  <label>Session Start Year </label>
                  <input type="date" className="form-control" name="session_start" placeholder="Enter Session Start Year" />
                </div>
                <div className="form-group">
                  <label>Session End Year </label>
                  <input type="date" className="form-control" name="session_end" placeholder="Enter Session End Year" />
                </div>
                <div className="form-group">
                  
                  <div className="alert alert-danger" style={{marginTop: 10}}> message</div>
                  
                  <div className="alert alert-success" style={{marginTop: 10}}> message</div>
                  
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