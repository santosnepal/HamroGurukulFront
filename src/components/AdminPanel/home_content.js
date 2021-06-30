import React, { useEffect,useState } from 'react';
import {Link,Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { logout } from '../../actions/auth';
import AdminBase from './base_template';
import Footer from './footer';
import {Pie} from 'react-chartjs-2';
import axios from 'axios';
const AdminHome = ({logout,isAuthenticated  })=>{

 let stack=[5,5];
 const [tcount, setValue] = useState(0);
 const [scount,setsValue] = useState(0);
 const [ccount,setcValue] = useState(0);
 const [sucount,setsuValue] = useState(0);
 const LoadData= async ()=>{
 const dataS= await axios.get("http://127.0.0.1:8000/api/suser/3");
 const datat = await axios.get("http://127.0.0.1:8000/api/suser/2");
 const datac = await axios.get("http://127.0.0.1:8000/api/viewcourses");
 const datas = await axios.get("http://127.0.0.1:8000/api/viewsubject");
  setValue(datat.data.length);
  setsValue(dataS.data.length);
  setcValue(datac.data.length);
  setsuValue(datas.data.length);
  };
 useEffect(() => {
    LoadData();
  }, []);

 
  
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
   
 // console.log(`${this.state.dataSS} ${this.state.datatt}`);
  const labels=['Staff','Students'];
  const datasets=[{
    data:[tcount,scount],
    backgroundColor:['red','blue']
  }]

 


return(
<div>
<div className="hold-transition sidebar-mini  layout-fixed">
  <AdminBase/>
</div>
  <div className="content-wrapper">
  <section className="content">
    <div className="container-fluid">
      <div className="row">
        <div className="col-lg-3 col-6">
          {/* small box */}
          <div className="small-box bg-info">
            <div className="inner">
              <h3> {scount} </h3>
              <p>Total Students</p>
            </div>
            <div className="icon">
              <i className="ion ion-pie-graph" />
            </div>
            <Link to="#" className="small-box-footer">More info <i className="fas fa-arrow-circle-right" /></Link>
          </div>
        </div>
        
        <div className="col-lg-3 col-6">
         
          <div className="small-box bg-success">
            <div className="inner">
              <h3> {tcount}</h3>
              <p>Total Staffs</p>
            </div>
            <div className="icon">
              <i className="ion ion-pie-graph" />
            </div>
            <Link to="#" className="small-box-footer">More info <i className="fas fa-arrow-circle-right" /></Link>
          </div>
        </div>
       
        <div className="col-lg-3 col-6">
         
          <div className="small-box bg-warning">
            <div className="inner">
              <h3>{ccount}</h3>
              <p>Total Course</p>
            </div>
            <div className="icon">
              <i className="ion ion-pie-graph" />
            </div>
            <Link to="#" className="small-box-footer">More info <i className="fas fa-arrow-circle-right" /></Link>
          </div>
        </div>
        
        <div className="col-lg-3 col-6">
         
          <div className="small-box bg-danger">
            <div className="inner">
              <h3> {sucount} </h3>
              <p>Total Subject</p>
            </div>
            <div className="icon">
              <i className="ion ion-pie-graph" />
            </div>
            <Link to="#" className="small-box-footer">More info <i className="fas fa-arrow-circle-right" /></Link>
          </div>
        </div>
        
      </div>
      <div className="row">
        <div className="col-lg-6">
          <div className="card card-danger">
            <div className="card-header">
              <h3 className="card-title">Student and Staff Chart</h3>
              <div className="card-tools">
                <button type="button" className="btn btn-tool" data-card-widget="collapse"><i className="fas fa-minus" />
                </button>
                <button type="button" className="btn btn-tool" data-card-widget="remove"><i className="fas fa-times" /></button>
              </div>
            </div>
            <div className="card-body">
              {/* <canvas id="pieChart" style={{minHeight: 250, height: 250, maxHeight: 250, maxWidth: '100%'}} /> */}
              <Pie
                data={{
                  labels:labels,
                  datasets:datasets
                }}
                minHeight = '250'
                height = '250'
                maxHeight = '250'
                maxWidth = '100%'
              />
            </div>
            
          </div>
        </div>
        <div className="col-lg-6">
          <div className="card card-success">
            <div className="card-header">
              <h3 className="card-title">Total Subject in Each Courses</h3>
              <div className="card-tools">
                <button type="button" className="btn btn-tool" data-card-widget="collapse"><i className="fas fa-minus" />
                </button>
                <button type="button" className="btn btn-tool" data-card-widget="remove"><i className="fas fa-times" /></button>
              </div>
            </div>
            <div className="card-body">
              <canvas id="donutChart" style={{minHeight: 250, height: 250, maxHeight: 250, maxWidth: '100%'}} />
            </div>
            
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-lg-6">
          <div className="card card-info">
            <div className="card-header">
              <h3 className="card-title">Total Student in Each Course</h3>
              <div className="card-tools">
                <button type="button" className="btn btn-tool" data-card-widget="collapse"><i className="fas fa-minus" />
                </button>
                <button type="button" className="btn btn-tool" data-card-widget="remove"><i className="fas fa-times" /></button>
              </div>
            </div>
            <div className="card-body">
              <canvas id="pieChart3" style={{minHeight: 250, height: 250, maxHeight: 250, maxWidth: '100%'}} />
            </div>
            
          </div>
        </div>
        <div className="col-lg-6">
          <div className="card card-warning">
            <div className="card-header">
              <h3 className="card-title">Total Student in Each Subject</h3>
              <div className="card-tools">
                <button type="button" className="btn btn-tool" data-card-widget="collapse"><i className="fas fa-minus" />
                </button>
                <button type="button" className="btn btn-tool" data-card-widget="remove"><i className="fas fa-times" /></button>
              </div>
            </div>
            <div className="card-body">
              <canvas id="pieChart4" style={{minHeight: 250, height: 250, maxHeight: 250, maxWidth: '100%'}} />
            </div>
            
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-lg-12">
          <div className="card card-success">
            <div className="card-header">
              <h3 className="card-title">Staff Leaves vs Attendance</h3>
              <div className="card-tools">
                <button type="button" className="btn btn-tool" data-card-widget="collapse"><i className="fas fa-minus" />
                </button>
                <button type="button" className="btn btn-tool" data-card-widget="remove"><i className="fas fa-times" /></button>
              </div>
            </div>
            <div className="card-body">
              <div className="chart">
                <canvas id="barChart1" style={{minHeight: 250, height: 250, maxHeight: 250, maxWidth: '100%'}} />
              </div>
            </div>
            
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-lg-12">
          <div className="card card-success">
            <div className="card-header">
              <h3 className="card-title">Student Leaves vs Attendance</h3>
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
  <Footer/>
</div>
);
}
const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated
});

export default connect( mapStateToProps, { logout })(AdminHome);
