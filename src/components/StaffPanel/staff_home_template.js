import React, { useState } from 'react';
import Footer from './Footer';
import {Link,Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { logout } from '../../actions/auth';
const StaffHome = ({logout,isAuthenticated  })=>{
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

return (
 
  <div>
  <div className="hold-transition sidebar-mini layout-fixed">
      
  <meta charSet="utf-8" />
  <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
  {/* Tell the browser to be responsive to screen width */}
  <meta name="viewport" content="width=device-width, initial-scale=1" />
 
  <link href="https://fonts.googleapis.com/css?family=Source+Sans+Pro:300,400,400i,700" rel="stylesheet" />
  
  <div className="wrapper">
    
    <nav className="main-header navbar navbar-expand navbar-white navbar-light">
     
      <ul className="navbar-nav">
        <li className="nav-item">
          <a className="nav-link" data-widget="pushmenu" href="#"><i className="fas fa-bars" /></a>
        </li>
      </ul>
      <h4 style={{marginLeft: 10, marginTop: 5}}>Gurukul | Staff Panel</h4>
      <ul className="navbar-nav ml-auto">
        
        <li className="nav-item">
          <a className="nav-link" href="/" onClick={logout_user} >
            Logout
          </a>
        </li>
      </ul>
     
    </nav>
    
    <aside className="main-sidebar sidebar-dark-primary elevation-4">

<a href >
  <strong>logo</strong>
  <span className="brand-text font-weight-light">AdminLTE 3</span>
</a>

<div className="sidebar">
  
  <div className="user-panel mt-3 pb-3 mb-3 d-flex">
    <div className="image">
      <strong>img</strong>
    </div>
    <div className="info">
      <a href="{% url 'staff_profile' %}" className="d-block">User Name</a>
    </div>
  </div>
 
  <nav className="mt-2">
    <ul className="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu" data-accordion="false">
      
      <li className="nav-item" >
      
        <a href="#" className="nav-link " >
          <i className="nav-icon fas fa-th" />
          <p>
          <Link  to="/staffhome" role="button">Home</Link> 
          </p>
        </a>
        
      </li>
      <li className="nav-item">
        
        <a href="#" className="nav-link " >
          <i className="nav-icon fas fa-th"   />
          <p>
           <Link to="/safftakeattendance"> Take Attendance </Link>
          </p>
        </a>
      </li>
      <li className="nav-item">
       
        <a href="#" className="nav-link ">
          <i className="nav-icon fas fa-th" />
          <p>
            <Link to="/staffupdateattendance"> View Update Attendance </Link>
          </p>
        </a>
      </li>
      <li className="nav-item">
        
        <a href="#" className="nav-link ">
          <i className="nav-icon fas fa-th" />
          <p>
           <Link to="staffapplyleave"> Apply Leave </Link>
          </p>
        </a>
      </li>
      <li className="nav-item">
        
        <a href="#" className="nav-link">
          <i className="nav-icon fas fa-th" />
          <p>
           <Link to="/stafffeedback"> Feedback </Link>
           </p>
        </a>
      </li>
      <li className="nav-item">
        
        <a href="#" className="nav-link ">
          <i className="nav-icon fas fa-th" />
          <p>
           <Link to='staffaddresult'> Add Result</Link>
          </p>
        </a>
      </li>
      
      <li className="nav-item">
        
        <a href="#" className="nav-link ">
          <i className="nav-icon fas fa-th" />
          <p>
          <Link  to='/staffeditresult' role="button">Edit Result</Link> 
             
          </p>
        </a>
      </li>
      
      
      <li className="nav-item">
        
        <a href="#" className="nav-link ">
          <i className="nav-icon fas fa-th" />
          <p>
           <Link to="/staffnotification"> Notifications </Link>
          </p>
        </a>
      </li>
    </ul>
  </nav>
  
</div>

</aside>
    
<div className="content-wrapper">
<div>
  <section className="content">
    <div className="container-fluid">
      <div className="row">
        <div className="col-lg-3 col-6">
          
          <div className="small-box bg-info">
            <div className="inner">
              <h3> students_count</h3>
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
              <p>Total Subjects</p>
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
  
</div>
  
</div>

);
}
const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated
});
export default connect( mapStateToProps, { logout })(StaffHome);