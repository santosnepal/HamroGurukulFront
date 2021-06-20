import React, { useState } from 'react';
import Footer from './Footer';
import {Link,Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { logout } from '../../actions/auth';
const FeedBack=({logout,isAuthenticated  })=>{
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

<a href className="brand-link">
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
 Feedback Message
  <section className="content">
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-12">
          
          <div className="card card-primary">
            <div className="card-header">
              <h3 className="card-title">Leave a Feedback Message</h3>
            </div>
            
            <form action="{% url 'staff_feedback_save' %}" method="post">
              <div className="card-body">
                
                <div className="form-group">
                  <label>Feedback Message</label>
                  <textarea className="form-control" rows={6} name="feedback_msg" defaultValue={""} />
                </div>
                <div className="form-group">
                  
                  <div className="alert alert-danger" style={{marginTop: 10}}> message </div>
                 
                  <div className="alert alert-success" style={{marginTop: 10}}> message </div>
                  
                </div>
              </div>
              
              <div className="card-footer">
                <button type="submit" className="btn btn-primary btn-block" id="fetch_student">Leave a Feedback Message</button>
              </div>
            </form>
          </div>
          
          <div className="card card-primary">
            <div className="card-header">
              <h3 className="card-title">Feedback History</h3>
            </div>
            <div className="table">
             
              <table className="table">
                <tbody><tr>
                    <th>ID</th>
                    <th>Feedback Message</th>
                    <th>Feedback Reply</th>
                  </tr><tr>
                    <td> row.id </td>
                    <td> row.feedback </td>
                    <td> row.feedback_reply </td>
                  </tr></tbody></table>
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

);
}
const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated
});
export default connect( mapStateToProps, { logout })(FeedBack);