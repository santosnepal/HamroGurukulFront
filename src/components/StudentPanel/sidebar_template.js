import React from 'react';
import {Link,Redirect } from 'react-router-dom';
import store from '../../store';
const loadUserName=()=>{
 const  state=store.getState();
 return(`${state.auth.user.first_name} ${state.auth.user.last_name}`);
}

const StudentSideBar=()=>{
  return(
<div>
  <aside className="main-sidebar sidebar-dark-primary elevation-4">
    
    <a href className="brand-link">
      
      <span className="brand-text font-weight-light">AdminLTE 3</span>
    </a>
    
    <div className="sidebar">
      
      <div className="user-panel mt-3 pb-3 mb-3 d-flex">
        
        <div className="info">
          <a href="#" className="d-block">{loadUserName()} </a>
        </div>
      </div>
      
      <nav className="mt-2">
        <ul className="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu" data-accordion="false">
         
          <li className="nav-item">
            
            <Link  to="/studenthome" className="nav-link">
              <i className="nav-icon fas fa-th" />
              <p>
                Home
              </p>
            </Link>
          </li>
          <li className="nav-item">
           
            <Link to="/studentviewattendance" className="nav-link ">
              <i className="nav-icon fas fa-th" />
              <p>
                View All  Attendance
              </p>
            </Link>
          </li>
          <li className="nav-item">
           
            <Link to="/studentviewattendancedata" className="nav-link ">
              <i className="nav-icon fas fa-th" />
              <p>
                Search Attendance
              </p>
            </Link>
          </li>
          <li className="nav-item">
             
            <Link to="/studentapplyleave" className="nav-link ">
              <i className="nav-icon fas fa-th" />
              <p>
                Apply for Leave
              </p>
            </Link>
          </li>
          <li className="nav-item">
             
            <Link to="/studentfeedback" className="nav-link ">
              <i className="nav-icon fas fa-th" />
              <p>
                Feedback Message
              </p>
            </Link>
          </li>
          <li className="nav-item">
               
            <Link to="/studentviewresult" className="nav-link ">
              <i className="nav-icon fas fa-th" />
              <p>
                Grade Card
              </p>
            </Link>
          </li>
          <li className="nav-item">
               
            <Link to="/studentviewnotification" className="nav-link ">
              <i className="nav-icon fas fa-th" />
              <p>
                Notifications
              </p>
            </Link>
          </li>
        </ul>
      </nav>
      
    </div>
    
  </aside>
</div>
  );
        }
export default StudentSideBar;