import React, { useState ,useEffect} from 'react';
import Footer from './Footer';
import Base from './base_template';
import {Link,Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { logout } from '../../actions/auth';
import store from '../../store';
import axios from 'axios';
import { toast } from 'react-toastify';
const loadUserid=()=>{
  const  state=store.getState();
  return(state.auth.user.id);
 }
const FeedBack=({logout,isAuthenticated  })=>{
  
  const [history,updateHistory] = useState([]);

  const LoadData=async()=>{
    const config ={
      headers:{
          'content-type':'application/json',
          'Authorization': `JWT ${localStorage.getItem("access")}`,
          'Accept':'application/json'
      }
  };
  const bhupu = await axios.get(`http://127.0.0.1:8000/api/getstafffeedback/${loadUserid()}`,config);
  updateHistory(bhupu);
  }
  const SendData=async ()=>{
    
    const feedback = document.getElementById("feedback_message").value;
    const staff_id = loadUserid();
    const config ={
      headers:{
          'content-type':'application/json',
          'Authorization': `JWT ${localStorage.getItem("access")}`,
          'Accept':'application/json'
      }
  };
  const body = JSON.stringify({feedback,staff_id});
  console.log(body);
  const res = await axios.post("http://127.0.0.1:8000/api/addstafffeedback",body,config);
  if(res.status===200){
    
    //toast.success(`New Subject ${subject_name} added sucessfully`);
    toast.success(`Feeb Back added successfully`);
    document.getElementById("feedback_message").value = "";
    LoadData();
  }
  else{

    toast.error(`Couldn't add feedback please try again later`);
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
              <h3 className="card-title">Leave a Feedback Message</h3>
            </div>
            
            <div>
              <div className="card-body">
                
                <div className="form-group">
                  <label>Feedback Message</label>
                  <textarea className="form-control" id="feedback_message" rows={6} name="feedback_msg" defaultValue={""} />
                </div>
                <div className="form-group">
                 
                </div>
              </div>
              
              <div className="card-footer">
                <button type="submit" className="btn btn-primary btn-block" onClick={SendData}>Leave a Feedback Message</button>
              </div>
            </div>
          </div>
          
          <div className="card card-primary">
            <div className="card-header">
              <h3 className="card-title">Feedback History</h3>
            </div>
            <div className="table">
             
              <table className="table">
                <tbody><tr>
                    <th>ID</th>
                    <th>Feedback Message</th>
                    <th>Feedback Reply</th>
                  </tr>
                  {history.data?history.data.map(his=>(
                    <tr>
                      <td>{his.id}</td>
                      <td>{his.feedback}</td>
                      <td>{his.feedback_reply}</td>
                      </tr>
                  )):<tr><td>No feedback  History found</td></tr>}
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
export default connect( mapStateToProps, { logout })(FeedBack);