import React, { useState,useEffect } from 'react';
import Footer from './Footer';
import Base from './base_template';
import {Link,Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { logout } from '../../actions/auth';
import store from '../../store';
import axios from 'axios';
import {toast} from 'react-toastify';
const loadUserid=()=>{
  const  state=store.getState();
  return(state.auth.user.id);
 }
const ApplyLeave=({logout,isAuthenticated  })=>{
  const [history,updateHistory] = useState([]);

  const LoadData=async()=>{
    const config ={
      headers:{
          'content-type':'application/json',
          'Authorization': `JWT ${localStorage.getItem("access")}`,
          'Accept':'application/json'
      }
  };
  const bhupu = await axios.get(`http://127.0.0.1:8000/api/getstaffleave/${loadUserid()}`,config);
  updateHistory(bhupu);
  }
  const SendData=async ()=>{
    const leave_date = document.getElementById("leave_date").value;
    const leave_message = document.getElementById("leave_message").value;
    const staff_id = loadUserid();
    const config ={
      headers:{
          'content-type':'application/json',
          'Authorization': `JWT ${localStorage.getItem("access")}`,
          'Accept':'application/json'
      }
  };
  const body = JSON.stringify({leave_date,leave_message,staff_id});
  console.log(body);
  const res = await axios.post("http://127.0.0.1:8000/api/addstaffleave",body,config);
  if(res.status===200){
    
    //toast.success(`New Subject ${subject_name} added sucessfully`);
    toast.success(`Leave request added successfully Please wait for admin to approve it`);
    document.getElementById("leave_date").value = "";
    document.getElementById("leave_message").value = "";
    LoadData();
  }
  else{

    toast.error(`Couldn't apply Leave  please try again later`);
  }
  }

  useEffect(()=>{
    LoadData();
  },[])
  
return(
  <div >
  <div className="hold-transition sidebar-mini  layout-fixed">
  <Base/>
</div>
<div className="content-wrapper">
<div>
  
  <section className="content">
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-12">
         
          <div className="card card-primary">
            <div className="card-header">
              <h3 className="card-title">Apply for Leave</h3>
            </div>
            
            <div >
              <div className="card-body">
                <div className="form-group">
                  <label>Leave Date </label>
                  
                  <input type="date" name="leave_date" id="leave_date"className="form-control" placeholder="Leave Date" />
                </div>
                <div className="form-group">
                  <label>Leave Reason</label>
                  <textarea className="form-control" id="leave_message" rows={6} name="leave_msg" defaultValue={""} />
                </div>
                <div className="form-group">
                  
                  
                  
                </div>
              </div>
              
              <div className="card-footer">
                <button onClick={SendData} className="btn btn-primary btn-block" id="fetch_student">Apply for Leave</button>
              </div>
            </div>
          </div>
          
          <div className="card card-primary">
            <div className="card-header">
              <h3 className="card-title">Leave Apply History</h3>
            </div>
            <div className="table">
              
              <table className="table">
                <tbody><tr>
                    <th>ID</th>
                    <th>Leave Date</th>
                    <th>Leave Message</th>
                    <th>Leave Status</th>
                  </tr>
                  {history.data?history.data.map(his=>(
                    <tr>
                      <td>{his.id}</td>
                      <td>{his.leave_date}</td>
                      <td>{his.leave_message}</td>
                      <td>
                      
                      <span className="alert alert-success" style={{display:his.leave_status===1?"flex":"none"}}>Approved</span>
                      
                      <span className="alert alert-danger"  style={{display:his.leave_status===2?"flex":"none"}}>Rejected</span>
                      
                      <span className="alert alert-info" style={{display:his.leave_status===0?"flex":"none"}}>Pending</span>
                      
                    </td>
                    </tr>
                  )):<tr><td>No leave History found</td></tr>}
                  
                  </tbody></table>
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
 


);
}
const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated
});
export default connect( mapStateToProps, { logout })(ApplyLeave);