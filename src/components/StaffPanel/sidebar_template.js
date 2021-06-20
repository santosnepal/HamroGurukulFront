import React from 'react';
import Base from './base_template';
const Sidebar=(props)=>{
  
  // const callBase=()=>{
  //  fff.trys()
  // };
return(
  
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
          
          <li className="nav-item" onClick={props.cc(1)}>
            
            <a href="#" className="nav-link " >
              <i className="nav-icon fas fa-th" />
              <p>
                Home
              </p>
            </a>
          </li>
          <li className="nav-item">
            
            <a href="#" className="nav-link " >
              <i className="nav-icon fas fa-th"   />
              <p>
                Take Attendance
              </p>
            </a>
          </li>
          <li className="nav-item">
           
            <a href="#" className="nav-link ">
              <i className="nav-icon fas fa-th" />
              <p>
                View Update Attendance
              </p>
            </a>
          </li>
          <li className="nav-item">
            
            <a href="#" className="nav-link ">
              <i className="nav-icon fas fa-th" />
              <p>
                Apply Leave
              </p>
            </a>
          </li>
          <li className="nav-item">
            
            <a href="#" className="nav-link">
              <i className="nav-icon fas fa-th" />
              <p>
                Feedback
              </p>
            </a>
          </li>
          <li className="nav-item">
            
            <a href="#" className="nav-link ">
              <i className="nav-icon fas fa-th" />
              <p>
                Add Result
              </p>
            </a>
          </li>
          <li className="nav-item">
            
            <a href="#" className="nav-link ">
              <i className="nav-icon fas fa-th" />
              <p>
                Edit Result
              </p>
            </a>
          </li>
          
          <li className="nav-item">
            
            <a href="#" className="nav-link ">
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

);
}
export default Sidebar;
