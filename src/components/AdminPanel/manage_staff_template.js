import React, { useState,useEffect } from 'react';
import {Link,Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { logout } from '../../actions/auth';
import AdminBase from './base_template';
import Footer from './footer';
import axios from 'axios';
import {toast} from 'react-toastify';


const ManageStaffs = ({logout,isAuthenticated  })=>{
  let showModel=false;
  const [staffs,updateStaffs] = useState([]);
  const [receiver,updateReceiver] = useState([]);
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
  const trys = (hello) =>{
    updateReceiver(hello);
    console.log(hello);
    // <Modal props={receiver} />
    
 }
 
  
  const Editstaff= ({props})=>{
    const config ={
      headers:{
          'content-type':'application/json',
          'Authorization': `JWT ${localStorage.getItem("access")}`,
          'Accept':'application/json'
      }
  };
    console.log(props);
    console.log("clicked for me");
    let {course,email,first_name,gender,groups,id,is_active,is_staff,is_superuser,last_login,last_name,password,user_permissions,user_types} = props;
     // document.getElementById("main").style.display="none";
     const edit = async ()=>{
        first_name=document.getElementById("fname").value;
        last_name = document.getElementById("lname").value;
        gender = document.getElementById("gender").value;
        const body = JSON.stringify({course,email,first_name,gender,groups,id,is_active,is_staff,is_superuser,last_login,last_name,password,user_permissions,user_types});
        const res = await axios.put(`http://127.0.0.1:8000/api/edituser/${id}`,body,config);
        if(res.status===200){
          //showModel = false;
          console.log(res.data);
          toast.success(`Staff Edited successfully`);
          
          LoadData();
          document.getElementById("closes").click();
          //showModel=false;
        }
        else{
      
          toast.error(` Couldn't Edit Staff`);
        }
     }
    return(
      <div className="modal fade" id="myModal" role="dialog">
    <div className="modal-dialog"></div>
      <div id = "second">
{/* Main content */}
  <section className="content">
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-12">
          {/* general form elements */}
          <div className="card card-primary">
            <div className="card-header">
              <h3 className="card-title">Edit Staff</h3>
            </div>
            {/* /.card-header */}
            {/* form start */}
            <div>
             
              <div className="card-body">
                
                <div className="form-group">
                  <label>First Name</label>
                  <input type="text"  id= "fname" className="form-control" placeholder={props.first_name} name="first_name" defaultValue={props.first_name} />
                </div>
               
                <div className="form-group">
                  <label>Last Name</label>
                  <input type="text" id= "lname" className="form-control" placeholder={props.last_name} name="last_name" defaultValue={props.last_name} />
                </div>
                
                <div className='form-group'>
                  <label>Gender</label>
                 <select className='form-control' id = 'gender'
                 name="gender"
                 >
                   <option>Select Gender</option>
                   <option  value="0">M</option>
                   <option  value ="1">F</option>
                 </select>
               </div>
               
              </div>
              {/* /.card-body */}
              <div className="card-footer">
                <button onClick={edit} className="btn btn-primary btn-block">Save Staff</button>
              </div>
            </div>
          </div>
          {/* /.card */}
        </div>
      </div>
    </div>
  </section>
  <div className="modal-footer">
          <button type="button" id="closes" className="btn btn-default" data-dismiss="modal">Close</button>
        </div>
</div>
</div>


    )
  }
return(
<div id = "main">
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
                      <td><button onClick={showModel=true, ()=>trys(staff)} data-toggle="modal" data-target="#myModal" className="btn btn-success">Edit</button></td>
                      </tr>
                    )):<tr>
                        <td>N/A</td>
                        <td>N/A</td>
                        <td>N/A</td>
                        <td>N/A</td>
                        
                        <td><button   className="btn btn-success">Edit</button></td>
                      </tr>}
                    
                  </tbody>
              </table>
            </div>
            
          </div>
          
        </div>
      </div>
    </div>
  </section>
  {showModel?<Editstaff props={receiver}/>:``}
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
