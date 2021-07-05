import React, { useState,useEffect } from 'react';
import {Link,Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { logout } from '../../actions/auth';
import AdminBase from './base_template';
import Footer from './footer';
import axios from 'axios';


const ManageStaffs = ({logout,isAuthenticated  })=>{
  const [staffs,updateStaffs] = useState([]);
  const [redirect, setRedirect] = useState(false);
  const LoadData= async ()=>{
    const config ={
      headers:{
          'content-type':'application/json',
          'Authorization': `JWT ${localStorage.getItem("access")}`,
          'Accept':'application/json'
      }
  };
        const dataS= await axios.get("http://127.0.0.1:8000/api/suser/2",config);
        console.log("Hey ia m called");
	updateStaffs(dataS);
  };
   useEffect(() => {
     console.log("Hey i am calling");
    LoadData();
  }, []);
  console.log(staffs);
 
  if(isAuthenticated ){
    console.log("chor haina ma ");
  } 
  else{
    
    return <Redirect to="/"/>
  }
  
return(
<div>
<div className="hold-transition sidebar-mini  layout-fixed">
  
  <AdminBase/>
  
 
  </div>
  <div className="content-wrapper">
  <section className="content">
    <div className="container-fluid">
      <div className="row">
        <div className="col-12">
          <div className="card">
            <div className="card-header">
              <h3 className="card-title">Staff Details</h3>
              <div className="card-tools">
                <div className="input-group input-group-sm" style={{width: 150}}>
                  <input type="text" name="table_search" className="form-control float-right" placeholder="Search" />
                  <div className="input-group-append">
                    <button type="submit" className="btn btn-default"><i className="fas fa-search" /></button>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="card-body table-responsive p-0">
             
              <table className="table table-hover text-nowrap">
                <thead>
                  <tr>
                    <th>ID</th>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Email</th>
                    <th>Address</th>
                    <th>Last Login</th>
                    <th>Date Joined</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                    {staffs.data?staffs.data.map(staff =>(
                      <tr>
                      <td> {staff.id} </td>
                      <td> {staff.first_name} </td>
                      <td> {staff.last_name} </td>
                      <td> {staff.email} </td>
                      <td> {staff.address?staff.address:`N/A`} </td>
                      <td> {staff.last_login?staff.last_login:`N/A`} </td>
                      <td> {staff.date_joined?staff.date_joined:`N/A`} </td>
                      <td><Link to="#" className="btn btn-success">Edit</Link></td>
                      </tr>
                    )):<tr>
                        <td>N/A</td>
                        <td>N/A</td>
                        <td>N/A</td>
                        <td>N/A</td>
                        <td>N/A</td>
                        <td>N/A</td>
                        <td>N/A</td>
                        <td>N/A</td>
                        <td><Link to="#" className="btn btn-success">Edit</Link></td>
                      </tr>}
                    
                  </tbody>
              </table>
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
// return(
//   <div>
//     Hello guys
//   </div>
// )
}
const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated
});

export default connect( mapStateToProps, { logout })(ManageStaffs);
