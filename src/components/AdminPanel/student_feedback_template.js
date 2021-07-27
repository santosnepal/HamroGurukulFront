import React, { useState,useEffect } from 'react';
import {Link,Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { logout } from '../../actions/auth';
import AdminBase from './base_template';
import Footer from './footer';
import axios from 'axios';


const StudentFeedBackAdmin = ({logout,isAuthenticated  })=>{
  const [feedback,updateFeedback] = useState([]);
  const [students,updateStudents] = useState([]);
  const LoadData= async ()=>{
    const config ={
      headers:{
          'content-type':'application/json',
          'Authorization': `JWT ${localStorage.getItem("access")}`,
          'Accept':'application/json'
      }
  };
        const dataS= await axios.get("http://127.0.0.1:8000/api/getstudentfeedback",config);
        const data= await axios.get("http://127.0.0.1:8000/api/suser/3",config);
        updateFeedback(dataS);
        updateStudents(data);
      
  };
  let showModel=false;
  const Model=()=>{
    return(
      <div>
        <div className="modal fade" id="reply_modal" role="dialog">
    <div className="modal-dialog">
      {/* Modal content*/}
      <div className="modal-content">
        <div className="modal-header">
          <h4 className="modal-title">Reply</h4>
          <button type="button" className="close" data-dismiss="modal">×</button>
        </div>
        <div className="modal-body">
          <p>Reply To : <span id="reply_name" /></p>
          <input type="hidden" id="reply_id" name="reply_id" />
          <textarea className="form-control" rows={5} id="reply_message" defaultValue={""} />
          <button id="reply_btn" className="btn btn-info btn-block">Reply</button>
        </div>
        <div className="modal-footer">
          <button type="button" className="btn btn-default" data-dismiss="modal">Close</button>
        </div>
      </div>
    </div>
  </div>
      </div>
    );
  }
  useEffect(async ()=>{
    LoadData();
  },[])
return(
<div>
<div className="hold-transition sidebar-mini  layout-fixed">
  
  <AdminBase/>
  
 
  </div>
  <div className="content-wrapper">
  <section className="content">
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-12">
          {/* general form elements */}
          <div className="card card-primary">
            <div className="card-header">
              <h3 className="card-title">Student Feedback</h3>
            </div>
            {/* /.card-header */}
            {/* form start */}
            <div className="table">
              
              <table className="table">
                <tbody><tr>
                    <th>ID</th>
                    <th>Student ID</th>
                    <th>Student Name</th>
                    <th>Message</th>
                    <th>Sended On</th>
                    <th>Reply</th>
                  </tr>
                  {feedback.data?feedback.data.map(fee=>(
                    <tr>
                    <td>{fee.id} </td>
                    <td>{fee.student_id} </td>
                    <td>{students.data?students.data.map(students=>(
                      fee.student_id===students.id?`${students.first_name} ${students.last_name}`:``
                    )):`N/A`} </td>
                    <td>{fee.feedback} </td>
                    <td>{fee.created_at} </td>
                    <td>
                     
                      <button className="btn btn-success reply_open_modal" data-toggle="modal" data-target="#reply_modal" onClick={showModel=true} >Reply</button>
                     
                    </td>
                  </tr>

                  )):
                  <tr>
                  <td>N/A </td>
                  <td>N/A </td>
                  <td>N/A </td>
                  <td>N/A </td>
                  <td>N/A </td>
                  <td>
                   
                    <button className="btn btn-success reply_open_modal" data-toggle="modal" data-target="#reply_modal" >Reply</button>
                   
                  </td>
                </tr>
}
                  
                  </tbody></table>
            </div>
          </div>
          {/* /.card */}
        </div>
      </div>
    </div>
  </section>
  {/* Modal */}
  {showModel?<Model/>:` `}
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

export default connect( mapStateToProps, { logout })(StudentFeedBackAdmin);