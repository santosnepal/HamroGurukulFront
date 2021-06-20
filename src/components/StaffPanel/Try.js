import Footer from "./Footer"

const Try=()=>{
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
              <a className="nav-link" href="#"  >
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
        
  <div className="content-wrapper">
          
    </div>
        
    <Footer/>
      </div>
     
    </div>
    );

}
export default Try;
