import React from 'react';
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
          <a href="#" className="d-block"> user.username </a>
        </div>
      </div>
      
      <nav className="mt-2">
        <ul className="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu" data-accordion="false">
         
          <li className="nav-item">
            
            <a href="{{ student_home }}" className="nav-link {% if request.path == student_home %} active {% endif %}">
              <i className="nav-icon fas fa-th" />
              <p>
                Home
              </p>
            </a>
          </li>
          <li className="nav-item">
           
            <a href="{{ student_view_attendance }}" className="nav-link ">
              <i className="nav-icon fas fa-th" />
              <p>
                View Attendance
              </p>
            </a>
          </li>
          <li className="nav-item">
             
            <a href="{{ student_apply_leave }}" className="nav-link ">
              <i className="nav-icon fas fa-th" />
              <p>
                Apply for Leave
              </p>
            </a>
          </li>
          <li className="nav-item">
             
            <a href="{{ student_feedback }}" className="nav-link ">
              <i className="nav-icon fas fa-th" />
              <p>
                Feedback Message
              </p>
            </a>
          </li>
          <li className="nav-item">
               
            <a href="{{ student_view_result }}" className="nav-link ">
              <i className="nav-icon fas fa-th" />
              <p>
                Grade Card
              </p>
            </a>
          </li>
          <li className="nav-item">
               
            <a href="{{ student_all_notification }}" className="nav-link ">
              <i className="nav-icon fas fa-th" />
              <p>
                Notifications
              </p>
            </a>
          </li>
        </ul>
      </nav>
      
    </div>
    
  </aside>
</div>
  );
        }
export default StudentSideBar;