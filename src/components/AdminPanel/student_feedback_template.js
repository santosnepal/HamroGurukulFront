import React, { useState,useEffect } from 'react';
import {Link,Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { logout } from '../../actions/auth';
import AdminBase from './base_template';
import Footer from './footer';
import axios from 'axios';
import {toast} from 'react-toastify';


const StudentFeedBackAdmin = ({logout,isAuthenticated  })=>{
  const [feedbacks,updateFeedback] = useState([]);
  const [students,updateStudents] = useState([]);
  const [receiver,updateReceiver] = useState([]);
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
 
    const Model=({props})=>{
      console.log(props);
    //   return(
    //     <div>
    //       <div className="modal fade" id="reply_modal" role="dialog">
    //   <div className="modal-dialog">
    //     {/* Modal content*/}
    //     <div className="modal-content">
    //       <div className="modal-header">
    //         <h4 className="modal-title">Reply</h4>
    //         <button type="button" className="close" data-dismiss="modal">×</button>
    //       </div>
    //       <div className="modal-body">
    //         <p>Reply To :{students.data?students.data.map(stf=>(
    //           stf.id===props.iid?`${stf.first_name} ${stf.last_name}`:null
    //         )): null } <span id="reply_name" /></p>
    //         <input type="hidden" id="reply_id" name="reply_id" />
    //         <textarea className="form-control" rows={5} id="reply_message" defaultValue={""} />
    //         <button id="reply_btn" className="btn btn-info btn-block">Reply</button>
    //       </div>
    //       <div className="modal-footer">
    //         <button type="button" className="btn btn-default" data-dismiss="modal">Close</button>
    //       </div>
    //     </div>
    //   </div>
    // </div>
    //     </div>
    //   );
  
    const reply = async ()=>{
      const config ={
        headers:{
            'content-type':'application/json',
            'Authorization': `JWT ${localStorage.getItem("access")}`,
            'Accept':'application/json'
        }
      };
      const rep_msg = document.getElementById("reply_message").value;
     const feeds =  feedbacks.data.filter(fee=>{
        if(fee.id===props.fid){
          console.log(fee);
          return fee;
        }
      });
      console.log(feeds[0]);
     const aa= feeds[0];
   const {created_at,feedback,id,student_id,updated_at} = aa;
   const feedback_reply=rep_msg;
    const  body = JSON.stringify({created_at,feedback,feedback_reply,id,student_id,updated_at});
     console.log(body);
    
   // const rep_msg = document.getElementById("reply_message").value;
    //fees.feedback_reply= rep_msg;
    ///fff.feedback_reply=rep_msg;
    //console.log(fedr);
    const res = await axios.put(`http://127.0.0.1:8000/api/editstudentfeedback/${props.fid}`,body,config)
    if(res.status===200){
      //showModel = false;
      console.log(res.data);
      toast.success(`Reply Sent  sucessfully`);
      document.getElementById("reply_message").value="";
      LoadData();
      document.getElementById("closes").click();
      //showModel=false;
    }
    else{
  
      toast.error(` Couldn't send  Reply  please try again later`);
    }
  }
    return(
      <div>
         {/* /.content */}
  <div className="modal fade" id="myModal" role="dialog">
    <div className="modal-dialog">
      {/* Modal content*/}
      <div className="modal-content">
        <div className="modal-header">
          <h4 className="modal-title">Send Reply to {students.data?students.data.map(stf=>(
              stf.id===props.iid?`${stf.first_name} ${stf.last_name}`:null
             )): null } <span id="name_span" /></h4>
          <button type="button" className="close" data-dismiss="modal">×</button>
        </div>
        <div className="modal-body">
          <div className="form-group">
          <textarea className="form-control" rows={5} id="reply_message" defaultValue={""} />
            
          </div>
          <div className="form-group">
            <button className="btn btn-info btn-block send_notification_btn"  onClick={reply}  type="button">Reply</button>
          </div>
        </div>
        <div className="modal-footer">
          <button type="button" id="closes" className="btn btn-default" data-dismiss="modal">Close</button>
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
  const trys = (hello) =>{
    updateReceiver(hello);
    console.log(hello);
    // <Modal props={receiver} />
    
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
                    <th>Replied Message</th>
                    <th>Sended On</th>
                    <th>Reply</th>
                  </tr>
                  {feedbacks.data?feedbacks.data.map(fee=>(
                    <tr>
                    <td>{fee.id} </td>
                    <td>{fee.student_id} </td>
                    <td>{students.data?students.data.map(students=>(
                      fee.student_id===students.id?`${students.first_name} ${students.last_name}`:``
                    )):`N/A`} </td>
                    <td>{fee.feedback} </td>
                    <td>{fee.feedback_reply}</td>
                    <td>{fee.created_at} </td>
                    <td>
                     
                    <button to="#" className="btn btn-success show_notification" data-toggle="modal" data-target="#myModal"  onClick={showModel=true, ()=>trys({hello:'hello',iid:fee.student_id ,fid:fee.id})}  >Reply</button>
                     
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
  {showModel?<Model props={receiver} />:``}
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