import React, { useState,useEffect } from 'react';
import Footer from './Footer';
import Base from './base_template';
import {Link,Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { logout } from '../../actions/auth';
import store from '../../store';
import axios from 'axios';
const loadUserid=()=>{
  const  state=store.getState();
  return(state.auth.user.id);
 }
const StaffHome = ({logout,isAuthenticated  })=>{
  const loadData=async ()=>{
    const stores = store.getState()
    updateWho(stores);
    const config ={
      headers:{
          'content-type':'application/json',
          'Authorization': `JWT ${localStorage.getItem("access")}`,
          'Accept':'application/json'
      }
  };
  const students = await axios.get("http://127.0.0.1:8000/api/suser/3",config);
  const subject = await axios.get(`http://127.0.0.1:8000/api/viewsubject/${loadUserid()}`,config)
  updateStudents(students.data.length);
  updatesubject(subject.data.length);
  console.log(subject);
  }
  useEffect(async ()=>{
   
    loadData();
    console.log(who);
    
  },[])
  
  const [redirect, setRedirect] = useState(false);
  const [subject,updatesubject] = useState([]);
  const [students,updateStudents] = useState([]);
  const [who,updateWho] = useState([]);

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
 

return (
 
  <div>
  <div className="hold-transition sidebar-mini  layout-fixed">
  <Base/>
</div>
<div className="content-wrapper">
<div>
  <section className="content">
    <div className="container-fluid">
      <div className="row">
        <div className="col-lg-3 col-6">
          
          <div className="small-box bg-info">
            <div className="inner">
              <h3> {students}</h3>
              <p>Student Under me</p>
            </div>
            <div className="icon">
              <i className="ion ion-stats-bars" />
            </div>
            <a href="{% url 'staff_take_attendance' %}" className="small-box-footer">More info <i className="fas fa-arrow-circle-right" /></a>
          </div>
        </div>
        
        <div className="col-lg-3 col-6">
          
          <div className="small-box bg-success">
            <div className="inner">
              <h3> attendance_count</h3>
              <p>Total Attendance Taken</p>
            </div>
            <div className="icon">
              <i className="ion ion-stats-bars" />
            </div>
            <a href="{% url 'staff_take_attendance' %}" className="small-box-footer">More info <i className="fas fa-arrow-circle-right" /></a>
          </div>
        </div>
        
        <div className="col-lg-3 col-6">
          
          <div className="small-box bg-warning">
            <div className="inner">
              <h3> leave_count </h3>
              <p>Total Leave Taken</p>
            </div>
            <div className="icon">
              <i className="ion ion-stats-bars" />
            </div>
            <a href="{% url 'staff_apply_leave' %}" className="small-box-footer">More info <i className="fas fa-arrow-circle-right" /></a>
          </div>
        </div>
        
        <div className="col-lg-3 col-6">
         
          <div className="small-box bg-danger">
            <div className="inner">
              <h3> subject_count</h3>
              <p>{subject}</p>
            </div>
            <div className="icon">
              <i className="ion ion-stats-bars" />
            </div>
            <a href="#" className="small-box-footer">&nbsp;<i className="fas fa-arrow-circle-right" /></a>
          </div>
        </div>
        
      </div>
      <div className="row">
        <div className="col-lg-6">
          <div className="card card-danger">
            <div className="card-header">
              <h3 className="card-title">Attendance VS Leave Chart</h3>
              <div className="card-tools">
                <button type="button" className="btn btn-tool" data-card-widget="collapse"><i className="fas fa-minus" />
                </button>
                <button type="button" className="btn btn-tool" data-card-widget="remove"><i className="fas fa-times" /></button>
              </div>
            </div>
            <div className="card-body">
              <canvas id="pieChart" style={{minHeight: 250, height: 250, maxHeight: 250, maxWidth: '100%'}} />
            </div>
            
          </div>
        </div>
        <div className="col-lg-6">
          <div className="card card-success">
            <div className="card-header">
              <h3 className="card-title">Attend Subject</h3>
              <div className="card-tools">
                <button type="button" className="btn btn-tool" data-card-widget="collapse"><i className="fas fa-minus" />
                </button>
                <button type="button" className="btn btn-tool" data-card-widget="remove"><i className="fas fa-times" /></button>
              </div>
            </div>
            <div className="card-body">
              <div className="chart">
                <canvas id="barChart" style={{minHeight: 250, height: 250, maxHeight: 250, maxWidth: '100%'}} />
              </div>
            </div>
            
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-lg-12">
          <div className="card card-info">
            <div className="card-header">
              <h3 className="card-title">Student Attendance Data</h3>
              <div className="card-tools">
                <button type="button" className="btn btn-tool" data-card-widget="collapse"><i className="fas fa-minus" />
                </button>
                <button type="button" className="btn btn-tool" data-card-widget="remove"><i className="fas fa-times" /></button>
              </div>
            </div>
            <div className="card-body">
              <div className="chart">
                <canvas id="barChart2" style={{minHeight: 250, height: 250, maxHeight: 250, maxWidth: '100%'}} />
              </div>
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
export default connect( mapStateToProps, { logout })(StaffHome);