import React from 'react';
import Base from './base_template';
import store from '../../store';
import {Link,Redirect } from 'react-router-dom';
const loadUserName=()=>{
 const  state=store.getState();
 return(`${state.auth.user.first_name} ${state.auth.user.last_name}`);
}

const Sidebar=(props)=>{
  
  // const callBase=()=>{
  //  fff.trys()
  // };
return(
  <div>
  <aside className="main-sidebar sidebar-dark-primary elevation-4">

  
  
  <div className="sidebar">
    
    <div className="user-panel mt-3 pb-3 mb-3 d-flex">
      <div className="image">
        <strong>img</strong>
      </div>
      <div className="info">
        <a href="" className="d-block">{loadUserName()}</a>
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
            <Link  to='/staffeditresult' role="button">View/Edit Result</Link> 
               
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
  </div>
);
}
export default Sidebar;
