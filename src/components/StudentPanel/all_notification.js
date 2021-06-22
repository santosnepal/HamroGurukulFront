import React, { useState } from 'react';
import {Link,Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { logout } from '../../actions/auth';
import StudentBase from './base_template';
import Footer from './footer';
const StudentNotification = ({logout,isAuthenticated  })=>{
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
<div className="hold-transition sidebar-mini layout-fixed">
  <StudentBase/>
  </div>
  <div className="content-wrapper">
  <section className="content">
    <div className="container-fluid">
      <div className="row">
        <div className="col-12">
          <div className="card">
            <div className="card-header">
              <h3 className="card-title">All Notifications</h3>
              <div className="card-tools">
                <div className="input-group input-group-sm" style={{width: 150}}>
                  <input type="text" name="table_search" className="form-control float-right" placeholder="Search" />
                  <div className="input-group-append">
                    <button type="submit" className="btn btn-default"><i className="fas fa-search" /></button>
                  </div>
                </div>
              </div>
            </div>
            {/* /.card-header */}
            <div className="card-body table-responsive p-0">
              {'{'}% for notification in notifications %{'}'}
              {'{'}% endfor %{'}'}
              <table className="table table-hover text-nowrap">
                <thead>
                  <tr>
                    <th>Notifications</th>
                  </tr>
                </thead>
                <tbody><tr>
                    <td>{'{'}{'{'} notification.message {'}'}{'}'}</td>
                  </tr></tbody>
              </table>
            </div>
            {/* /.card-body */}
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
export default connect( mapStateToProps, { logout })(StudentNotification);