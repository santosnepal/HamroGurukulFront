import React, { useState,useEffect } from 'react';
import {Link,Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { logout } from '../../actions/auth';
import StudentBase from './base_template';
import Footer from './footer';
import store from '../../store';
import axios from 'axios';
const loadUserid=()=>{
  const  state=store.getState();
  return(state.auth.user.id);
 }
const StudentNotification = ({logout,isAuthenticated  })=>{
  const [notifications,updateNotification]= useState([]);
  const LoadData = async ()=>{
    const config ={
      headers:{
          'content-type':'application/json',
          'Authorization': `JWT ${localStorage.getItem("access")}`,
          'Accept':'application/json'
      }
  };
  const noti = await axios.get(`http://127.0.0.1:8000/api/getstudentnotification/${loadUserid()}`,config);
  updateNotification(noti);
  }
  useEffect(()=>{
    LoadData();
  },[])
return(
<div>
<div className="hold-transition sidebar-mini layout-fixed">
  <StudentBase/>
  </div>
  <div className="content-wrapper">
<div>
  
  <section className="content">
    <div className="container-fluid">
      <div className="row">
        <div className="col-12">
          <div className="card">
            <div className="card-header">
              <h3 className="card-title">All Notifications</h3>
              <div className="card-tools">
                <div className="input-group input-group-sm" style={{width: 150}}>
                  {/* <input type="text" name="table_search" className="form-control float-right" placeholder="Search" /> */}
                  <div className="input-group-append">
                    <button type="submit" className="btn btn-default"></button>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="card-body table-responsive p-0">
              
              <table className="table table-hover text-nowrap">
                <thead>
                  <tr>
                    <th>Notifications</th>
                    <th>Sent At</th>
                  </tr>
                </thead>
                <tbody><tr>
                  {notifications.data?notifications.data.map(noti=>(
                   < > 
                     <td>{noti.message}</td>
                    <td>{noti.created_at}</td>
                   </>
                  )):<tr><td>No Notification Avilable</td></tr>}
                    
                  </tr></tbody>
              </table>
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
 
);
}
const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated
});
export default connect( mapStateToProps, { logout })(StudentNotification);