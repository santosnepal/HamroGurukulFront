import React from 'react';
import {Link,Redirect } from 'react-router-dom';
import store from '../../store';
const loadUserName=()=>{
 const  state=store.getState();
 return(`${state.auth.user.first_name} ${state.auth.user.last_name}`);
}

const AdminSideBar=()=>{
  const trystyle={
    overflowY: 'scroll',
    overflowX:'auto'
    }
  return(

<div >
  <aside className="main-sidebar sidebar-dark-primary elevation-4" >
  
    <div className="container-fluid">
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
            
            <Link to="/adminhome" className="nav-link ">
              <i className="nav-icon fas fa-th" />
              <p>
                Home
              </p>
            </Link>
          </li>
          <li className="nav-item">
            
            <Link to="/addstaff" className="nav-link ">
              <i className="nav-icon fas fa-th" />
              <p>
                Add Staff
              </p>
            </Link>
          </li>
          <li className="nav-item">
            
            <Link to="/managestaff" className="nav-link ">
              <i className="nav-icon fas fa-th" />
              <p>
                Manage Staff
              </p>
            </Link>
          </li>
          <li className="nav-item">
            
            <Link to="/addstudent" className="nav-link ">
              <i className="nav-icon fas fa-th" />
              <p>
                Add Student
              </p>
            </Link>
          </li>

          <li className="nav-item">
            <Link to = "/enrollstudent" className="nav-link">
              <i className="nav-icon fas fa-th"/>
              <p>
                Enroll Student
              </p>
            </Link>

          </li>
          <li className="nav-item">
            
            <Link to="/managestudent" className="nav-link ">
              <i className="nav-icon fas fa-th" />
              <p>
                Manage Students
              </p>
            </Link>
          </li>
          <li className="nav-item">
            
            <Link to="/addcourse" className="nav-link ">
              <i className="nav-icon fas fa-th" />
              <p>
                Add Course
              </p>
            </Link>
          </li>
          <li className="nav-item">
            
            <Link to="/managecourse" className="nav-link ">
              <i className="nav-icon fas fa-th" />
              <p>
                Manage Course
              </p>
            </Link>
          </li>
          <li className="nav-item">
            
            <Link to="/addsubject" className="nav-link ">
              <i className="nav-icon fas fa-th" />
              <p>
                Add Subject
              </p>
            </Link>
          </li>
          <li className="nav-item">
           
            <Link to="/managesubject" className="nav-link  ">
              <i className="nav-icon fas fa-th" />
              <p>
                Manage Subject
              </p>
            </Link>
          </li>
          <li className="nav-item">
           
            <Link to="/managesession" className="nav-link  ">
              <i className="nav-icon fas fa-th" />
              <p>
                Manage Session Year
              </p>
            </Link>
          </li>
          <li className="nav-item">
            
            <Link to="studentfeedbackadmin" className="nav-link ">
              <i className="nav-icon fas fa-th" />
              <p>
                Student Feedback
              </p>
            </Link>
          </li>
          <li className="nav-item">
            
            <Link to="/stafffeedbackadmin" className="nav-link ">
              <i className="nav-icon fas fa-th" />
              <p>
                Staff Feedback
              </p>
            </Link>
          </li>
          <li className="nav-item">
            
            <Link to="/studentleaveadmin" className="nav-link">
              <i className="nav-icon fas fa-th" />
              <p>
                Student Leave
              </p>
            </Link>
          </li>
          <li className="nav-item">
            
            <Link to="/staffleaveadmin" className="nav-link ">
              <i className="nav-icon fas fa-th" />
              <p>
                Staff Leave
              </p>
            </Link>
          </li>
          <li className="nav-item">
            
            <Link to="/adminviewhajir" className="nav-link ">
              <i className="nav-icon fas fa-th" />
              <p>
                View Attendance
              </p>
            </Link>
          </li>
          <li className="nav-item">
            
            <Link to="/ssna" className="nav-link ">
              <i className="nav-icon fas fa-th" />
              <p>
                Send Staff Notification
              </p>
            </Link>
          </li>
          <li className="nav-item">
            
            <Link to="/sstna" className="nav-link ">
              <i className="nav-icon fas fa-th" />
              <p>
                Send Student Notification
              </p>
            </Link>
          </li>
        </ul>
      </nav>
      
    </div>
    </div>
    
    
  </aside>

</div>
 );
}
export default AdminSideBar;
